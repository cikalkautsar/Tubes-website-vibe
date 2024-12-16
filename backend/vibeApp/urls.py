
from django.urls import path, include
from .views import userViewSet, RegisterView, LoginView, postViewSet, likesViewSet, commentViewSet, achievementsViewSet, stopwatchViewSet,user_achievementsViewSet,group_streaksViewSet,user_group_streaksViewSet,status_streaksViewSet,user_streaksViewSet,streak_invitationViewSet,postingan_tagsViewSet,followViewSet
from rest_framework.routers import DefaultRouter

router = DefaultRouter()
router.register (r'pengguna', userViewSet)
router.register (r'post', postViewSet)
router.register (r'likes', likesViewSet)
router.register (r'comment', commentViewSet)
router.register (r'achievements', achievementsViewSet)
router.register (r'user_achievements', user_achievementsViewSet)
router.register (r'group_streaks', group_streaksViewSet)
router.register (r'user_group_streaks', user_group_streaksViewSet)
router.register (r'status_streak', status_streaksViewSet)
router.register (r'user_streak', user_streaksViewSet)
router.register (r'streak_invitation', streak_invitationViewSet)
router.register (r'postingan_tags', postingan_tagsViewSet)
router.register (r'follow', followViewSet)

urlpatterns = [
    path('', include(router.urls)),
    path('api/register/', RegisterView.as_view(), name='user-list'),
    path('api/login/', LoginView.as_view(), name='user-list'),

]