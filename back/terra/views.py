from rest_framework import viewsets
from rest_framework.response import Response
from django.utils import timezone
from terra.serializers import *
# Create your views here.


class EventViewSet(viewsets.ModelViewSet):
    queryset = Event.objects.filter(end_time__isnull=True)
    serializer_class = EventSerializer
    #
    # def list(self, request, *args, **kwargs):
    #     queryset = self.get_queryset()
    #     serializer = self.get_serializer(data=queryset.first())
    #     serializer.is_valid()
    #     return Response(serializer.data)

    def create(self, request, *args, **kwargs):
        self.end_event(request)
        request.data['club'] = request.user.club
        return super().create(self, request, *args, **kwargs)

    def get_queryset(self):
        queryset = super().get_queryset()
        if self.request.user.club is not None:
            queryset = queryset.filter(club=self.request.user.club)
        return queryset

    def end_event(self, request):
        queryset = self.get_queryset()
        if queryset.exist():
            event = queryset.first()
            event.end_time = timezone.now()
            event.save()


class MemberViewSet(viewsets.ModelViewSet):
    queryset = Member.objects.all()
    serializer_class = MemberSerializer

