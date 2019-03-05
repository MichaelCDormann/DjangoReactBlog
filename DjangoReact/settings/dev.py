from .base import *


DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.postgresql_psycopg2',
        'NAME': 'djangoreact',
        'USER': 'djangoreact',
        'PASSWORD': '',
        'HOST': 'localhost',
        'PORT': '5432',
    }
}
