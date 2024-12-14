from rest_framework import serializers
from .models import MyUser ,Post


class UserRegisterSerializer(serializers.ModelSerializer) :

    password = serializers.CharField(write_only=True)
    class Meta :
        model = MyUser
        fields = ['username' ,'email' , 'first_name','last_name','password']
    
    def create(self,validated_data) :
        user = MyUser(
            username = validated_data['username'] ,
            email = validated_data['email'] ,
            first_name = validated_data['first_name'] ,
            last_name = validated_data['last_name'],


        )
        user.set_password(validated_data['password'])
        user.save()
        return user

class MyUserProfileSerializer(serializers.ModelSerializer) : 

    follower_count = serializers.SerializerMethodField()
    following_count =  serializers.SerializerMethodField()
    
    class Meta :
        model = MyUser
        fields = ['username', 'bio','profile_image' ,'follower_count','following_count' ,'favourite_game']

    def get_follower_count(self,obj):
        return obj.followers.count()

    def get_following_count(self,obj):
        return obj.following.count()


class PostSerializer(serializers.ModelSerializer) :

    username  = serializers.SerializerMethodField()
    like_count = serializers.SerializerMethodField()
    formated_date = serializers.SerializerMethodField()
    image = serializers.SerializerMethodField()
    video = serializers.SerializerMethodField()

    class Meta :
        model = Post
        fields = ['id' , 'username' ,'description' , 'formated_date' , 'likes','like_count' ,'media_type', 'image', 'video',]

    def get_username(self,obj) :
        return obj.user.username
    
    def get_like_count(self,obj) :
        return obj.likes.count()
    
    def get_formated_date(self,obj) :
        return obj.created_at.strftime("%d %b %y")
    def get_image(self, obj):
        if obj.image:
            return obj.image.url  
        return None

    def get_video(self, obj):
        if obj.video:
            return obj.video.url  
        return None
    


class UserSerializer(serializers.ModelSerializer) :
    class Meta :
        model = MyUser
        fields = ['username' ,'bio','email','profile_image','first_name' , 'last_name' ,'favourite_game', 'birthdate']
