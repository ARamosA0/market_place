from urllib import response
from rest_framework.views import APIView
from rest_framework.response import Response

from .models import (
    Cochera, Pedido,
    Cliente
)

from .serializers import (
    CocheraSerializer
)


from django.contrib.auth.models import User

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

