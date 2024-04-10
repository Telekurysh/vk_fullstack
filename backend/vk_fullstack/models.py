from django.db import models

class News(models.Model):
    title = models.CharField(max_length=255)
    author = models.CharField(max_length=100)
    rating = models.IntegerField(default=0)
    pub_date = models.DateTimeField(auto_now_add=True)

class Comment(models.Model):
    news = models.ForeignKey(News, on_delete=models.CASCADE, related_name='comments')
    author = models.CharField(max_length=100)
    content = models.TextField()
    parent = models.ForeignKey('self', on_delete=models.CASCADE, null=True, blank=True, related_name='replies')
    pub_date = models.DateTimeField(auto_now_add=True)
