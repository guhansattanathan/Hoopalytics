import requests
from bs4 import BeautifulSoup

URL = "https://www.nbastuffer.com/2025-2026-nba-player-stats/"

try:
    response = requests.get(URL)
    response.raise_for_status()
except requests.exceptions.RequestException as e:
    print(f"Error fetching the URL: {e}")
    exit()

soup = BeautifulSoup(response.content, "html.parser")

results_container = soup.find("table", id="tablepress-148")

if results_container:
    player_rows = results_container.find_all("tr")

    for row in player_rows[1:]:
        cols = row.find_all("td")
        if not cols:
            continue

        name = cols[1].text.strip()
        team = cols[2].text.strip()
        position = cols[4].text.strip()
        gp = cols[6].text.strip()
        mpg = cols[7].text.strip()
        twopp = cols[13].text.strip() #two point percentage
        threepp = cols[15].text.strip() #three point percentage
        tsp = cols[17].text.strip() #true shooting percentage
        ppg = cols[18].text.strip()
        rpg = cols[19].text.strip()
        apg = cols[20].text.strip()
        spg = cols[21].text.strip()
        bpg = cols[22].text.strip()
        tov = cols[23].text.strip()
        ortg = cols[28].text.strip()
        drtg = cols[29].text.strip()

        # print(f"{name} | {team} | {position} | GP: {gp} | MPG: {mpg} | PPG: {ppg} | RPG: {rpg} | APG: {apg} | SPG: {spg} | BPG: {bpg} |")

else:
    print("Could not find the results container.")
