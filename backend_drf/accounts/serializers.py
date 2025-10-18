from django.contrib.auth.models import User
from rest_framework import serializers
from .models import Profile


class UserSerializer(serializers.ModelSerializer):
    password = serializers.CharField(write_only=True, min_length=8, style={'input_type': 'password'})
    phone_number = serializers.CharField(write_only=True, required=False, allow_blank=True)
    role = serializers.ChoiceField(choices=Profile.ROLE_CHOICES, write_only=True, default='candidate')

    class Meta:
        model = User
        fields = ['first_name', 'last_name', 'username', 'email', 'password', 'phone_number', 'role']

    def create(self, validated_data):
       
        phone_number = validated_data.pop('phone_number', None)
        role = validated_data.pop('role', 'candidate')
        user = User.objects.create_user(**validated_data)
        Profile.objects.create(user=user, phone_number=phone_number, role=role)

        return user
