#INTERNO

from django.urls import path
from django.conf.urls import include, url
from django.conf import settings
from django.contrib.auth.decorators import login_required
#from standensolar.solar.views import administrador
from .import views

urlpatterns = [
	path('',views.login_ini, name='login_ini'),
	path('log_out/',views.log_out, name="log_out"),
	path('principal/',views.principal,name="principal"),
	path('quienessomos/',views.quienessomos,name="quienessomos"),
]
