from django.db import models

from cloudinary.models import CloudinaryField
from django.contrib.auth.models import User

class Cliente(models.Model):
    usuario = models.OneToOneField(User,related_name='Cliente',on_delete=models.RESTRICT)
    dni = models.CharField(max_length=100)
    telefono = models.CharField(max_length=100)
    imagen = CloudinaryField('image',default='')
    

    def __str__(self):
        return self.dni

class Cochera(models.Model):
    name = models.CharField(max_length=100)
    price = models.DecimalField(max_digits=5,decimal_places=2)
    imagen1 = CloudinaryField('image',default='')
    imagen2 = CloudinaryField('image',default='')
    imagen3 = CloudinaryField('image',default='')
    space = models.IntegerField(default=1)
    country = models.CharField(max_length=100)
    department = models.CharField(max_length=100)
    district = models.CharField(max_length=100)
    adress = models.CharField(max_length=100)
    lat = models.CharField(max_length=200)
    long = models.CharField(max_length=200)
    cliente = models.ForeignKey(Cliente,on_delete=models.RESTRICT,default='Null')

    def __str__(self):
        return self.name


class Pedido(models.Model):
    fechaInicio = models.DateField()
    fechaFin = models.DateField()
    horaInicio = models.TimeField()
    horaFin = models.TimeField()
    total = models.DecimalField(max_digits=5, decimal_places=2)
    status = models.CharField(max_length=1)
    cochera = models.ForeignKey(Cochera,on_delete=models.RESTRICT)

    def __str__(self):
        return self.status

