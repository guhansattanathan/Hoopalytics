from django.shortcuts import render
from django.contrib.auth.hashers import make_password, check_password
from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView
from .models import User, Token
from .serializers import UserSerializer, TokenSerializer
from django.conf import settings
from datetime import datetime, timedelta
import hashlib
import uuid
from django.utils import timezone
from dotenv import load_dotenv
import os

load_dotenv()

SALT = os.environ.get("SALT")
# Create your views here.

URL = "http://localhost:3000"

class RegistrationView(APIView):

    def post(self, request, format=None):

        request.data["password"] = make_password(password=request.data["password"], salt=SALT)
        serializer = UserSerializer(data=request.data)

        if serializer.is_valid():
            serializer.save()

            return Response(
                {
                    "success": True,
                    "message": "You are successfully registered into hoopalytics"
                },
                status = status.HTTP_200_OK
            )
        
        else:

            error_msg = ""

            for key in serializer.errors:
                error_msg += serializer.errors[key][0]

            return Response(
                {"success": False, "message": error_msg},
                status=status.HTTP_200_OK,
            )
        

class LoginView(APIView):

    def post(self, request, format=None):

        email = request.data["email"]
        password = request.data["password"]
        hashed_passowrd = make_password(password=password, salt=SALT)
        user = User.objects.get(email=email)

        if user is None or not check_password(password, user.password):

            return Response(
                {
                    "success": False,
                    "message": "Invalid Login Credentials!"
                },
                status=status.HTTP_200_OK
            )
        
        else:

            return Response(
                {
                    "success": True,
                    "message": "You have successfully logged into Hoopalytics!"
                },
                status=status.HTTP_200_OK
            )