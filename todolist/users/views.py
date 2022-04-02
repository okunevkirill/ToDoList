from rest_framework import mixins, viewsets

from .models import CustomUser
from .serializers import CustomUserSerializer


class CustomUserViewSet(mixins.RetrieveModelMixin, mixins.UpdateModelMixin,
                        mixins.ListModelMixin, viewsets.GenericViewSet):
    queryset = CustomUser.objects.all()
    serializer_class = CustomUserSerializer
