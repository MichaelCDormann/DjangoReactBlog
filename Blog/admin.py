from django.contrib import admin
from .models import Post, Image


class PostsAdmin(admin.ModelAdmin):
    list_display = ('title', 'created')


class ImagesAdmin(admin.ModelAdmin):
    list_display = ('post', 'image', 'created')


admin.site.register(Post, PostsAdmin)
admin.site.register(Image, ImagesAdmin)
