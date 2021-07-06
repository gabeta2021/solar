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

    fig1txt = '<b>Instalación colector termo solar con estanque a piso, circulación forzada. Presenta varias ventajas. El termo en general está a 50ºC lo que genera un buen Ahorro de energia.</b>'
    fig2txt = '<b>A este Termosolar se le incorporó una válvula motorizada de 3 vías que se activa para abrir el agua del Termosolar o bien el agua del calefon según la temperatura del estanque solar.</b>'
    fig3txt = '<b>Proceso de instalación de sistema solar térmico Heat Pipe presurizado.</b>'
    fig4txt = '<b>La instalación solar térmica de la foto anterior durante estos días... Esto muestra la temperatura del estanque de 300 litros, considerando que usualmente ocupamos agua "caliente" aproximadamente a 40 grados, esto es similar a tener casi 800 litros de agua disponibles.</b>'
    fig5txt = '<b> Sistema Solar térmico Indirecto forzado.</b>'
    fig6txt = '<b> Sistema solar Térmico forzado colector plano</b>'
    fig7txt = '<b>Cambio de cañerías de sistema Termosolar atmosférico</b>'
    fig8txt = '<b>Sistema solar térmico colectores planos y tuberías de cobre con válvula mezcladora hacia calefones solares.</b>'
    fig9txt = '<b>Sistema solar térmico con cañería de cobre soldado con estaño sin plomo.</b>'
    fig10txt = '<b>Standensolar</b>'
    fig11txt = '<b>Instalación Off Grid con inversor Victron e instalación On Grid con inversor SMA trifásico.</b>'
    fig12txt = '<b>Instalación Fotovoltaica con módulos marca Jinko (Considerada la mejor marca a nivel mundial). 400 Watts cada uno, 4.800 Wp instalados en total.</b>'
    fig13txt = '<b>Mantenimiento a Sistema Solar Térmico Termosifón. Es recomendable hacer mantenimiento cada 6 meses o 1 año a las instalaciones termosolares ya que se acumula mucho sarro que puede dañar los estanques y generar problemas.</b>'
    fig14txt = '<b>Con los inversores de corriente fotovoltaicos SMA puedes seguir en vivo desde tu celular la generación de energía solar.</b>'
    fig15txt = '<b>Inversor SMA considerada la mejor marca en el mundo de inversores On Grid, de procedencia alemana.</b>'
    fig16txt = '<b>Standensolar</b>'
    fig17txt = '<b>Gracias a la app Sun Surveyor uno puede ver la posición del sol en cualquier día y hora... se seleccionó el 21 de junio para ver a qué hora se iba ver el sol salir de las montañas y a que hora se iba a poner con respecto a la instalación termosolar en el día del solsticio de invierno, el día mas corto del año.</b>'
    fig18txt = '<b>Standensolar</b>'
    fig19txt = '<b>Este inversor que es de una marca x estaba mal configurado. Ahora está configurado para priorizar el consumo directo de la energía de los módulos fotovoltaicos, luego de las baterías y en último caso la red eléctrica. Se completa la instalación con canalización adecuada. (El cableado que se ve colgando no es de la instalación)</b>'
    fig20txt = '<b>Standensolar</b>'
    fig21txt = '<b>Arreglo y ampliación de sistema fotovoltaico off Grid previamente instalado.</b>'
    fig22txt = '<b>Instalación Fotovoltáica On Grid 3 kWp</b>'
    fig23txt = '<b>Instalaciones Fotovoltaicas On Grid y Off Grid.</b>'

    context = {
        "variable1":variable1,
        "path_static_img":path_static_img,
        "logo_corp_chico":logo2,
        "fig1txt":fig1txt,
        "fig2txt":fig2txt,
        "fig3txt":fig3txt,
        "fig4txt":fig4txt,
        "fig5txt":fig5txt,
        "fig6txt":fig6txt,
        "fig7txt":fig7txt,
        "fig8txt":fig8txt,
        "fig9txt":fig9txt,
        "fig10txt":fig10txt,
        "fig11txt":fig11txt,
        "fig12txt":fig12txt,
        "fig13txt":fig13txt,
        "fig14txt":fig14txt,
        "fig15txt":fig15txt,
        "fig16txt":fig16txt,
        "fig17txt":fig17txt,
        "fig18txt":fig18txt,
        "fig19txt":fig19txt,
        "fig20txt":fig20txt,
        "fig21txt":fig21txt,
        "fig22txt":fig22txt,
        "fig23txt":fig23txt,
        }

    if request.method == "POST":   # va a: CAMBIOS.HTML
        #return render(request,'cambios.html',context)
        return HttpResponse("Accion del post")
    return render(request,'principal.html',context)

def quienessomos(request):
    variable1 = 'Quienes Somos'
    path_static_img = "/static/img/"
    #path_static_img = "/staticfiles/img/" # para pythonAnywhere
    logo2 = path_static_img+"logo_ss.jpg"
    context = {
        "variable1":variable1,
        "path_static_img":path_static_img,
        "logo_corp_chico":logo2,}

    if request.method == "POST":   # va a: CAMBIOS.HTML
        #return render(request,'cambios.html',context)
        return HttpResponse("Accion del post")
    return render(request,'quienessomos.html',context)

def contacto(request):
    variable1 = 'Quienes Somos'
    path_static_img = "/static/img/"
    #path_static_img = "/staticfiles/img/" # para pythonAnywhere
    logo2 = path_static_img+"logo_ss.jpg"
    tema_interes = [
        'Seleciona una opción',
        'Sistema de Bombeo Solar',
        'Sistema Solar termico',
        'Sistema solar Fotovoltaico',
        'Instalación Off Grid con inversor Victron',
        'Inversor SMA (On Grid)',]

    context = {
        "variable1":variable1,
        "path_static_img":path_static_img,
        "logo_corp_chico":logo2,
        "tema_interes":tema_interes,}

    if request.method == "POST":   # va a: CAMBIOS.HTML
        #return render(request,'cambios.html',context)
        return HttpResponse("..Y aquí es donde se irá al WS, con toda la información de esta pantalla")
    return render(request,'contacto.html',context)
