<template>
  <div class="hello">
    <h4>{{ titulo }}</h4>
    <p v-if="mensagem === ''">
      <slot />
    </p>
    <p>{{ mensagem }}</p>
    <div class="botoes">
      <button @click="cancelou">Cancela</button>
      <button @click="facaAlgo">{{ mensagemConfirma }}</button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    titulo: String,
    mensagem: {
      type: String,
      default: ''
    },
    mensagemConfirma: {
      type: String,
      default: 'Confirma'
    },
    facaAlgo: Function
  },
  methods: {
    cancelou () {
      console.log('Cancelou no HelloWorld')
      this.$emit('chamouCancelar')
      this.$emit('chamouCancelar1')
      this.$emit('chamouCancelar3')
    }
  }
}
</script>

<style lang="scss">
.hello {
  background: rgba($color: #ccc, $alpha: 0.7);
  padding: 20px;
  margin-bottom: 20px;

  h4 {
    font-size: 30px;
    text-align: center;
  }
  p {
    padding: 10px 20px;
    text-align: center;
    font-size: 16px;
  }
  .botoes {
    display: flex;
    justify-content: space-between;
    padding: 0px 20px;
  }

}
</style>
