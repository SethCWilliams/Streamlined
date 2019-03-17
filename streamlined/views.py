from django.shortcuts import render
import requests
from django.views.generic import TemplateView
from user_folders.models import Folder
from rest_framework.viewsets import ModelViewSet


ids = []

class IndexView(TemplateView):
    template_name = 'index.html'


def browse(request):
    response = requests.get('http://api-public.guidebox.com/v2/movies?api_key=0a40830bfa01ed3fca505f5e01ab1a5d54e281da&sources=netflix&limit=250&offset=600')
    movies = response.json()
    # for results in movies:
    #     if movies[results] == 'results':
    #         print('got me')
    results = movies['results']
    # print(results)
    for result in results:
        ids.append(result['id'])
        print(result['id'])
        print(ids)

    folders = Folder.objects.filter(user=request.user)
    # example of string formatting
    # name = "John"
    # age = 23
    # print("%s is %d years old." % (name, age))

    return render(request, 'browse.html', {
        'movies': movies['results'],
        'folders': folders,
    })


class DetailView(TemplateView):
    template_name = 'detail.html'
    print(ids)

    def get_context_data(self, **kwargs):
        response = requests.get(
            'http://api-public.guidebox.com/v2/movies/157596?api_key=0a40830bfa01ed3fca505f5e01ab1a5d54e281da')
        movie = response.json()
        print('code', response.status_code)
        print(movie)
        ctx = {
            'title': movie['title'],
            'release_year': movie['release_year'],
            'id': movie['id'],
            'overview': movie['overview'],
            'poster': movie['poster_240x342'],
            'genres': movie['genres']

        }

        return ctx

    # def movie(self, request):
    #     response = requests.get('http://api-public.guidebox.com/v2/movies/158560?api_key=0a40830bfa01ed3fca505f5e01ab1a5d54e281da')
    #     movie = response.json()
    #     print(movie)
    #     return render(request, 'detail.html', {
    #         'movie': movie,
    #
    #     })
    # print(movie)
