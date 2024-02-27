from rest_framework import routers
from core.user.viewsets import UserViewSet
from core.auth.viewsets import RegisterViewSet, LoginViewSet, RefreshViewSet
from core.post.viewsets import PostViewSet
from core.comment.viewsets import CommentViewSet
from rest_framework_nested import routers


router = routers.SimpleRouter()




# ##################################################################### #
# ################### USER ###################### #
# ##################################################################### #
router.register(r"user", UserViewSet, basename="user")


# ##################################################################### #
# ################### AUTH ###################### #
# ##################################################################### #

router.register(r"auth/login", LoginViewSet, basename="auth-login")

router.register(r"auth/register", RegisterViewSet, basename="auth-register")

router.register(r"auth/refresh", RefreshViewSet, basename="auth-refresh")



# ##################################################################### #
# ################### POST ###################### #
# ##################################################################### #


posts_router = routers.NestedSimpleRouter(router, r'post', lookup='post')

router.register(PostViewSet, r"post", basename="post")


posts_router.register(r'comment', PostViewSet, basename='post-comment')


urlpatterns = [
    *router.urls,
    *posts_router.urls
]