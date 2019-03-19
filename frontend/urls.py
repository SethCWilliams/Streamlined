from django.contrib import admin
from django.urls import path

from .views import IndexView

app_name = 'frontend'
urlpatterns = [
    path('frontend/', IndexView.as_view(), name='index'),
]
