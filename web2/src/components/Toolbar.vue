<template>
  <div class="toolbar">
    <span>Livro NERD</span>
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
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 50px;
  background-color: #4caf50;
  padding: 10px 20px;

  span {
    display: block;
    font-size: 26px;
    color: #fff;
  }

  .links {
    height: 21px;
    background-color: #4caf50;
    margin: 0px -20px;
    padding: 0px 20px;
    display: flex;
    justify-content: space-between;

    a {
      text-decoration: none;
      font-weight: 500;
      color: #fff;
      padding-left: 10px;
    }
  }
}
</style>
