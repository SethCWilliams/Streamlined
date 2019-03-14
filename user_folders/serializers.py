from rest_framework import serializers

from .models import Folder, Program


class FolderSerializer(serializers.ModelSerializer):
    # icon = serializers.ImageField(read_only=True)
    # folder_title = serializers.CharField(read_only=True)
    class Meta:
        model = Folder
        fields = "__all__"



class ProgramSerializer(serializers.ModelSerializer):
    class Meta:
        model = Program
        fields = "__all__"
