import requests

url = 'http://de01fcd85857.ngrok.io/hook'
myobj = {'number': 12524,
         'type': 'issue', 'action': 'show'}

x = requests.post(url, data=myobj)


print(x.text)
