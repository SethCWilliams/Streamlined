from django.contrib import admin
from django.urls import path

from .views import IndexView


urlpatterns = [
    path('frontend/', IndexView.as_view(), name='index'),
]