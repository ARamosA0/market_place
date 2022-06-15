from rest_framework import serializers

from django.contrib.auth.models import User

from .models import(
    Cochera, Pedido, Cliente
)

class CocheraSerializer(serializers.ModelSerializer):
    class Meta:
        model = Cochera
        fields = '__all__'
        
    def to_representation(self, instance):
        representation = super().to_representation(instance)
        print('----------------------------------',representation)
        representation['imagen1'] = instance.imagen1.url
        representation['imagen2'] = instance.imagen2.url
        representation['imagen3'] = instance.imagen3.url
        return representation

class pedidoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Pedido
        fields = '__all__'


# class ClienteSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = Cliente
#         fields = ['lastname','dni','telefono','imagen','propiedad','reserva']
        
#         def to_representation(self, instance):
#             representation = super().to_representation(instance)
#             representation['imagen'] = instance.imagen.url
#             return representation