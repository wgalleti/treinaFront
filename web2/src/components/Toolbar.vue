<template>
  <div class="toolbar">
    <h1>Livro NERD</h1>
    <div class="links">
      <router-link
        :to="link.to"
        v-for="link in links"
        :key="link.to">
        {{ link.nome }}
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      links: [
        { to: 'pessoas', nome: 'Pessoas' },
        { to: 'livros', nome: 'Livros' },
        { to: 'emprestimos', nome: 'Emprestimos' }
      ]
    }
  }
}
</script>

<style lang="scss">
.toolbar {
  position: fixed;
  width: 100%;
  height: 70px;
  background-color: #4464AD;
  padding: 10px 20px;

  h1 {
    color: #F58F29;
  }

  .links {
    height: 21px;
    background-color: #F58F29;
    margin: 0px -20px;
    padding: 0px 20px;
    display: flex;
    justify-content: space-between;

    a {
      text-decoration: none;
      font-weight: 500;
      color: #4464AD;
    }
  }
}
</style>
