
from pathlib import Path
import os


# Build paths inside the project like this: BASE_DIR / 'subdir'.
BASE_DIR = Path(__file__).resolve().parent.parent

# Hosting
#BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))

# Quick-start development settings - unsuitable for production
# See https://docs.djangoproject.com/en/3.1/howto/deployment/checklist/

# SECURITY WARNING: keep the secret key used in production secret!
SECRET_KEY = '=a1a!*w()4*z-#f1v$^--aq9=&yq@2@ib!9bb7d1&c9bkr$p=('

# SECURITY WARNING: don't run with debug turned on in production!

# local
DEBUG = True

# Hosting web
#DEBUG = False

# local
# NGROK se debe invocar en local como: ngrok http 8000
# y la URL de acceso al sistema: http://458f6b3730a5.ngrok.io/login_ini/
#ALLOWED_HOSTS = ['127.0.0.1','localhost','8559a3a20c4e.ngrok.io']
ALLOWED_HOSTS = ['127.0.0.1','localhost','aa09d7ae636a.ngrok.io']


# Hosting web
#ALLOWED_HOSTS = ['*']

# Application definition

INSTALLED_APPS = [
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',
    'standensolar',
 ]

MIDDLEWARE = [
    'django.middleware.security.SecurityMiddleware',
    'django.contrib.sessions.middleware.SessionMiddleware',
    'django.middleware.common.CommonMiddleware',
    'django.middleware.csrf.CsrfViewMiddleware',
    'django.contrib.auth.middleware.AuthenticationMiddleware',
    'django.contrib.messages.middleware.MessageMiddleware',
    'django.middleware.clickjacking.XFrameOptionsMiddleware',
    #'whitenoise.middleware.WhiteNoiseMiddleware',
]

# cambiar segun carpeta del proyecto 
ROOT_URLCONF = 'standensolar.urls'  

TEMPLATES = [
    {
        'BACKEND': 'django.template.backends.django.DjangoTemplates',
        'DIRS': ['standensolar/solar/templates'],
        'APP_DIRS': True,
        'OPTIONS': {
            'context_processors': [
                'django.template.context_processors.debug',
                'django.template.context_processors.request',
                'django.contrib.auth.context_processors.auth',
                'django.contrib.messages.context_processors.messages',
            ],
        },
    },
]


# solo local
WSGI_APPLICATION = 'standensolar.wsgi.application'

# Database
# https://docs.djangoproject.com/en/3.1/ref/settings/#databases

# para BD <mysql - postgresql_psycopg2>
#DATABASES = {
#    'default': {
#    'ENGINE': 'django.db.backends.mysql',
#    'NAME': 'db_sclub',
#    'USER':'root',
#    'PASSWORD': '',
#    'HOST': 'localhost', # Or una IP Address del host 
#    'PORT': '',
#    'OPTIONS': {
#        'init_command': "SET sql_mode='STRICT_TRANS_TABLES',innodb_strict_mode=1",
#        'charset': 'utf8mb4'},
#    }
#}


DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.sqlite3',
        'NAME': BASE_DIR / 'db.sqlite3',
    }
}


# Password validation
# https://docs.djangoproject.com/en/3.1/ref/settings/#auth-password-validators

AUTH_PASSWORD_VALIDATORS = [
    {
        'NAME': 'django.contrib.auth.password_validation.UserAttributeSimilarityValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.MinimumLengthValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.CommonPasswordValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.NumericPasswordValidator',
    },
]


# Internationalization
# https://docs.djangoproject.com/en/3.1/topics/i18n/

LANGUAGE_CODE = 'en-us'

#local
TIME_ZONE = 'UTC'

#para hosting
#TIME_ZONE = 'America/Santiago'


USE_I18N = True

USE_L10N = True

USE_TZ = True

# Static files (CSS, JavaScript, Images)
# https://docs.djangoproject.com/en/3.1/howto/static-files/

STATIC_URL = '/static/'

# hosting
#STATIC_URL = '/staticfiles/'  # es diferente a la que esta mas arriba (lee bien huevon) #############


#hosting
#STATICFILES_DIRS = (os.path.join(BASE_DIR, 'staticfiles'),)

# local
STATIC_ROOT = os.path.join(os.path.dirname(BASE_DIR),"static")
#STATICFILES_DIRS = (os.path.join(BASE_DIR, 'static'),)

# para hosting
#STATIC_ROOT = '/home/monipodio/misitio/staticfiles/'  # ruta principal donde está carpeta con archivos estaticos

#SWEETIFY_SWEETALERT_LIBRARY = 'sweetalert2'
