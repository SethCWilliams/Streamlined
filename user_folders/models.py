from django.db import models
from django.contrib.auth.models import User


class Folder(models.Model):
    user = models.ForeignKey(User, null=True, on_delete=models.SET_NULL)
    folder_title = models.CharField(max_length=255)
    icon = models.ImageField()
    programs = models.ManyToManyField('Program')


class Program(models.Model):
    title = models.CharField(max_length=255)
    poster = models.URLField()
    ref_id = models.IntegerField()
    rating = models.CharField(max_length=8)
    overview = models.TextField()
    netflix_url = models.URLField(blank=True)
    hulu_url = models.URLField(blank=True)
