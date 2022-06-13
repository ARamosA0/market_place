from dataclasses import field, fields
from rest_framework import serializers

from django.contrib.auth.models import User

from .models import(
    Cochera, Pedido, 
    Pago, Propiedad, 
    Reserva, Cliente
)

class CocheraSerializer(serializers.ModelSerializer):
    class Meta:
        model = Cochera
        fields = '__all__'
        
        def to_representation(self, instance):
            representation = super().to_representation(instance)
            representation['imagen'] = instance.imagen.url
            return representation

class ClienteSerializer(serializers.ModelSerializer):
    class Meta:
        model = Cliente
        fields = ['lastname','dni','telefono','imagen','propiedad','reserva']
        
        def to_representation(self, instance):
            representation = super().to_representation(instance)
            representation['imagen'] = instance.imagen.url
            return representation