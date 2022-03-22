from django.contrib import admin
from django.contrib.auth.admin import UserAdmin

from .models import CustomUser


@admin.register(CustomUser)
class CustomUserAdmin(UserAdmin):
    model = CustomUser
    list_display = ('uid', 'username', 'first_name', 'last_name', 'email', 'date_joined')
    list_display_links = ('uid', 'username', 'email')
    search_fields = ('uid', 'username', 'first_name', 'last_name', 'email')
