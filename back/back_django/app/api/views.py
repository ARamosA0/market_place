
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

    def post(self,request, format=None):
        serCochera = CocheraSerializer(data=request.data)
        serCochera.is_valid(raise_exception=True)
        serCochera.save()
        return Response(serCochera.data)
    

class CocheraViewChange(APIView):
    def put(self,request,cochera_id, format=None):
        putCochera = Cochera.objects.get(pk=cochera_id)
        print(putCochera)
        serCochera = CocheraSerializer(putCochera, data=request.data)
        if serCochera.is_valid():
            serCochera.save()
            return Response(serCochera.data)



class CocheraByDistrict(APIView):
    def get(self,request, district_name):
        dataCochera = Cochera.objects.filter(district= district_name)
        serCochera = CocheraSerializer(dataCochera,many=True)
        context = {
            'status':True,
            'content':serCochera.data
        }
        return Response(context)



class CocheraId(APIView):
    def get(self,request,cochera_id):
        dataCochera = Cochera.objects.get(pk=cochera_id)
        serCochera = CocheraSerializer(dataCochera)
        context = {
            'status':True,
            'content':serCochera.data,
            'message':'data'
        }
        print(context)
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

