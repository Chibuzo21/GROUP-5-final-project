from django import views
from django.urls import path
from .views import SignupView, LoginView,login_view
from django.contrib.auth import views as auth_views

urlpatterns = [
    path('signup/', SignupView.as_view(), name='signup'),
    path('login/', LoginView.as_view(), name='login'),
    # path('/',login_view, name='login_view'),
]