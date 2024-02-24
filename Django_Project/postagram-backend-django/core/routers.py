from rest_framework import routers
from core.user.viewsets import UserViewSet

from .viewsets import RegisterViewSet

router = routers.SimpleRouter()
# ##################################################################### #
# ################### USER ###################### #
# ##################################################################### #
router.register(r"user", UserViewSet, basename="user")
urlpatterns = [
    *router.urls,
]
