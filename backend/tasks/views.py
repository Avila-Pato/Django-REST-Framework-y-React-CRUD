from rest_framework import viewsets
from tasks.models import Task
from tasks.serializer import TaskSerializer


# de esta manera se manejan sabra los datos que van hacer consultados para hacer el crud
class TaskView(viewsets.ModelViewSet):
    serializer_class = TaskSerializer
    queryset = Task.objects.all()
