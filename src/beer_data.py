import json 
content = open('beersDataFull.js')

brewery = ''
title = ''
description = ''
beers = []
for i, line in enumerate(content):
    line = line.replace('\n', '')
    if line.startswith('##'):
        brewery = line.replace('##', '').strip()
        continue
    elif line.startswith('- [ ] '):
        beer = line.replace('- [ ] ', '').replace(')', '').strip()
        title, description = beer.split('(')
    else:
        continue
    beer_entry = {
      "id": i,
      "title": title,
      "desc": description,
      "brewery": brewery,
      "cSt": False,
      "fSt": False,
      "r": 0,
    }
    beers.append(beer_entry)
print(json.dumps(beers))




