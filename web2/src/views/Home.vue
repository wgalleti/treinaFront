<template>
  <div class="home">
    <HelloWorld
      :titulo="titulo"
      :mensagem="mensagem"
      mensagemConfirma="Apaga ele!"
      :facaAlgo="otaFuncao"
      @chamouCancelar="helloWorldCancelou"
      @chamouCancelar3="helloWorldCancelou3">
    <h3>Minha mensagem Customizada</h3>
    <hr>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam eos ex tempore? Labore, est a? Beatae provident similique quibusdam pariatur? Temporibus quis delectus, veniam consequatur neque labore ratione consequuntur minus?</p>
    </HelloWorld>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
export default {
  name: 'home',
  data () {
    return {
      titulo: 'Apagar Pessoa',
      mensagem: 'Você tem certeza que deseja apagar essa pessoa?'
    }
  },
  components: {
    HelloWorld
  },
  methods: {
    boraFazerAlgumaCoisa () {
      console.log('Clickou')
    },
    otaFuncao () {
      console.log('Clickou no ota!')
    },
    helloWorldCancelou () {
      console.log('Cancelou no Home.vue')
    },
    helloWorldCancelou3 () {
      console.log('Cancelou 3 no Home.vue')
    }

  }
}
</script>
