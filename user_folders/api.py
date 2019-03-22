from rest_framework.viewsets import ModelViewSet
from rest_framework.generics import DestroyAPIView, UpdateAPIView

from .models import Folder, Program
from .serializers import FolderSerializer, ProgramSerializer
from rest_framework.authentication import SessionAuthentication
from django.contrib.auth.mixins import LoginRequiredMixin


class CsrfExemptMixin(SessionAuthentication):
    def enforce_csrf(self, request):
        return


class FolderViewSet(LoginRequiredMixin, ModelViewSet):
    serializer_class = FolderSerializer
    authentication_classes = (CsrfExemptMixin,)

    def get_queryset(self):
        return Folder.objects.filter(user=self.request.user)

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)


# @csrf_exempt
class ProgramViewSet(ModelViewSet):

    queryset = Program.objects.all()
    serializer_class = ProgramSerializer
    authentication_classes = (CsrfExemptMixin,)


class UpdateFolderViewSet(UpdateAPIView):
    authentication_classes = (CsrfExemptMixin, )
    model = Folder
    queryset = Folder.objects.all()
    serializer_class = FolderSerializer

    def perform_update(self, serializer):
        print(self.request.data['dataObj']['folder_title'])
        update = self.request.data['dataObj']['folder_title']
        serializer.save(folder_title=update)


class DeleteFolderViewSet(DestroyAPIView):
    authentication_classes = (CsrfExemptMixin, )
    model = Folder
    queryset = Folder.objects.all()
    serializer_class = FolderSerializer
