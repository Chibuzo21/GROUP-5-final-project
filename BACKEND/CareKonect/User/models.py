from django.db import models
from django.contrib.auth.models import User

# Create your models here.

class Appointment(models.Model):
    patient_name = models.CharField(max_length=100)
    doctor_name = models.CharField(max_length=100)
    date = models.DateField()
    time = models.TimeField()
    description = models.TextField()

    def __str__(self):
        return f"{self.patient_name} - {self.date} at {self.time}"
