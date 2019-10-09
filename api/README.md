# Desenvolvimento

1. Primeiro instale o python 3.7.*
1. Instale o pipenv `pip install pipenv`
1. Entre no ambiente virtual `pipenv shell`
1. Instale as dependencias do projeto `pipenv sync` dentro da pasta `api`
1. Prepare e instale as migrações `python manage.py makemigrations` e depois `python manage.py migrate`
1. Crie um super usuário `python manage.py createsuperuser`
1. Levante o servidor `python manage.py runserver`

Agora só acessar `http://localhost:8000/admin` para a a administração

A api vai estar em `http://localhost:8000/api`