from dataclasses import fields
from rest_framework import serializers

from django.contrib.auth.models import User

from .models import(
    Cochera, Pedido, Cliente,User
)

class CocheraSerializer(serializers.ModelSerializer):
    class Meta:
        model = Cochera
        fields = '__all__'
        
    def to_representation(self, instance):
        representation = super().to_representation(instance)
        representation['imagen1'] = instance.imagen1.url
        representation['imagen2'] = instance.imagen2.url
        representation['imagen3'] = instance.imagen3.url
        return representation

class pedidoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Pedido
        fields = '__all__'



class ClienteSerializer(serializers.ModelSerializer):
    class Meta:
        model = Cliente
        fields =['id','dni','telefono','imagen']
        
    def to_representation(self, instance):
        representation = super().to_representation(instance)
        representation['imagen'] = instance.imagen.url
        return representation

class UsuarioSerializer(serializers.ModelSerializer):
    Cliente = ClienteSerializer(read_only=True)
    class Meta:
        model = User
        fields = ['id','first_name','last_name','email','username','Cliente']

