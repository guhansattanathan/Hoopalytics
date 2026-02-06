from django.shortcuts import render
from django.http import JsonResponse
import os
import csv

# Create your views here.
def sample(request):

    team_data = []

    csv_path = os.path.join(os.path.dirname(__file__), "../../data/archive/team_Data_2026.csv")

    with open(csv_path, newline="", encoding="utf-8") as f:
        reader = csv.DictReader(f)
        for row in reader:
            team_data.append(row)

    return JsonResponse(team_data, safe=False)