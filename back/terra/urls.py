from django.urls import include, path
from rest_framework import routers
from terra.views import EventViewSet, MemberViewSet

router = routers.DefaultRouter(trailing_slash=False)
router.register(r'member', MemberViewSet)
router.register(r'event', EventViewSet)

urlpatterns = [
    path('', include(router.urls)),
]
