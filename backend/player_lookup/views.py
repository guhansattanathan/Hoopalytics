from django.shortcuts import render
from django.http import JsonResponse
from django.conf import settings
import os


# Create your views here.
def find_player(request):

    player_name = ""

    if (request.GET):
        player_name = request.GET.get("name")
    
    if not player_name:
        return JsonResponse({"error": "No player name provided"}, status=400)

    return 