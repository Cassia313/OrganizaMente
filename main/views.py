from django.shortcuts import render
from main.models import Usuario

# Create your views here.
def Create(request):
    return render(request, 'form.html')
def index(request):
    lista = Usuario.objectes.all()
    return render(request, 'menudenavegacao.html', {"lista": lista})

def master(request):
    return render(request, 'master.html')

def desenvolvedores(request):
    return render(request, 'desenvolvedores.html')

def ciclodosono(request):
    return render(request, 'ciclodosono.html')
