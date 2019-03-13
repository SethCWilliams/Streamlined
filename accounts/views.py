from django.shortcuts import render
from django.urls import reverse
from django.http import HttpResponseRedirect
from django.views.generic import TemplateView
from django.contrib.auth import get_user_model, login, authenticate


User = get_user_model()


class SignupView(TemplateView):
    template_name = 'registration/signup.html'

    def post(self, request, *args, **kwargs):
        # this is the part that signs the user up. the post function will store it in my database
        username = self.request.POST.get('username')
        password = self.request.POST.get('password')
        password2 = self.request.POST.get('password2')

        # This part does a redirect back to the signup page if the passwords don't match.
        if password != password2:
            return HttpResponseRedirect(reverse('users:signup'))

        # If the username already exists, send the user back
        user = User.objects.filter(username=username)
        if user.count() > 0:
            return HttpResponseRedirect(reverse('users:signup'))

        # save user database record using fancy hashing on password
        User.objects.create_user(username=username, password=password)

        # Authenticate the user checks provided password against the hash
        user = authenticate(username=username, password=password)

        # Login the user (does the session table/cookie stuff)
        login(self.request, user)

        return HttpResponseRedirect(reverse('streamlined:home'))
