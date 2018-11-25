import requests
from bs4 import BeautifulSoup as bs

page = requests.get('https://umggaming.com/leaderboards')
soup = bs(page.text, 'html.parser')

# Get table with the id of leaderboards
leaderboards = soup.find('table', {'id': 'leaderboard-table'})

# Get tbody from table
tbody = leaderboards.find('tbody')

# Get all the tr elements in tbody
for tr in tbody.find_all('tr'):
    # get td text with striped of their white space
    place = tr.find_all('td')[0].text.strip()
    username = tr.find_all('td')[1].text.strip()
    xp = tr.find_all('td')[3].text.strip()
    print(place, username, xp)
