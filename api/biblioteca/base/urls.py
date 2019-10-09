from rest_framework import routers

from biblioteca.base.views import PessoaViewSet, EmprestimoViewSet, LivroViewSet

route = routers.DefaultRouter()
route.register('pessoas', PessoaViewSet)
route.register('livros', LivroViewSet)
route.register('emprestimos', EmprestimoViewSet)

urlpatterns = route.urls
