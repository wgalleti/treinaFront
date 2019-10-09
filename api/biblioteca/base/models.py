from django.db import models


class Livro(models.Model):
    nome = models.CharField(max_length=50)
    autor = models.CharField(max_length=100)
    ano = models.PositiveIntegerField()

    def __str__(self):
        return self.nome


class Pessoa(models.Model):
    nome = models.CharField(max_length=50)
    cpf = models.CharField(max_length=15)
    email = models.EmailField()

    def __str__(self):
        return self.nome


class Emprestimo(models.Model):
    data_inicial = models.DateField()
    data_limite = models.DateField()
    data_devolucao = models.DateField(null=True, blank=True)
    pessoa = models.ForeignKey(
        to='base.Pessoa',
        on_delete=models.DO_NOTHING
    )
    livros = models.ManyToManyField(
        to='base.Livro'
    )

    def __str__(self):
        return f'{self.pk}'
