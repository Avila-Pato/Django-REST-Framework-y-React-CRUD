from rest_framework import routers
from tasks import views
from django.urls import path, include

router = routers.DefaultRouter()
router.register(r"tasks", views.TaskView, "task")

urlpatterns = [
    path("api/v1/", include(router.urls)),
]
