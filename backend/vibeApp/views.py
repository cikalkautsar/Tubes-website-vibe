from django.shortcuts import render
from rest_framework import viewsets
from .models import user,post,likes,comment,achievements,user_achievements,stopwatch,group_streaks,user_group_streaks,status_streaks,user_streaks,streak_invitation,postingan_tags,follow
from .serializers import userSerializer, postSerializer, likesSerializer, commentSerializer, achievementsSerializer, user_achievementsSerializer,stopwatchSerializer,user_group_streaksSerializer,status_streaksSerializer,user_streaksSerializer,streak_invitationSerializer,postingan_tagsSerializer,followSerializer,group_streaksSerializer

#Create your views here.
class userViewSet(viewsets.ModelViewSet):
    queryset = user.objects.all()
    serializer_class = userSerializer

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

