from django.test import TestCase
from django.urls import reverse


class TestViews(TestCase):

    def test_index(self):
        view_url = reverse('users:signup')
        response = self.client.get(view_url)
        self.assertEqual(response.status_code, 200)

    def test_list(self):
        view_url = reverse('users:login')
        response = self.client.get(view_url)
        self.assertEqual(response.status_code, 200)

