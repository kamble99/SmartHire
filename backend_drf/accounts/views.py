from django.shortcuts import render,HttpResponse
from .serializers import Userserializer
from rest_framework.views import APIView
from rest_framework import generics
from django.contrib.auth.models import User
from rest_framework.permissions import AllowAny


class RegisterView(generics.CreateAPIView):   #createAPIView is used to create a new object in user
    queryset=User.objects.all()  
    serializer_class=Userserializer
    permission_classes=[AllowAny]  #to allow any user to access this view without authentication


# Create your views here.
