from rest_framework import serializers
from .models import user, post, likes, comment, achievements, user_achievements, stopwatch, group_streaks, user_group_streaks, status_streaks, user_streaks, streak_invitation, postingan_tags, follow

class userSerializer(serializers.ModelSerializer):
    class Meta:
        model = user
        fields = '__all__'

class postSerializer(serializers.ModelSerializer):
    class Meta:
        model = post
        fields = '__all__'

class likesSerializer(serializers.ModelSerializer):
    class Meta:
        model = likes
        fields = '__all__'

class commentSerializer(serializers.ModelSerializer):
    class Meta:
        model = comment
        fields = '__all__'

class achievementsSerializer(serializers.ModelSerializer):
    class Meta:
        model = achievements
        fields = '__all__'

class stopwatchSerializer(serializers.ModelSerializer):
    class Meta:
        model = stopwatch
        fields = '__all__'

class group_streaksSerializer(serializers.ModelSerializer):
    class Meta:
        model = group_streaks
        fields = '__all__'

class user_achievementsSerializer(serializers.ModelSerializer):
    class Meta:
        model = user_achievements
        fields = '__all__'

class user_group_streaksSerializer(serializers.ModelSerializer):
    class Meta:
        model = user_group_streaks
        fields = '__all__'

class status_streaksSerializer(serializers.ModelSerializer):
    class Meta:
        model = status_streaks
        fields = '__all__'

class user_streaksSerializer(serializers.ModelSerializer):
    class Meta:
        model = user_streaks
        fields = '__all__'

class streak_invitationSerializer(serializers.ModelSerializer):
    class Meta:
        model = streak_invitation
        fields = '__all__'

class postingan_tagsSerializer(serializers.ModelSerializer):
    class Meta:
        model = postingan_tags
        fields = '__all__'

class followSerializer(serializers.ModelSerializer):
    class Meta:
        model = follow
        fields = '__all__'
