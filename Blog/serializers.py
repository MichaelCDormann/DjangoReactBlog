from rest_framework import serializers
from .models import Post


class PostSerializer(serializers.ModelSerializer):
    class Meta:
        model = Post
        exclude = ()
        read_only_fields = ('id', 'created', 'updated')
