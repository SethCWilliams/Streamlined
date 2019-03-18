from django.shortcuts import render
import requests
from user_folders.models import Folder, Program
from django.views.generic import TemplateView


def browse(request):
    response = requests.get(
        'http://api-public.guidebox.com/v2/movies?api_key=0a40830bfa01ed3fca505f5e01ab1a5d54e281da&sources=netflix&limit=250&offset=600')
    movies = response.json()
    # this part is for me trying to move the ref_id to the url bar
    # results = movies['results']
    # print(results)
    # for result in results:
    #     ids.append(result['id'])
    #     print(result['id'])
    #     print(ids)

    folders = Folder.objects.filter(user=request.user)
    # example of string formatting
    # name = "John"
    # age = 23
    # print("%s is %d years old." % (name, age))

    return render(request, 'user_folders/browse.html', {
        'movies': movies['results'],
        'folders': folders,
        # 'ref_id': movies.results['id']
    })


class DetailView(TemplateView):
    template_name = 'user_folders/detail.html'

    # def get_user_info(request):
    #     folders = Folder.objects.filter(user=request.user)
    #     print('content', folders)

    def get_context_data(self, **kwargs):
        ref_id = self.kwargs.get('ref_id')
        # programs = Program.objects.filter(['ref_id'] == ref_id)
        # ref_id has been put into string formatting so it needs to be set equal to the
        # id of the movie you want to get.
        # print(programs)
        # for program in programs:
        #     print('test', program)
            # if program.ref_id == '158269':
            #     ref_id = program.ref_id
        # for program in programs{
        # }

            # self.kwargs.get('ref_id')
        # print('ref_id', ref_id)
        response = requests.get(
            'http://api-public.guidebox.com/v2/movies/{}?api_key=0a40830bfa01ed3fca505f5e01ab1a5d54e281da'.format(ref_id))
        movie = response.json()
        print('code', response.status_code)
        # print(movie)
        ctx = {
            'title': movie['title'],
            'release_year': movie['release_year'],
            'ref_id': movie['id'],
            'overview': movie['overview'],
            'poster': movie['poster_240x342'],
            'genres': movie['genres'],
            'folders': Folder.objects.filter(user=self.request.user)

        }

        return ctx

