from django.db import models

# Create your models here.

class CatBreed(models.Model):
    name = models.CharField(max_length=100)
    origin = models.CharField(max_length=100)

    class Meta:
        verbose_name = ("CatBreed")
        verbose_name_plural = ("CatBreeds")

    def __str__(self):
        return self.name
    
class catToy(models.Model):
    name = models.CharField(max_length=100)
    color = models.CharField(max_length=100)
    price = models.IntegerField()
    image = models.CharField(max_length=250)

    def __str__(self):
        return f'{self.name} Is a {self.color} Cat Toy'
    
class Cat(models.Model):
    name = models.CharField(max_length=100)
    breed = models.ForeignKey(CatBreed, related_name='CatBreed', on_delete=models.CASCADE)
    description = models.TextField(max_length=250)
    age = models.IntegerField()
    image = models.CharField(max_length=250)
    toys = models.ManyToManyField(catToy, related_name='catToys', blank=True)
    

    def __str__(self):
        return f'{self.name} Is a {self.breed} Cat'