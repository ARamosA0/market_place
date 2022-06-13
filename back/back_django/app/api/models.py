from pyexpat import model
from django.db import models

from cloudinary.models import CloudinaryField
from django.contrib.auth.models import User

class Cochera(models.Model):
    name = models.CharField(max_length=100)
    price = models.DecimalField(max_digits=5,decimal_places=2)
    imagen = CloudinaryField('image',default='')
    space = models.IntegerField(default=1)
    country = models.CharField(max_length=100)
    department = models.CharField(max_length=100)
    district = models.CharField(max_length=100)
    adress = models.CharField(max_length=100)
    lat = models.CharField(max_length=200)
    long = models.CharField(max_length=200)

    def __str__(self):
        return self.name


class Pedido(models.Model):
    fechaInicio = models.DateField()
    fechaFin = models.DateField()
    horaInicio = models.TimeField()
    horaFin = models.TimeField()
    total = models.DecimalField(max_digits=5, decimal_places=2)
    status = models.CharField(max_length=1)

    def __str__(self):
        return self.status


class Pago(models.Model):
    fecha = models.DateField()
    costo = models.DecimalField(max_digits=5,decimal_places=2)

    def __str__(self):
        return self.costo

class Propiedad(models.Model):
    cantidad = models.IntegerField(default=1)
    cochera = models.ForeignKey(Cochera,on_delete=models.RESTRICT)

    def __str__(self):
        return self.cantidad

class Reserva(models.Model):
    cantidad = models.IntegerField(default=1)
    pedido = models.ForeignKey(Pedido,on_delete=models.RESTRICT)

    def __str__(self):
        return self.cantidad

class Cliente(models.Model):
    usuario = models.OneToOneField(User,related_name='Cliente',on_delete=models.RESTRICT)
    dni = models.CharField(max_length=100)
    telefono = models.CharField(max_length=100)
    imagen = CloudinaryField('image',default='')
    propiedad = models.ForeignKey(Propiedad,on_delete=models.RESTRICT)
    reserva = models.ForeignKey(Reserva,on_delete=models.RESTRICT)

    def __str__(self):
        return self.dni