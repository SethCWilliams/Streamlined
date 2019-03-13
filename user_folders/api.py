from rest_framework.viewsets import ModelViewSet

from .models import Folder, Program
from .serializers import FolderSerializer, ProgramSerializer


class FolderViewSet(ModelViewSet):
    queryset = Folder.objects.all()
    serializer_class = FolderSerializer


class ProgramViewSet(ModelViewSet):
    queryset = Program.objects.all()
    serializer_class = ProgramSerializer
