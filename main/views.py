from django.shortcuts import render

from main.models import Dicas

# Create your views here.
def Create(request):
    return render(request, 'form.html')
def index(request):
    dicas = Dicas.objects.values("id","dicaTitulo")
    return render(request, 'dicas.html',{'dicas': dicas})

def dica(request,id):
    dica = Dicas.objects.get(id=id)
    return render(request, 'dica.html',{"dica": dica})

def desenvolvedores(request):
    return render(request, 'desenvolvedores.html')

def ciclodosono(request):
    return render(request, 'ciclodosono.html')

def tasklist(request):
    return render(request, 'tasklist.html')


def imc(request):
    return render(request, 'imc.html')