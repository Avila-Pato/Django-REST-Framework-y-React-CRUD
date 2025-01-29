from rest_framework import serializers
from tasks.models import Task


class TaskSerializer(serializers.ModelSerializer):
    class Meta:
        # fields = ("id", "title", "description", "done")
        # de esta forma se pueden excluir todos los campos
        model = Task
        fields = "__all__"
