<template>
  <app-grid
    :colunas="colunas"
    :form="form"
    urlDados="/livros/"/>
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
          dataField: 'autor',
          validationRules: [
            { type: 'required', message: 'Autor é obrigatório' }
          ]
        },
        {
          dataField: 'ano',
          dataType: 'number',
          validationRules: [
            { type: 'required', message: 'Ano é obrigatório' }
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
              'ano'
            ]
          },
          'autor'
        ]
      }
    }
  }
}
</script>
