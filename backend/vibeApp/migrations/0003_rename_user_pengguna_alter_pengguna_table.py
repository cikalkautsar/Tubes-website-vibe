# Generated by Django 5.1.3 on 2024-12-16 06:57

from django.conf import settings
from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('vibeApp', '0002_remove_user_password_remove_user_username'),
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.RenameModel(
            old_name='user',
            new_name='pengguna',
        ),
        migrations.AlterModelTable(
            name='pengguna',
            table='pengguna',
        ),
    ]
