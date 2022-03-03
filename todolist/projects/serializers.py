from rest_framework.serializers import HyperlinkedModelSerializer, StringRelatedField

from users.serializers import CustomUserModelSerializer
from .models import Project, ToDo


class ProjectModelSerializer(HyperlinkedModelSerializer):
    users = StringRelatedField(many=True)

    class Meta:
        model = Project
        fields = '__all__'


class ToDoModelSerializer(HyperlinkedModelSerializer):
    author = CustomUserModelSerializer()

    class Meta:
        model = ToDo
        exclude = ('is_active',)
