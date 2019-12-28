from django.contrib import admin
from django.contrib.auth.admin import UserAdmin
from terra.models import *

# Register your models here.


class EmployeeAdmin(UserAdmin):
    model = Employee
    fieldsets = (
        (
            'Выберите клуб сотрудника', {
                'fields': ('club',)
            }
        ),
    ) + UserAdmin.fieldsets
    add_fieldsets = (
        (
            'Выберите клуб сотрудника', {
                'classes': ('wide',),
                'fields': ('club',)
            }
        ),
    ) + UserAdmin.add_fieldsets

    def in_groups(self, obj):
        return '\n'.join([g.name for g in obj.groups.all()])

    in_groups.short_description = 'Groups'


class ClubAdmin(admin.ModelAdmin):
    model = Club

class EventAdmin(admin.ModelAdmin):
    model = Event
    list_display = ['club', 'created', 'end_time']

class MemberAdmin(admin.ModelAdmin):
    model = Member
    list_display = ['name', 'event', 'pay', 'extra_pay']


admin.site.register(Employee, EmployeeAdmin)
admin.site.register(Club, ClubAdmin)
admin.site.register(Event, EventAdmin)
admin.site.register(Member, MemberAdmin)
