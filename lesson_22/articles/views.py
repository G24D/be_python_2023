from django.shortcuts import render
from .models import Article
from django.urls import reverse_lazy
from django.views.generic import ListView, DetailView
from django.views.generic.edit import UpdateView, DeleteView
# Create your views here.


class ArticleListView(ListView):
    model = Article
    template_name = "article_list.html"

class ArticleDetailView(DetailView):
    model = Article
    template_name = "article_detail.html"

class ArticleUpdateView(UpdateView):
    model = Article
    fiels = ( "title", "body", )
    template_name = "article_edit.html"

class ArticleDeleteView(DeleteView):
    model = Article
    template_name = "article_delete.html"
    success_url = reverse_lazy("article_list")