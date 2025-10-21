# jobs/views.py
from rest_framework import generics, permissions, status
from rest_framework.response import Response
from rest_framework.views import APIView
from .models import Job, Application
from .serializers import JobSerializer, ApplicationSerializer
import random

class JobListCreateView(generics.ListCreateAPIView):
    queryset = Job.objects.all().order_by('-created_at')
    serializer_class = JobSerializer
    permission_classes = [permissions.AllowAny]

    def perform_create(self, serializer):
        user = self.request.user if self.request.user.is_authenticated else None
        serializer.save(created_by=user)

class JobDetailView(generics.RetrieveAPIView):
    queryset = Job.objects.all()
    serializer_class = JobSerializer
    permission_classes = [permissions.AllowAny]

class ApplicationListCreateView(generics.ListCreateAPIView):
    queryset = Application.objects.all()
    serializer_class = ApplicationSerializer
    permission_classes = [permissions.AllowAny]

    def perform_create(self, serializer):
        user = self.request.user if self.request.user.is_authenticated else None
        serializer.save(applicant=user)

class ResumeUploadView(APIView):
    permission_classes = [permissions.AllowAny]

    def post(self, request):
        # Mock resume upload - in real implementation, save file and process
        return Response({"message": "Resume uploaded successfully", "file_id": "mock_id"}, status=status.HTTP_201_CREATED)

class ATSScoreView(APIView):
    permission_classes = [permissions.AllowAny]

    def post(self, request):
        # Mock ATS scoring - return random score between 60-95
        score = random.randint(60, 95)
        return Response({"ats_score": score, "feedback": f"Your resume scored {score}% match."}, status=status.HTTP_200_OK)

class JobSuggestionsView(APIView):
    permission_classes = [permissions.AllowAny]

    def get(self, request):
        # Mock job suggestions - return random jobs from database
        jobs = Job.objects.all().order_by('?')[:3]  # Random 3 jobs
        serializer = JobSerializer(jobs, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)



            

