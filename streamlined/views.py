from django.shortcuts import render
import requests
from django.views.generic import TemplateView
from user_folders.models import Folder


class HomeView(TemplateView):
    template_name = 'home.html'


def browse(request):
    response = requests.get('http://api-public.guidebox.com/v2/movies?api_key=0a40830bfa01ed3fca505f5e01ab1a5d54e281da&sources=netflix&limit=250')
    movies = response.json()

    folders = Folder.objects.filter(user=request.user)

    return render(request, 'browse.html', {
        'movies': movies['results'],
        'folders': folders
    })
