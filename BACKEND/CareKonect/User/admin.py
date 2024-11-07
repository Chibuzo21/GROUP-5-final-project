from types import MemberDescriptorType
from django.contrib import admin
from .models import *
from .models import UserProfile


# Register your models here.
@admin.register(UserProfile)
class UserProfileAdmin(admin.ModelAdmin):
    list_display = ('user', 'phone_number', 'address')



