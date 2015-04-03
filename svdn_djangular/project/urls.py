from django.conf.urls import patterns, include, url
from django.contrib import admin
from django.conf import settings

urlpatterns = patterns('',
    # Examples:
    # url(r'^$', 'svdn_djangular.views.home', name='home'),
    # url(r'^blog/', include('blog.urls')),

    # Media
    url(r'^media/(?P<path>.*)$', 'django.views.static.serve', {'document_root': settings.MEDIA_ROOT}),

    # Admin url
    url(r'^admin/', include(admin.site.urls)),

    # Our index view is a catch all, hence must come last
    url(r'^.*$', 'core.views.generic.index'),
)
