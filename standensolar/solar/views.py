# Create your views here.
from django.contrib import messages,auth
from django.contrib.auth.decorators import login_required, permission_required
from django.shortcuts import render,redirect
from django.http import HttpResponse, HttpResponseRedirect
from django.urls import reverse
from django.contrib.auth import authenticate, login, logout
from datetime import datetime,timedelta,date
from django.db import connection
from django.db.models import Q

#from sclub.appsclub.models import Param, Diario, etc

import json
import requests
#from misitio.ai.forms import cambios

def login_ini(request):
    variable1 = 'Pantalla de Acceso al Sistema'
    error_log = 'ok'
    if request.method == "POST":
        username = request.POST.get('username')
        password = request.POST.get('password') # valor del template
        user = auth.authenticate(username=username, password=password)
        if user is not None and user.is_active:
            auth.login(request,user)
            request.session['username_x'] = username # inicializa variable gobal
            request.session['id_x'] = user.id   # inicializa variable gobal
            return HttpResponseRedirect("principal")
        error_log = "error"

    context = {"variable1":variable1,
    			"error_log":error_log,}

    return render(request,'login_ini.html',context)

def log_out(request):
	logout(request)
	return redirect('login_ini')
	#return HttpResponse("Se ha abandonado la aplicación...")

def principal(request):
    variable1 = 'PAGINA PRINCIPAL'
    path_static_img = "/static/img/"
    #path_static_img = "/staticfiles/img/" # para pythonAnywhere
    logo2 = path_static_img+"logo_ss.jpg"
    context ={
        "variable1":variable1,
        "path_static_img":path_static_img,
        "logo_corp_chico":logo2,}

    if request.method == "POST":   # va a: CAMBIOS.HTML
        #return render(request,'cambios.html',context)
        return HttpResponse("Accion del post")
    return render(request,'principal.html',context)

