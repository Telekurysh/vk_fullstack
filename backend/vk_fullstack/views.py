from rest_framework import generics
from .models import News, Comment
from .serializers import NewsSerializer, CommentSerializer

class NewsList(generics.ListAPIView):
    queryset = News.objects.all().order_by('-pub_date')[:100]
    serializer_class = NewsSerializer

class NewsDetail(generics.RetrieveAPIView):
    queryset = News.objects.all()
    serializer_class = NewsSerializer

class CommentList(generics.ListAPIView):
    queryset = Comment.objects.all()
    serializer_class = CommentSerializer

class CommentDetail(generics.RetrieveAPIView):
    queryset = Comment.objects.all()
    serializer_class = CommentSerializer
