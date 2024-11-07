from django.contrib import admin
from .models import Appointment

@admin.register(Appointment)
class AppointmentAdmin(admin.ModelAdmin):
    list_display = ('patient', 'provider', 'Appointment_date', 'time', 'status')
    list_filter = ('provider', 'Appointment_date')
    search_fields = ('user__username', 'provider__name')
    fieldsets = (
        ('patient and Provider Info', {
            'fields': ('patient', 'provider')
        }),
        ('Appointment Details', {
            'fields': ('appointment_date', 'status')
        }),
    )
