<template>
  <app-grid
    :colunas="colunas"
    :form="form"
    urlDados="/pessoas/"/>
</template>

<script>
export default {
  data () {
    return {
      colunas: [
        {
          dataField: 'id',
          allowEditing: false,
          caption: '#'
        },
        {
          dataField: 'nome',
          validationRules: [
            { type: 'required', message: 'Nome é obrigatório' }
          ]
        },
        {
          dataField: 'cpf',
          validationRules: [
            { type: 'required', message: 'CPF é obrigatório' }
          ]
        },
        {
          dataField: 'email',
          validationRules: [
            { type: 'required', message: 'Email é obrigatório' },
            { type: 'email', message: 'Informe um email válido' }
          ]
        }
      ],
      form: {
        colCount: 1,
        items: [
          {
            itemType: 'group',
            colCount: 2,
            items: [
              'nome',
              'cpf'
            ]
          },
          'email'
        ]
      }
    }
  }
}
</script>
