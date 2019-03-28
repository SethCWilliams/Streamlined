from django.contrib import admin
from django.urls import path
from . import views

from .api import FolderViewSet, ProgramViewSet, UpdateFolderViewSet, DeleteFolderViewSet, RemoveProgramViewSet
# RemoveProgramViewSet

app_name = 'programs'

urlpatterns = [
    path('api/folder/', FolderViewSet.as_view({
        'get': 'list',
        'post': 'create',
        'put': 'update',
        'delete': 'destroy',
    }), name='folder_api'),
    path('api/folder/<int:pk>/', UpdateFolderViewSet.as_view(), name='update_folder_api'),
    path('api/program/', ProgramViewSet.as_view({
        'get': 'list',
        'post': 'create',
        'put': 'update',
        'delete': 'destroy',
    }), name='program_api'),
    path('api/folder/<int:pk>/', DeleteFolderViewSet.as_view(), name='delete'),
    path('program/browse/', views.BrowseView.as_view(), name='browse'),
    path('program/<int:ref_id>/', views.DetailView.as_view(), name='detail'),
    path('api/folder/<int:pk>/program/<int:choice_pk>/', RemoveProgramViewSet.as_view(), name="remove_program")

]