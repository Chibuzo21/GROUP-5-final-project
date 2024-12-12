from django.shortcuts import render,redirect
from django.contrib.auth import authenticate
from django.contrib.auth.models import User,auth
from rest_framework import generics, status
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.authtoken.models import Token
from rest_framework.permissions import AllowAny,  IsAuthenticated
from rest_framework_simplejwt.tokens import RefreshToken
from django.contrib import messages
# from django.shortcuts import render, redirect
# from django.contrib.auth.models import User,auth 
# from django.contrib.auth import authenticate, login
# from django.http import JsonResponse
# from django.views.decorators.csrf import csrf_exempt
# import json
from django.http import JsonResponse
from rest_framework.decorators import api_view
import jwt




from .serializers import UserSerializer, LoginSerializer

class SignupView(generics.CreateAPIView):
    queryset = User.objects.all()
    permission_classes = [AllowAny]
    serializer_class = UserSerializer
    
    
    
    

class LoginView(APIView):
    permission_classes = [AllowAny]
    serializer_class = LoginSerializer
    queryset = User.objects.all()
    @api_view(['POST'])
    def login_view(request):
       username = request.data.get('username')
       password = request.data.get('password')

       user = authenticate(request, username=username, password=password)
       if user is not None:
        # Generate JWT token
           token = jwt.encode({'username': user.username}, 'your_secret_key', algorithm='HS256')
           return JsonResponse({'success': True, 'token': token})
       else:
           return JsonResponse({'success': False, 'message': 'Invalid credentials'}, status=401)

    

    def post(self, request, *args, **kwargs):
        serializer = LoginSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        user = authenticate(
            username=serializer.validated_data['username'],
            password=serializer.validated_data['password']
        )
        if user is not None:
            refresh = RefreshToken.for_user(user)
            return Response({
                'refresh': str(refresh),
                'access': str(refresh.access_token),
            })
        return Response({'error': 'Invalid Credentials'}, status=status.HTTP_400_BAD_REQUEST)
    

# @csrf_exempt
# def login_view(request):
#     if request.method == 'POST':
#         try:
#             data = json.loads(request.body)
#             username = data.get('username')
#             password = data.get('password')
            
#             user = authenticate(request, username=username, password=password)
#             if user is not None:
#                 login(request, user)
#                 return JsonResponse({"message": "Login successful", "username": user.username})
#             else:
#                 return JsonResponse({"error": "Invalid credentials"}, status=400)
#         except Exception as e:
#             return JsonResponse({"error": str(e)}, status=500)
#     return JsonResponse({"error": "Invalid request method"}, status=405)


