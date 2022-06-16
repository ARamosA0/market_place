from django.urls import path
from . import views

urlpatterns = [
    path('',views.IndexView.as_view()),
    path('cochera/',views.CocheraView.as_view()),
    path('cochera/distrito/<str:district_name>/',views.CocheraByDistrict.as_view()),
    path('cochera/<int:cochera_id>/',views.CocheraId.as_view()),
    path('cochera/put/<int:cochera_id>/',views.CocheraViewChange.as_view()),
    path('usuario/',views.UsuarioView.as_view()),
    path('usuario/<int:cliente_id>/',views.UsuarioByClienteId.as_view())
]