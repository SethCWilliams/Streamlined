from django.urls import path
from . import views

app_name = 'streamlined'

urlpatterns = [
    path('', views.HomeView.as_view(), name='home'),
    path('browse/', views.browse, name='browse'),
]
