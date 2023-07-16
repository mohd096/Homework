from django.shortcuts import render
from rest_framework.generics import ListCreateAPIView, RetrieveUpdateDestroyAPIView
from .models import Cat
from .serializers import CatSerializer
# Add the following import

# Define the home view


class CatList(ListCreateAPIView):
    queryset = Cat.objects.all()
    serializer_class = CatSerializer

class CatDetail(RetrieveUpdateDestroyAPIView):
    queryset = Cat.objects.all()
    serializer_class = CatSerializer