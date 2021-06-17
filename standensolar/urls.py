#
# EXTERNO
from django.conf import settings
from django.conf.urls import url
from django.conf.urls.static import static
from django.contrib import admin
from django.urls import path,include

urlpatterns = [
    path('login_ini/',include('standensolar.solar.urls')),
    path('admin/', admin.site.urls),
	path('principal/',include('standensolar.solar.urls')),	
]
