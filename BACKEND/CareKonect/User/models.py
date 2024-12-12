from django.db import models
from django.contrib.auth.models import User
from django.contrib.auth.models import AbstractUser

# Create your models here.



class UserProfile(AbstractUser):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    is_doctor = models.BooleanField(default=False)
    phone_number = models.CharField(max_length=15)
    address = models.TextField()

    def __str__(self):
        return self.user.username
    from django.contrib.auth.models import AbstractUser

# class CustomUser(models.Model):
    # Add any additional fields if necessary
    # pass

