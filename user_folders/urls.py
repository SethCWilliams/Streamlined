from django.contrib import admin
from django.urls import path
from . import views

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
    path('browse/', views.browse, name='browse'),
    path('<int:ref_id>/', views.DetailView.as_view(), name='detail'),
# <int:ref_id>/
]