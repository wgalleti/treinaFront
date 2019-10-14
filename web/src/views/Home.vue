<template>
  <b-container class="home">
    <h1>Lista de Pessoas</h1>
    <b-table
      striped
      hover
      bordered
      dark
      responsive
      caption-top
      :busy="tableLoading"
      :fields="fields"
      :items="this.$store.state.pessoas"
    >
      <template v-slot:table-busy>
        <div class="text-center text-danger my-2">
          <b-spinner class="align-middle"></b-spinner>
          <strong>Carregando...</strong>
        </div>
      </template>
      <template v-slot:table-caption>
        <b-btn variant="outline-primary" @click="adicionar">Adicionar</b-btn>
      </template>
      <template v-slot:cell(actions)="row">
        <b-button
          size="sm"
          ref="btnShow"
          @click="editar(row.item)"
          class="mr-1"
          variant="outline-secondary"
        >
          Editar
        </b-button>
        <b-button
          size="sm"
          @click="apagar(row.item)"
          variant="outline-danger">
          Apagar
        </b-button>
      </template>
    </b-table>
    <b-modal
      id="apagar-form"
      size="md"
      title="Apagar pessoa"
      hide-footer
    >
      <h5>Você tem certeza que deseja apagar esse registro?</h5>
      <b-btn
        variant="outline-success"
        :disabled="loading"
        @click="confirmaApagar"
      >{{loading ? 'Apagando...' : 'Sim, Apaga ele!'}}</b-btn>
    </b-modal>
    <b-modal
      id="modal-form"
      size="xl"
      title="Formulário de Pessoa"
      hide-footer
    >
      <b-form @submit.prevent="salvar">
        <b-row>
          <b-col cols="8">
            <b-form-group
              label="Nome"
              description="Informe o nome completo"
            >
              <b-form-input
                v-model="form.nome"
                required
                placeholder="Digite o nome"
              ></b-form-input>
            </b-form-group>
          </b-col>

          <b-col>
            <b-form-group
              label="CPF"
              description="Informe o CPF"
            >
              <b-form-input
                v-model="form.cpf"
                required
                placeholder="Sem os caracters . e -"
              ></b-form-input>
            </b-form-group>
          </b-col>
        </b-row>

        <b-row>
          <b-col>
            <b-form-group
              label="Email"
              description="Informe o email"
            >
              <b-form-input
                type="email"
                v-model="form.email"
                required
                placeholder="Digite o email"
              ></b-form-input>
            </b-form-group>
          </b-col>
        </b-row>

        <b-row>
          <b-col>
            <b-btn
              type="submit"
              variant="outline-success"
              :disabled="loading"
            >{{loading ? 'Aguarde...' : 'Salvar'}}</b-btn>
          </b-col>
        </b-row>

      </b-form>
    </b-modal>
  </b-container>
</template>

<script>
export default {
  data () {
    return {
      form: {},
      loading: false,
      tableLoading: false,
      formApagar: null,
      fields: [
        {
          key: 'id',
          label: '#'
        },
        'nome',
        'email',
        'cpf',
        { key: 'actions', label: 'Opções' }
      ]
    }
  },
  methods: {
    adicionar () {
      this.form = {
        id: 0
      }
      this.$root.$emit('bv::show::modal', 'modal-form', '#btnShow')
    },
    editar (item) {
      this.$root.$emit('bv::show::modal', 'modal-form', '#btnShow')
      this.form = item
    },
    apagar (item) {
      this.$root.$emit('bv::show::modal', 'apagar-form', '#btnShow')
      this.formApagar = item
    },
    async confirmaApagar () {
      try {
        const { id } = this.formApagar
        await this.axios.delete(`http://localhost:8000/api/pessoas/${id}/`)
        this.$root.$emit('bv::hide::modal', 'apagar-form', '#btnShow')
        this.carregar()
      } catch (e) {
        console.error(e)
      }
    },
    async salvar () {
      this.loading = true
      if (this.form.id === 0) {
        try {
          await this.axios.post('http://localhost:8000/api/pessoas/', this.form)
          this.$root.$emit('bv::hide::modal', 'modal-form', '#btnShow')
          this.carregar()
        } catch (e) {
          console.error(e)
        }
      } else {
        try {
          await this.axios.patch(`http://localhost:8000/api/pessoas/${this.form.id}/`, this.form)
          this.$root.$emit('bv::hide::modal', 'modal-form', '#btnShow')
          this.carregar()
        } catch (e) {
          console.error(e)
        }
      }
      this.loading = false
    },
    async carregar () {
      this.tableLoading = true
      await this.$store.dispatch('getPessoas')
      this.tableLoading = false
    }
  },
  mounted () {
    this.carregar()
  }
}
</script>
