from django.contrib import admin
from biblioteca.base.models import Pessoa, Livro, Emprestimo


admin.site.site_header = 'Treina Front'


@admin.register(Pessoa)
class PessoaAdmin(admin.ModelAdmin):
    list_display = ('nome', 'email', 'cpf')
    list_filter = ('cpf', 'nome')
    search_fields = ('nome', 'email', 'cpf')


@admin.register(Livro)
class LivroAdmin(admin.ModelAdmin):
    list_display = ('nome', 'autor', 'ano')
    list_filter = ('autor', 'ano')
    search_fields = ('nome', 'autor', 'ano')

@admin.register(Emprestimo)
class EmprestimoAdmin(admin.ModelAdmin):
    list_display = ('pessoa', 'data_inicial', 'data_limite', 'data_devolucao')
    list_filter = ('data_inicial', 'data_limite', 'data_devolucao')
    search_fields = ('pessoa', 'pessoa__email',)
