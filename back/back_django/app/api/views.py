from rest_framework.views import APIView
from rest_framework.response import Response

from .models import (
    Cochera, Pedido, 
    Pago, Propiedad, 
    Reserva, Cliente
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