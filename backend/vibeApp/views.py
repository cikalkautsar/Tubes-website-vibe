from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import viewsets, status
from django.contrib.auth import authenticate
from rest_framework.authtoken.models import Token

from django.contrib.auth.models import User  # Import User bawaan Django
from .models import pengguna,post,likes,comment,achievements,user_achievements,stopwatch,group_streaks,user_group_streaks,status_streaks,user_streaks,streak_invitation,postingan_tags,follow
from .serializers import userSerializer, postSerializer, likesSerializer, commentSerializer, achievementsSerializer, user_achievementsSerializer,stopwatchSerializer,user_group_streaksSerializer,status_streaksSerializer,user_streaksSerializer,streak_invitationSerializer,postingan_tagsSerializer,followSerializer,group_streaksSerializer

#Create your views here.
class userViewSet(viewsets.ModelViewSet):
    queryset = pengguna.objects.all()
    serializer_class = userSerializer

class RegisterView(APIView):
    def post(self, request): #fungsi untuk menambah data
        print("POST request recieved")  
        username = request.data.get('username') 
        name = request.data.get('name')
        email = request.data.get('email')
        password = request.data.get('password')

        user = User.objects.create_user(username=username, email=email, password=password)
        #user : variabel sementara 
        member = pengguna.objects.create(user=user, email=email, name=name)

        return Response({'success': 'Pendaftaran sukses'}, status=status.HTTP_201_CREATED)


class LoginView(APIView):
    def post(self, request):
        username = request.data.get('username')
        password = request.data.get('password')
        print(f"username: {username}, password: {password}")
        user = authenticate(request, username=username, password=password)

        if user is not None:
            token, created = Token.objects.get_or_create(user=user)
            return Response({   'token': token.key,
                                'username': user.username}, status=status.HTTP_200_OK)
        return Response({'error': 'Invalid username atau password '}, status=status.HTTP_401_UNAUTHORIZED) 

class postViewSet(viewsets.ModelViewSet):
    queryset = post.objects.all()
    serializer_class = postSerializer

class likesViewSet(viewsets.ModelViewSet):
    queryset = likes.objects.all()
    serializer_class = likesSerializer

class commentViewSet(viewsets.ModelViewSet):
    queryset = comment.objects.all()
    serializer_class = commentSerializer

class achievementsViewSet(viewsets.ModelViewSet):
    queryset = achievements.objects.all()
    serializer_class = achievementsSerializer

class stopwatchViewSet(viewsets.ModelViewSet):
    queryset = stopwatch.objects.all()
    serializer_class = stopwatchSerializer

class user_achievementsViewSet(viewsets.ModelViewSet):
    queryset = user_achievements.objects.all()
    serializer_class = user_achievementsSerializer

class group_streaksViewSet(viewsets.ModelViewSet):
    queryset = group_streaks.objects.all()
    serializer_class = group_streaksSerializer

class user_group_streaksViewSet(viewsets.ModelViewSet):
    queryset = user_group_streaks.objects.all()
    serializer_class = user_group_streaksSerializer

class status_streaksViewSet(viewsets.ModelViewSet):
    queryset = status_streaks.objects.all()
    serializer_class = status_streaksSerializer

class user_streaksViewSet(viewsets.ModelViewSet):
    queryset = user_streaks.objects.all()
    serializer_class = user_streaksSerializer

class streak_invitationViewSet(viewsets.ModelViewSet):
    queryset = streak_invitation.objects.all()
    serializer_class = streak_invitationSerializer

class postingan_tagsViewSet(viewsets.ModelViewSet):
    queryset = postingan_tags.objects.all()
    serializer_class = postingan_tagsSerializer

class followViewSet(viewsets.ModelViewSet):
    queryset = follow.objects.all()
    serializer_class = followSerializer