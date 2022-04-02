"""
todolist URL Configuration
"""
from django.contrib import admin
from django.urls import path, include

from rest_framework.routers import DefaultRouter

from projects.views import ProjectViewSet, ToDoViewSet
from users.views import CustomUserViewSet

router = DefaultRouter()
router.register(r'users', CustomUserViewSet)
router.register(r'projects', ProjectViewSet)
router.register(r'todos', ToDoViewSet)

urlpatterns = [
    path('admin/', admin.site.urls),
    # ------------------------------
    path('api-auth/', include('rest_framework.urls')),
    # ------------------------------
    path('', include(router.urls)),
]
