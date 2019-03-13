from django.contrib import admin
from django.urls import path

from .api import FolderViewSet, ProgramViewSet

urlpatterns = [
    path('api/folder/', FolderViewSet.as_view({
       'get': 'list',
       'post': 'create',
    }), name='folder_api'),
    path('api/program/', ProgramViewSet.as_view({
       'get': 'list',
       'post': 'create',
    }), name='program_api'),
]