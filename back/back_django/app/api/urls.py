from django.urls import path
from . import views

urlpatterns = [
    path('',views.IndexView.as_view()),
    path('cochera',views.CocheraView.as_view()),
]