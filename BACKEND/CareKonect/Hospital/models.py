from os import name
from django.db import models
from User.models import UserProfile





# Create your models here.
# class HealthcareProvider(models.Model):
#     name = models.OneToOneField(UserProfile, on_delete=models.CASCADE)
#     speciality = models.CharField(max_length=50)  # e.g., "Cardiologist"
#     location = models.TextField()  # Store available time slots

class HealthcareProvider(models.Model):
    name = models.CharField(max_length=200)
    specialty = models.CharField(max_length=200)
    location = models.CharField(max_length=200)

    def __str__(self):
        return self.name

    # def __str__(self):
    #     return f"{self.user.username} - {self.specialization}"
