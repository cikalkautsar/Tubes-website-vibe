from django.db import models
from django.contrib.auth.models import User


class pengguna(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE) #user ini fk dari tabel baru yang bernama auth_user
    name = models.CharField(max_length=100)
    email = models.EmailField(unique=True)
    bio = models.TextField(blank=True, null=True)
    profile_picture = models.URLField(blank=True, null=True)
    join_date = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.username

    class Meta:
        db_table = 'pengguna'

class post(models.Model):
    captions = models.TextField()
    media = models.URLField(blank=True, null=True)
    date = models.DateField()
    ID_user = models.ForeignKey(pengguna, on_delete=models.CASCADE) 

    def __str__(self):
        return f"Post by {self.ID_user.username}"

    class Meta:
        db_table = 'post'



class likes(models.Model):
    ID_post = models.ForeignKey(post, on_delete=models.CASCADE)
    ID_likedBy = models.ForeignKey(pengguna, on_delete=models.CASCADE)

    def __str__(self):
        return f"{self.ID_likedBy.username} liked {self.ID_post.id}"

    class Meta:
        db_table = 'likes'

class comment(models.Model):
    ID_post = models.ForeignKey(post, on_delete=models.CASCADE)
    ID_commentBy = models.ForeignKey(pengguna, on_delete=models.CASCADE)
    text_comment = models.TextField()
    ID_comment_rep = models.ForeignKey('self', on_delete=models.SET_NULL, null=True, blank=True)

    def __str__(self):
        return f"Comment by {self.ID_commentBy.username} on {self.ID_post.id}"

    class Meta:
        db_table = 'comment'

class achievements(models.Model):
    name_achievement = models.CharField(max_length=100)
    description = models.TextField()
    minimal_durations = models.TimeField()
    make_date = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.name_achievement

    class Meta:
        db_table = 'achievements'

class stopwatch(models.Model):
    ID_user = models.ForeignKey(pengguna, on_delete=models.CASCADE) 
    start_time = models.DateTimeField()
    finish_time = models.DateTimeField()
    duration_stopwatch = models.TimeField()

    class Meta:
        db_table = 'stopwatch'

class user_achievements(models.Model):
    ID_user = models.ForeignKey(pengguna, on_delete=models.CASCADE)
    ID_achievement = models.ForeignKey(achievements, on_delete=models.CASCADE)
    ID_stopwatch = models.ForeignKey(stopwatch, on_delete=models.CASCADE)
    target_date = models.DateTimeField()
    streaks_status = models.BooleanField()
    total_durations = models.TimeField()

    class Meta:
        db_table = 'user_achievements'

class group_streaks(models.Model):
    name_group = models.CharField(max_length=100, blank=True, null=True) 
    target_duration_groupstreaks = models.TimeField()
    make_date_groupstreaks = models.DateTimeField(auto_now_add=True)
    active_status_groupstreaks = models.BooleanField()

    class Meta:
        db_table = 'group_streaks'


class user_group_streaks(models.Model):
    ID_group_streaks = models.ForeignKey(group_streaks, on_delete=models.CASCADE) 
    ID_user = models.ForeignKey(pengguna, on_delete=models.CASCADE)
    join_status = models.BooleanField()
    join_date_user_groupstreaks = models.DateTimeField()

    class Meta:
        db_table = 'user_group_streaks'

class status_streaks(models.Model):
    ID_group_streaks = models.ForeignKey(group_streaks, on_delete=models.CASCADE) 
    ID_user = models.ForeignKey(pengguna, on_delete=models.CASCADE)
    date_join_streaks = models.DateField()
    status = models.BooleanField()
    duration = models.TimeField()

    class Meta:
        db_table = 'status_streaks'

class user_streaks(models.Model):
    ID_group_streaks = models.ForeignKey(group_streaks, on_delete=models.CASCADE)
    ID_user = models.ForeignKey(pengguna, on_delete=models.CASCADE)
    start_date = models.DateField()
    finish_date = models.DateField()
    total = models.TimeField()
    active_status = models.BooleanField()

    class Meta:
        db_table = 'user_streaks'

class streak_invitation(models.Model):
    ID_user_sender = models.ForeignKey(pengguna, on_delete=models.CASCADE, related_name='invitations_sent') 
    ID_user_receiver = models.ForeignKey(pengguna, on_delete=models.CASCADE, related_name='invitations_received') 
    ID_group_streak = models.ForeignKey(group_streaks, on_delete=models.CASCADE)
    date_invitation = models.DateTimeField(auto_now_add=True)
    status_invitation = models.CharField(
        max_length=10,
        choices=[('Pending', 'Pending'), ('Accepted', 'Accepted'), ('Rejected', 'Rejected')]
    )

    class Meta:
        db_table = 'streak_invitation'

class postingan_tags(models.Model):
    ID_post = models.ForeignKey(post, on_delete=models.CASCADE)
    date_add = models.DateTimeField(auto_now_add=True)

    class Meta:
        db_table = 'postingan_tags'


class follow(models.Model):
    ID_user_follower = models.ForeignKey(pengguna, on_delete=models.CASCADE, related_name='following') 
    ID_user_followed = models.ForeignKey(pengguna, on_delete=models.CASCADE, related_name='followers') 
    follow_date = models.DateField(auto_now_add=True)

    class Meta:
        db_table = 'follow'
