import os
import sys
import site

# The home directory of the user
USERHOME_DIR = '/home/django'

# Django directory, where manage.py resides
DPROJECT_DIR = os.path.join(USERHOME_DIR, 'project/svdn_djangular')

# Site-packages under virtualenv directory
SITEPACK_DIR = os.path.join(USERHOME_DIR, 'env/lib/python2.7/site-packages')
site.addsitedir(SITEPACK_DIR)

sys.path.append(DPROJECT_DIR)
os.environ['DJANGO_SETTINGS_MODULE'] = 'project.settings_live'
os.environ["CELERY_LOADER"] = "django"

from django.core.wsgi import get_wsgi_application
application = get_wsgi_application()