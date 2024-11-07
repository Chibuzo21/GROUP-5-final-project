from django.db import models
from User.models import UserProfile
from Hospital.models import HealthcareProvider



# Create your models here.
class Appointment(models.Model):
    patient = models.ForeignKey(UserProfile, on_delete=models.CASCADE, related_name='appointments')
    provider = models.ForeignKey(HealthcareProvider, on_delete=models.CASCADE, related_name='appointments')
    Appointment_date = models.DateField()
    time = models.TimeField()
    status = models.CharField(max_length=20, choices=[('pending', 'Pending'), ('confirmed', 'Confirmed'), ('cancelled', 'Cancelled')])

    def __str__(self):
        return f"Appointment for {self.patient} on {self.appointment_date}"