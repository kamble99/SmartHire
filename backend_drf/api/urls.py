from django.urls import path
from accounts.views import RegisterView
from jobs.views import JobListCreateView, JobDetailView, ApplicationListCreateView, ResumeUploadView, ATSScoreView, JobSuggestionsView
from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
)


urlpatterns = [
    path('register/', RegisterView.as_view(), name='register'),
    path('jobs/', JobListCreateView.as_view(), name='job-list'),
    path('applications/', ApplicationListCreateView.as_view(), name='application-list'),
    path('resume/upload/', ResumeUploadView.as_view(), name='resume-upload'),
    path('ats/score/', ATSScoreView.as_view(), name='ats-score'),
    path('ats/suggestions/', JobSuggestionsView.as_view(), name='job-suggestions'),
    path('token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
]
