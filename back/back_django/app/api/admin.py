from django.contrib import admin

# Register your models here.
from .models import Cochera, Pedido,Cliente

# admin.site.register(Cochera)
admin.site.register(Pedido)
admin.site.register(Cliente)


@admin.register(Cochera)
class CocheraAdmin(admin.ModelAdmin):
    list_display = ['name','price','space','country','department','district','adress','lat','long']
    list_editable = ['price','space','country','department','district','adress','lat','long']


