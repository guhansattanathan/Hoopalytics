import csv
import requests
from bs4 import BeautifulSoup

URL = "https://www.nbastuffer.com/2025-2026-nba-team-stats/"

try:
    response = requests.get(URL)
    response.raise_for_status()
except requests.exceptions.RequestException as e:
    print(f"Error fetching the URL: {e}")
    exit()

soup = BeautifulSoup(response.content, "html.parser")

results_container = soup.find("table", id="tablepress-144")

if results_container:

    team_rows = results_container.find_all("tr")

    with open("../../data/archive/team_data_2026.csv", "w", newline="") as f:
        writer = csv.writer(f)
        writer.writerow(["Team","Conference","GP","SoS","rSoS","WIN%","eWIN%","pWIN%"])

        for row in team_rows[1:]:
            cols = row.find_all("td")

            if not cols:
                continue

            name = cols[1].text.strip()
            conference = cols[2].text.strip()
            gp = cols[4].text.strip()
            sos = cols[12].text.strip()
            rsos = cols[13].text.strip()
            win_percentage = cols[19].text.strip()
            e_win_percentage = cols[20].text.strip()
            p_win_percentage = cols[21].text.strip()

            # print(f"{name} | {conference} | {gp} | {sos} | {rsos} | {win_percentage} | {e_win_percentage} | {p_win_percentage} |")

            writer.writerow([name, conference, gp, sos, rsos, win_percentage, e_win_percentage, p_win_percentage])

else:
    print("Could not find the results container.")