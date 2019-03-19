from rest_framework import serializers

from .models import Folder, Program


class ProgramSerializer(serializers.ModelSerializer):
    class Meta:
        model = Program
        fields = "__all__"


class FolderSerializer(serializers.ModelSerializer):
    # icon = serializers.ImageField(read_only=True)
    # folder_title = serializers.CharField(read_only=True)
    programs = ProgramSerializer(many=True, required=False)

    class Meta:
        model = Folder
        fields = "__all__"





# class AddProgramSerializer(serializers.ModelSerializer):
#     programs = serializers.PrimaryKeyRelatedField(many=True, read_only=False, queryset=Program.objects.all(), source='')
