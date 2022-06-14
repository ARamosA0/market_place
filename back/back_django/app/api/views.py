from multiprocessing import context
from requests import delete
from rest_framework.views import APIView
from rest_framework.response import Response
from django.contrib.auth.models import User


from .models import (
    Cochera, Pedido,
    Cliente
)

from .serializers import (
    CocheraSerializer,
    pedidoSerializer
)




class IndexView(APIView):
    def get(self,request):
        context = {
            'status':True,
            'content':'api django activa'
        }
        return Response(context)

class CocheraView(APIView):
    def get(self,request):
        dataCochera = Cochera.objects.all()
        serCochera = CocheraSerializer(dataCochera,many=True)
        context = {
            'status':True,
            'content':serCochera.data
        }
        return Response(context)

class CocheraByDistrict(APIView):
    def get(self,request, district_name):
        dataCochera = Cochera.filter(district= district_name)
        serCochera = CocheraSerializer(dataCochera,many=True)
        context = {
            'status':True,
            'content':serCochera.data
        }
        return Response(context)


# pedido Julio Araujo


class Pedidos(APIView):

    def get(self,request):
        dataPedido = Pedido.objects.all()
        serPedido = pedidoSerializer(dataPedido,many=True)
        return Response(serPedido.data)

    def post(self,request):
        serPedido = pedidoSerializer(data=request.data)
        serPedido.is_valid(raise_exception=True)
        serPedido.save()
        return Response (serPedido.data)




class PedidosDetail(APIView):
    def get(self,request,pedido_id):
        dataPedido = Pedido.objects.get(pk=pedido_id)
        serPedido = pedidoSerializer(dataPedido)
        return Response(serPedido.data)
    
    def put(self,request,pedido_id):
        dataPedido = Pedido.objects.get(pk=pedido_id)
        serPedido = pedidoSerializer(dataPedido, data=request.data)
        serPedido.is_valid(raise_exception=True)
        serPedido.save()
        return Response(serPedido.data)

    def delete(self,request,pedido_id):
        dataPedido = Pedido.objects.get(pk=pedido_id)
        serPedido = pedidoSerializer(dataPedido)
        dataPedido.delete()
        return Response(serPedido.data)
    
        
