from django.urls import path
from .views import SignupView, LoginView
from django.contrib.auth import views as auth_views

urlpatterns = [
    path('signup/', auth_views.SignupView.as_view(), name='signup'),
    path('login/', auth_views.LoginView.as_view(), name='login'),
]