import requests
import string
import nltk

nltk.download('stopwords')
from nltk.corpus import stopwords
transcrições = []
for pag in range (1,8):
  url = 'https://dadosabertos.camara.leg.br/api/v2/deputados/' + \
        '204536/discursos?dataInicio=2019-01-01&dataFim=2024-08-14' + \
        f'&ordenarPor=dataHoraInicio&ordem=ASC&pagina={pag}&itens=100'
  resp = requests.get(url).json()
  print (f'Página {pag}...')
  for d in resp['dados']:
    s = d['transcricao'].lower()
    s = ''.join(e for e in s if e not in string.punctuation)
    s = s.split()
    s = [w for w in s if w not in stopwords.words('portuguese')]
    transcrições.extend(s)
from collections import Counter
transcrições = Counter(transcrições)
print (transcrições.most_common(100))









