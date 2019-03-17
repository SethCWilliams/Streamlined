from django.urls import path
from . import views

app_name = 'streamlined'

urlpatterns = [
    path('', views.IndexView.as_view(), name='home'),
    path('browse/', views.browse, name='browse'),
    path('details/', views.DetailView.as_view(), name='detail'),

]
