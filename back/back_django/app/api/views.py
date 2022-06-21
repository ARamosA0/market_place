
from msilib.schema import Error
from multiprocessing import context
from requests import delete

import cloudinary.uploader

from rest_framework.views import APIView
from rest_framework.response import Response
from django.contrib.auth.models import User


from .models import (
    Cochera, Pedido,
    Cliente
)

from .serializers import (
    ClienteSerializer,
    UsuarioSerializer,
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
        print(request.data)
        serCochera = CocheraSerializer(putCochera, data=request.data)
        if serCochera.is_valid():
            serCochera.save()
            return Response(serCochera.data)

class CocheraImage(APIView):
    def post(self,request,cochera_id):
        imagen1 = request.data.get("imagen1")
        imagen2 = request.data.get("imagen2")
        imagen3 = request.data.get("imagen3")

        imagesList = [imagen1, imagen2, imagen3]
        try:
            responseListData = []
            for index, image in enumerate(imagesList):
                print(index)
                print(image)
                cloudinaryResponse = cloudinary.uploader.upload(image)
                responseListData.append(cloudinaryResponse)
            dictionariData = {
                'imagen1': '{}.{}'.format(responseListData[0]['public_id'], responseListData[0]['format']),
                'imagen2': '{}.{}'.format(responseListData[1]['public_id'], responseListData[1]['format']),
                'imagen3': '{}.{}'.format(responseListData[2]['public_id'], responseListData[2]['format'])
            }
            putCochera = Cochera.objects.get(pk=cochera_id)
            serCochera = CocheraSerializer(putCochera, data=dictionariData)
            if serCochera.is_valid():
                serCochera.save()
                return Response({
                    'status':True,
                    'content': serCochera.data,
                    'message': 'Imagenes guardadas correctamente'
                })
        except Exception as Error:
            print(Error)
            return Response({
                'status': False,
                'content': None,
                'message': 'Internal server error'
            })


class CocheraGetIdCliente(APIView):
    def get(self,request, cliente_id):
        dataCochera = Cochera.objects.filter(cliente=cliente_id).latest("id")
        serCochera = CocheraSerializer(dataCochera)
        context = {
            'status':True,
            'content':serCochera.data
        }
        return Response(context)

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
        return Response(context)
    
    #elminar cochera por id
    def delete(self,request,cochera_id):
        dataCochera = Cochera.objects.get(pk=cochera_id)
        serCochera = CocheraSerializer(dataCochera)
        dataCochera.delete()
        return Response(serCochera.data)

#?obtener las cocheras del cliente
class ClientCocheraId(APIView):
    def get(self,request,user_id):
        dataCochera = Cochera.objects.filter(cliente=user_id)
        
        serCochera = CocheraSerializer(dataCochera,many=True)
        context = {
            'status':True,
            'message':'cocheras publicadas del cliente',
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


class UsuarioView(APIView):
    def get(self,request):
        dataUsuario = User.objects.all()
        serUsuario = UsuarioSerializer(dataUsuario, many=True)
        context = {
            'status':True,
            'content':serUsuario.data,
            'message':'data'
        }
        return Response(context)

class UsuarioByClienteId(APIView):
    def get(self,request,cliente_id):
        dataCliente = User.objects.get(Cliente=cliente_id)
        serCliente = UsuarioSerializer(dataCliente)
        context = {
            'status':True,
            'content':serCliente.data,
            'message':'data'
        }
        print(context)
        return Response(context)