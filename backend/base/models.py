from django.db import models
from django.contrib.auth.models import AbstractUser 

# Create your models here.

class MyUser(AbstractUser) :
    FAVOURITE_GAMES = [
        ('valorant', 'Valorant'),
        ('league_of_legends', 'League of Legends'),
        ('fortnite', 'Fortnite'),
        ('call_of_duty','Call of Duty'),
        # Add other games as needed
    ]

    username = models.CharField(max_length=50,unique = True , primary_key = True )
    bio = models.CharField(max_length=500)
    profile_image = models.ImageField( upload_to="profile_image", blank=True,null=True)
    followers = models.ManyToManyField('self',symmetrical=False,related_name = 'following', blank = True)
    favourite_game = models.CharField(max_length=50, choices=FAVOURITE_GAMES, blank=True, null=True)
    birthdate = models.DateField(null=True, blank=True)


    def __str__(self):
        return self.username
    
class Post(models.Model) :
    user = models.ForeignKey(MyUser,on_delete=models.CASCADE,related_name='posts')
    description  = models.CharField(max_length=400)
    created_at = models.DateTimeField(auto_now_add=True)
    likes = models.ManyToManyField(MyUser,related_name='post_likes',blank=True)
    # Media fields: image or video
    media_type_choices = [
        ('image', 'Image'),
        ('video', 'Video'),
        ('none', 'None'),
    ]
    
    media_type = models.CharField(max_length=10, choices=media_type_choices, default='none')
    image = models.ImageField(upload_to='post_images', blank=True, null=True)
    video = models.FileField(upload_to='post_videos', blank=True, null=True)
    
    def __str__(self):
        return f"Post by {self.user.username} at {self.created_at}"
    
