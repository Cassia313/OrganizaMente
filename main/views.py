from django.shortcuts import render
from main.models import Usuario
from main.models import Dicas

# Create your views here.
def Create(request):
    return render(request, 'form.html')
def index(request):
    dicas = Dicas.objects.all()
    return render(request, 'menudenavegacao.html',{'dicas': dicas})

def master(request):
    return render(request, 'master.html')

def desenvolvedores(request):
    return render(request, 'desenvolvedores.html')

def ciclodosono(request):
    return render(request, 'ciclodosono.html')
