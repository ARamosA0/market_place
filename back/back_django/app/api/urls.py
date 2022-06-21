from django.urls import path
from . import views

urlpatterns = [
    path('',views.IndexView.as_view()),
    path('cochera',views.CocheraView.as_view()),
    path('cochera/<str:district_name>',views.CocheraByDistrict.as_view()),
    path('pedido',views.Pedidos.as_view()),
    path('pedido/<int:pedido_id>',views.PedidosDetail.as_view()),
    path('usuario/<int:cliente_id>/',views.UsuarioByClienteId.as_view()),
    path('pedido/',views.Pedidos.as_view()),
    path('pedido/<int:pedido_id>',views.PedidosDetail.as_view()),
    path('cochera/',views.CocheraView.as_view()),
    path('cochera/distrito/<str:district_name>/',views.CocheraByDistrict.as_view()),
    path('cochera/<int:cochera_id>/',views.CocheraId.as_view()),
    path('client/<int:user_id>/cochera/',views.ClientCocheraId.as_view()),
    path('cochera/put/<int:cochera_id>/',views.CocheraViewChange.as_view()),
    path('usuario/',views.UsuarioView.as_view()),
    path('usuario/<int:cliente_id>/',views.UsuarioByClienteId.as_view()),
    path('cochera/cliente/<int:cliente_id>',views.CocheraGetIdCliente.as_view())
]