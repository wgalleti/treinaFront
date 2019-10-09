from rest_framework import viewsets

from biblioteca.base.models import Pessoa, Livro, Emprestimo
from biblioteca.base.serializers import PessoaSerializer, LivroSerializer, EmprestimoSerializer


class PessoaViewSet(viewsets.ModelViewSet):
    queryset = Pessoa.objects.all().order_by('pk')
    serializer_class = PessoaSerializer


class LivroViewSet(viewsets.ModelViewSet):
    queryset = Livro.objects.all().order_by('pk')
    serializer_class = LivroSerializer


class EmprestimoViewSet(viewsets.ModelViewSet):
    queryset = Emprestimo.objects.all().order_by('pk')
    serializer_class = EmprestimoSerializer
