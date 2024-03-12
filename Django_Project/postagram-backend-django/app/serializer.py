from rest_framework import serializer
from .models import *

class ReactSerializer(serializer.ModelSerializer):
    class Meta:
        model = React
        fields = ['employee', 'department']