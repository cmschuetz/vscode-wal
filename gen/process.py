import json

with open('gen/base.json', 'r') as f:
    data = json.loads(f.read())
    set_data = set(d['settings']['foreground'] for d in data if 'foreground' in d['settings'])
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
        with open('gen/formatted.ts-sample', 'w') as f3:
            f3.writelines(newtokens)    

