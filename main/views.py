from django.shortcuts import render

# Create your views here.
def index(request):
    return render(request, 'menudenavegacao.html')

def master(request):
    return render(request, 'master.html')

def desenvolvedores(request):
    return render(request, 'desenvolvedores.html')

def ciclodosono(request):
    return render(request, 'ciclodosono.html')
