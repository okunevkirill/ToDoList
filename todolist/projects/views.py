from rest_framework.response import Response
from rest_framework.viewsets import ModelViewSet
from rest_framework import status

from .filters import ProjectFilter, ToDoFilter
from .models import Project, ToDo
from .pagination import ProjectLimitOffsetPagination, ToDoLimitOffsetPagination
from .serializers import ProjectModelSerializer, ToDoModelSerializer


class ProjectViewSet(ModelViewSet):
    queryset = Project.objects.all()
    serializer_class = ProjectModelSerializer
    pagination_class = ProjectLimitOffsetPagination
    filterset_class = ProjectFilter


class ToDoViewSet(ModelViewSet):
    queryset = ToDo.objects.all()
    serializer_class = ToDoModelSerializer
    pagination_class = ToDoLimitOffsetPagination
    filterset_class = ToDoFilter

    def get_serializer_context(self):
        context = super().get_serializer_context()
        context['user'] = self.request.user
        return context

    def destroy(self, request, *args, **kwargs):
        try:
            todo = self.get_object()
            todo.is_active = False
            todo.save()
        except Exception:  # ToDo Заменить на middleware или сузить исключение
            return Response(status=status.HTTP_404_NOT_FOUND)
        else:
            return Response(status=status.HTTP_200_OK)
