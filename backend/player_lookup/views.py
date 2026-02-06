from django.shortcuts import render
from django.http import JsonResponse
import os
import csv
import json

# Create your views here.
def find_player(request):

    player_name = ""

    if (request.GET):
        player_name = request.GET.get("name")
    
    if not player_name:
        return JsonResponse({"error": "No player name provided"}, status=400)
    
    csv_file_path = os.path.join(os.path.dirname(__file__), "../../data/archive/nba_stats_2026.csv")

    with open(csv_file_path, newline="", encoding="utf-8") as f:
        reader = csv.DictReader(f)
        for row in reader:
            if row["Name"].lower() == player_name.lower():
                return JsonResponse(row)
    
    return JsonResponse({"error": "Player not found"}, status=404) 