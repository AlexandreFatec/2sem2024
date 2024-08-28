import requests

valor = 0

cnpj = {}

fornecedores = {}

for k in range(1, 46):
    url = 'https://dadosabertos.camara.leg.br/api/v2/deputados/204534/' + \
          f'despesas?ano=2023&ordem=ASC&ordenarPor=ano&pagina={k}&itens=15'
    dados = requests.get(url).json()['dados']
    print (f'Página {k}...')
    for d in dados:
        c = d['cnpjCpfFornecedor']
        n = d['nomeFornecedor']
        if c not in cnpj:
            cnpj[c] = d['valorLiquido']
            fornecedores[c] = n
        else:
            cnpj[c] += d['valorLiquido']
        valor += d['valorLiquido']
print (f'R$ {valor:.2f}')

for c, valor in sorted(cnpj.items(), key=lambda x:x[1], reverse=True)[:100]:
    print (f'{fornecedores[c]} R$ {valor:.2f}')

