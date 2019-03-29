from django.shortcuts import render
import os
import requests
from user_folders.models import Folder, Program
from django.views.generic import TemplateView, FormView
from django.http import HttpResponseRedirect
from django.urls import reverse
from .forms import SearchForm
from django.core.paginator import Paginator
# from justwatch import JustWatch
GUIDEBOX_API_KEY = os.environ['GUIDEBOX_API_KEY']

class BrowseView(FormView):
    template_name = 'user_folders/browse.html'
    form_class = SearchForm
    # Trying to get my add to folder from browse function to work

    def get_movie_data(self):
        ref_id = self.kwargs.get('movie.id')
        print(ref_id)

        #     program = Program.objects.get(ref_id=ref_id)
        #
        # except Program.DoesNotExist:
            # ref_id = self.kwargs.get('ref_id')
        response = requests.get(
            'http://api-public.guidebox.com/v2/movies/{}?api_key={}'.format(
                ref_id, GUIDEBOX_API_KEY))
        program = response.json()
        print('code', response.status_code)
        return program

    def get_context_data(self, **kwargs):
        query = self.request.POST.get('query')
        print('query', query)
        # if q exists, it will return the value of q, if it doesn't exit, it returns None'
        content_type = self.request.GET.get('q', default='movies')
        # similar setup will be needed for search to work
        # & field = title & type = movie & query = terminator
        response = requests.get(
            'http://api-public.guidebox.com/v2/{}?api_key={}&field=title&type=movie&query={}&sources=amazon_prime,hulu_plus,netflix&limit=250'.format(content_type, GUIDEBOX_API_KEY, query))
        movielist = response.json()
        # print(movielist)
        # starting to play with paginator, but will come back after i get other more important stuff done
        # paginator = Paginator(movielist['results'], 50)
        # print('hello', paginator)
        # page = requests.GET.get('page')
        # movies = paginator.get_page(page)
        # print(movies)
        # print(movies)
        # this part is for me trying to move the ref_id to the url bar
        # results = movies['results']
        # print(results)
        # for result in results:
        #     ids.append(result['id'])
        #     print(result['id'])
        #     print(ids)

        ctx = {
            'content_type': content_type,
            'movies': movielist.get('results'),
            'folders': Folder.objects.filter(user=self.request.user),
            # 'ref_id': movies.results['id']
        }

        return ctx


class DetailView(TemplateView):
    template_name = 'user_folders/detail.html'

    def get_movie_data(self):
        ref_id = self.kwargs.get('ref_id')
        content_type = self.kwargs.get('content_type')
        print(content_type)

        #     program = Program.objects.get(ref_id=ref_id)
        #
        # except Program.DoesNotExist:
            # ref_id = self.kwargs.get('ref_id')
        response = requests.get(
            'http://api-public.guidebox.com/v2/movies/{}?api_key={}'.format(
                ref_id, GUIDEBOX_API_KEY))
        program = response.json()
        print('code', response.status_code)
        return program

    # def get_user_info(request):
    #     folders = Folder.objects.filter(user=request.user)
    #     print('content', folders)

    def get_context_data(self, **kwargs):
        # this part is for the browse by genre if i get other stuff working
        # just_watch = JustWatch(country='US')
        # results_by_multiple = just_watch.search_for_item(
        #     providers=['hlu'],
        #     content_types=['movie'],
        #     genres=['hrr'],
        # )
        # print(results_by_multiple)
        # for key in results_by_multiple:
        #     if key == 'items':
        #         # print(results_by_multiple[key])
        #         for piece in key:
        #             print(piece)

        movie = self.get_movie_data()
        ctx = {
            'web_source': movie['subscription_web_sources'],
            'title': movie['title'],
            'release_year': movie['release_year'],
            'ref_id': movie['id'],
            'overview': movie['overview'],
            'poster': movie['poster_240x342'],
            'rating': movie['rating'],
            'folders': Folder.objects.filter(user=self.request.user)

        }

        return ctx

    def post(self, request, *args, **kwargs):
        ref_id = self.kwargs.get('ref_id')



        # this could be a get_or_create if I didn't need code to look
        # clean due to so many program req. to save
        try:
            program = Program.objects.get(ref_id=ref_id)
        except Program.DoesNotExist:
            movie = self.get_movie_data()

            netflix_url = ''
            hulu_url = ''
            for movie_source in movie['subscription_web_sources']:
                if movie_source['source'] == 'netflix':
                    netflix_url = movie_source['link']
                elif movie_source['source'] == 'hulu':
                    hulu_url = movie_source['link']

            program = Program()
            program.title = movie['title']
            program.ref_id = ref_id
            program.overview = movie['overview']
            program.poster = movie['poster_240x342']
            program.rating = movie['rating']
            program.netflix_url = netflix_url
            program.hulu_url = hulu_url
            program.save()

        folder_ids = self.request.POST.getlist('folder')
        folders = Folder.objects.filter(id__in=folder_ids)
        for folder in folders:
            folder.programs.add(program)
        #     print('what is here', folder)
        return HttpResponseRedirect(reverse('programs:browse'))
