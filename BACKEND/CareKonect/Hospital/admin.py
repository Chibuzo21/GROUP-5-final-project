from django.contrib import admin 
from .models import HealthcareProvider


# Register your models here.
# admin.site.register(HealthcareProvider)
@admin.register(HealthcareProvider)
class HealthcareProviderAdmin(admin.ModelAdmin):
    list_display = ('name', 'specialty', 'location')

