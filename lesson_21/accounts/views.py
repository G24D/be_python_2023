from django.shortcuts import render
from django.views.generic import CreateView
<<<<<<< HEAD

from .forms import CustomUserCreationForm

=======
from .forms import CustomUserCreationForm
>>>>>>> 025ba74cb4b1af6eeae1b3b4543f4bb4737c2050
# Create your views here.


class SignUpView(CreateView):
    form_class = CustomUserCreationForm
<<<<<<< HEAD
    success_url = revese_lazy('login')
    template_name = "registration/signup.html"

=======
    success_url = revers_lazy('login')
    template_name = "registration/signup.html"
>>>>>>> 025ba74cb4b1af6eeae1b3b4543f4bb4737c2050
