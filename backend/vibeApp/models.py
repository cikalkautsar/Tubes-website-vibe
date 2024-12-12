from django.db import models

# A. User
class user(models.Model):
    username = models.CharField(max_length=50, unique=True)
    password = models.CharField(max_length=255)  # Disimpan dalam bentuk hash
    email = models.EmailField(unique=True)
    name = models.CharField(max_length=100)
    bio = models.TextField(blank=True, null=True)
    profile_picture = models.URLField(blank=True, null=True)
    join_date = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.username

    class Meta:
        db_table = 'user'


# B. Post
class post(models.Model):
    captions = models.TextField()
    media = models.URLField(blank=True, null=True)
    date = models.DateField()
    ID_user = models.ForeignKey(user, on_delete=models.CASCADE)  # Relasi ke User

    def __str__(self):
        return f"Post by {self.ID_user.username}"

    class Meta:
        db_table = 'post'


# C. Likes
class likes(models.Model):
    ID_post = models.ForeignKey(post, on_delete=models.CASCADE)  # Relasi ke Post
    ID_likedBy = models.ForeignKey(user, on_delete=models.CASCADE)  # Relasi ke User

    def __str__(self):
        return f"{self.ID_likedBy.username} liked {self.ID_post.id}"

    class Meta:
        db_table = 'likes'


# D. Comment
class comment(models.Model):
    ID_post = models.ForeignKey(post, on_delete=models.CASCADE)  # Relasi ke Post
    ID_commentBy = models.ForeignKey(user, on_delete=models.CASCADE)  # Relasi ke User
    text_comment = models.TextField()
    ID_comment_rep = models.ForeignKey('self', on_delete=models.SET_NULL, null=True, blank=True)  # Relasi rekursif

    def __str__(self):
        return f"Comment by {self.ID_commentBy.username} on {self.ID_post.id}"

    class Meta:
        db_table = 'comment'


# E. Achievements
class achievements(models.Model):
    name_achievement = models.CharField(max_length=100)
    description = models.TextField()
    minimal_durations = models.TimeField()
    make_date = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.name_achievement

    class Meta:
        db_table = 'achievements'

# G. Stopwatch
class stopwatch(models.Model):
    ID_user = models.ForeignKey(user, on_delete=models.CASCADE)  # Relasi ke User
    start_time = models.DateTimeField()
    finish_time = models.DateTimeField()
    duration_stopwatch = models.TimeField()

    class Meta:
        db_table = 'stopwatch'


# F. User_Achievements
class user_achievements(models.Model):
    ID_user = models.ForeignKey(user, on_delete=models.CASCADE)  # Relasi ke User
    ID_achievement = models.ForeignKey(achievements, on_delete=models.CASCADE)  # Relasi ke Achievement
    ID_stopwatch = models.ForeignKey(stopwatch, on_delete=models.CASCADE)  # Relasi ke Stopwatch
    target_date = models.DateTimeField()
    streaks_status = models.BooleanField()  # Progres atau tercapai
    total_durations = models.TimeField()

    class Meta:
        db_table = 'user_achievements'


# H. Group_Streaks
class group_streaks(models.Model):
    name_group = models.CharField(max_length=100, blank=True, null=True)  # Opsional
    target_duration_groupstreaks = models.TimeField()
    make_date_groupstreaks = models.DateTimeField(auto_now_add=True)
    active_status_groupstreaks = models.BooleanField()

    class Meta:
        db_table = 'group_streaks'


# I. User_Group_Streaks
class user_group_streaks(models.Model):
    ID_group_streaks = models.ForeignKey(group_streaks, on_delete=models.CASCADE)  # Relasi ke GroupStreak
    ID_user = models.ForeignKey(user, on_delete=models.CASCADE)  # Relasi ke User
    join_status = models.BooleanField()
    join_date_user_groupstreaks = models.DateTimeField()

    class Meta:
        db_table = 'user_group_streaks'


# J. Status_Streaks
class status_streaks(models.Model):
    ID_group_streaks = models.ForeignKey(group_streaks, on_delete=models.CASCADE)  # Relasi ke GroupStreak
    ID_user = models.ForeignKey(user, on_delete=models.CASCADE)  # Relasi ke User
    date_join_streaks = models.DateField()
    status = models.BooleanField()
    duration = models.TimeField()

    class Meta:
        db_table = 'status_streaks'


# K. User_Streaks
class user_streaks(models.Model):
    ID_group_streaks = models.ForeignKey(group_streaks, on_delete=models.CASCADE)  # Relasi ke GroupStreak
    ID_user = models.ForeignKey(user, on_delete=models.CASCADE)  # Relasi ke User
    start_date = models.DateField()
    finish_date = models.DateField()
    total = models.TimeField()
    active_status = models.BooleanField()

    class Meta:
        db_table = 'user_streaks'


# L. Streak_Invitation
class streak_invitation(models.Model):
    ID_user_sender = models.ForeignKey(user, on_delete=models.CASCADE, related_name='invitations_sent')  # Relasi ke User
    ID_user_receiver = models.ForeignKey(user, on_delete=models.CASCADE, related_name='invitations_received')  # Relasi ke User
    ID_group_streak = models.ForeignKey(group_streaks, on_delete=models.CASCADE)  # Relasi ke GroupStreak
    date_invitation = models.DateTimeField(auto_now_add=True)
    status_invitation = models.CharField(
        max_length=10,
        choices=[('Pending', 'Pending'), ('Accepted', 'Accepted'), ('Rejected', 'Rejected')]
    )

    class Meta:
        db_table = 'streak_invitation'


# N. Postingan_Tags
class postingan_tags(models.Model):
    ID_post = models.ForeignKey(post, on_delete=models.CASCADE)  # Relasi ke Post
    date_add = models.DateTimeField(auto_now_add=True)

    class Meta:
        db_table = 'postingan_tags'


# O. Follow
class follow(models.Model):
    ID_user_follower = models.ForeignKey(user, on_delete=models.CASCADE, related_name='following')  # Relasi ke User
    ID_user_followed = models.ForeignKey(user, on_delete=models.CASCADE, related_name='followers')  # Relasi ke User
    follow_date = models.DateField(auto_now_add=True)

    class Meta:
        db_table = 'follow'
