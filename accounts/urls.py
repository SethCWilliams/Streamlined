from django.contrib.auth.views import LoginView, LogoutView
from django.urls import path, include

from .views import SignupView


app_name = 'users'

urlpatterns = [
    path('signup/', SignupView.as_view(), name="signup"),
    path('login/', LoginView.as_view(template_name="registration/login.html"), name="login"),
    path('logout/', LogoutView.as_view(template_name="registration/logout.html"), name="logout"),
    path('users/', include('django.contrib.auth.urls')),
]