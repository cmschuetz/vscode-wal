import json

def score(hex_val):
    r = int(hex_val[1:3], 16)
    g = int(hex_val[3:5], 16)
    b = int(hex_val[5:7], 16)
    return r * 0.299 + g * 0.587 + b * 0.114
    
with open('gen/base.json', 'r') as f:
    data = json.loads(f.read())
    set_data = list(set(d['settings']['foreground'] for d in data if 'foreground' in d['settings']))
    set_data.sort(key=score)
    maps = {val: f'walColors.colors.color{i}' for val, i in zip(set_data, range(1, len(set_data) + 1))}
    #print([maps[d['settings']['foreground']] for d in data if 'foreground' in d['settings']])
    for d in data:
        if 'foreground' in d['settings']:
            d['settings']['foreground'] = maps[d['settings']['foreground']]
    with open('gen/new.json', 'w') as f2:
        f2.writelines(json.dumps(data))
    with open('gen/new.json', 'r') as f2:
        tokens = f2.read().split()
        newtokens = []
        for token in tokens:
            if 'walColors.colors' in token:
                token = token.replace("\"", "")
            newtokens.append(token)
        with open('gen/formatted-ts-sample', 'w') as f3:
            f3.writelines(newtokens)    

