from django.db import models

from cloudinary.models import CloudinaryField
from django.contrib.auth.models import User



class Cliente(models.Model):
    usuario = models.OneToOneField(User,related_name='Cliente',on_delete=models.RESTRICT)
    dni = models.CharField(max_length=100)
    telefono = models.CharField(max_length=100)
    imagen = CloudinaryField('image',default='https://res.cloudinary.com/dyg8vlnnz/image/upload/v1655522501/user_icon_149851_lxy1jt.png')

    def __str__(self):
        return self.dni

class Cochera(models.Model):
    name = models.CharField(max_length=100)
    description = models.TextField(max_length=10000, default='descripcion', null=True, blank=True)
    price = models.DecimalField(max_digits=5,decimal_places=2, null=True, blank=True)
    imagen1 = CloudinaryField('image',default='', null=True, blank=True)
    imagen2 = CloudinaryField('image',default='', null=True, blank=True)
    imagen3 = CloudinaryField('image',default='', null=True, blank=True)
    space = models.IntegerField(default=1, null=True, blank=True)
    country = models.CharField(max_length=100, null=True, blank=True)
    department = models.CharField(max_length=100, null=True, blank=True)
    district = models.CharField(max_length=100, null=True, blank=True)
    adress = models.CharField(max_length=100, null=True, blank=True)
    lat = models.CharField(max_length=200, null=True, blank=True)
    long = models.CharField(max_length=200, null=True, blank=True)
    cliente = models.ForeignKey(Cliente,on_delete=models.RESTRICT,default='Null', blank=True)

    def __str__(self):
        return self.name


class Pedido(models.Model):
    fechaInicio = models.DateField()
    fechaFin = models.DateField()
    horaInicio = models.TimeField( null= True)
    horaFin = models.TimeField( null= True)
    total = models.DecimalField(max_digits=5, decimal_places=2)
    status = models.CharField(max_length=1)
    cochera = models.ForeignKey(Cochera,on_delete=models.RESTRICT)
    cliente = models.ForeignKey(Cliente, on_delete=models.RESTRICT)

    def __str__(self):
        return self.status






