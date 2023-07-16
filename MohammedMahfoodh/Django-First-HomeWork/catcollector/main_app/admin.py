from django.contrib import admin
from .models import Cat, CatBreed, catToy
# Register your models here.

admin.site.register(Cat)
admin.site.register(CatBreed)
admin.site.register(catToy)