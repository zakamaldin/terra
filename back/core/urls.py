from django.contrib import admin
from django.urls import path, include


urlpatterns = [
    path('api/', include('terra.urls')),
    path('admin/', admin.site.urls),
]
