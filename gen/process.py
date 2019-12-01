import json
import re

def score(hex_val):
    r = int(hex_val[1:3], 16)
    g = int(hex_val[3:5], 16)
    b = int(hex_val[5:7], 16)
    return r * 0.299 + g * 0.587 + b * 0.114
    
# Use an existing vs code theme and translate its colorscheme to pywal colors
# Sort it by brightness to keep the colors in order
with open('gen/base.json', 'r') as f:
    data = json.loads(f.read())
    set_data = list(set(d['settings']['foreground'] for d in data if 'foreground' in d['settings']))
    set_data.sort(key=score)
    maps = {val: f'walColors.colors.color{i}' for val, i in zip(set_data, range(1, len(set_data) + 1))}

    for d in data:
        if 'foreground' in d['settings']:
            # Replace hex value with pywal color name
            d['settings']['foreground'] = maps[d['settings']['foreground']]
    with open('gen/new.json', 'w') as f2:
        f2.writelines(json.dumps(data, indent=4))
    with open('gen/new.json', 'r') as f2:
        wal_json = f2.read()
        # Remove all quotes around color variables so they can be interpreted correctly
        wal_json_ts_formatted = re.sub(r'\"((?:walColors.colors.color)\d{1,2})\"', r'\g<1>', wal_json)
        
        with open('gen/formatted-ts-sample', 'w') as f3:
            # Write a typescript-formatted object that can be used in the generator code
            f3.writelines(wal_json_ts_formatted)    

