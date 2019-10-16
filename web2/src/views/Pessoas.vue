<template>
  <dx-data-grid
    :data-source="dataSource"
    :columns="colunas"
    :show-borders="true"
    :show-column-lines="true"
    :row-alternation-enabled="true"
    :column-auto-width="true"
    :selection="{ mode: 'single'}"
    :allow-column-reordering="true"
    height="480"
    :on-toolbar-preparing="loadTollbarPreparing"
  >
    <dx-editing
      :allow-updating="true"
      :allow-deleting="true"
      :allow-adding="true"
      :use-icons="true"
      mode="form"
      :form="formCustomizado"
    />
    <dx-search-panel
      :visible="true"
      :width="240"
      placeholder="Pesquisar..."
    />
    <dx-paging :page-size="10"/>
    <dx-pager
      :show-page-size-selector="true"
      :allowed-page-sizes="[5, 10, 20]"
      :show-info="true"
    />
  </dx-data-grid>
</template>

<script>
import {
  DxDataGrid,
  DxSearchPanel,
  DxPager,
  DxPaging,
  DxEditing
} from 'devextreme-vue/data-grid'
import CustomStore from 'devextreme/data/custom_store'

export default {
  components: {
    DxDataGrid,
    DxSearchPanel,
    DxPager,
    DxPaging,
    DxEditing
  },
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
      ]
    }
  },
  methods: {
    loadTollbarPreparing (grid) {
      let toolbarItems = grid.toolbarOptions.items
      toolbarItems.unshift({
        location: 'before',
        widget: 'dxButton',
        options: {
          icon: 'refresh',
          text: 'Atualizar',
          onClick () {
            grid.component.refresh()
          }
        }
      })
    }
  },
  computed: {
    dataSource () {
      return new CustomStore({
        key: 'id',
        load: async loadOptions => {
          const { data } = await this.axios.get('/pessoas/')
          return {
            data: data,
            totalCount: data.length
          }
        },
        insert: async values => {
          const data = await this.axios.post('/pessoas/', values)
          return data
        },
        update: async (key, values) => {
          const data = await this.axios.patch(`/pessoas/${key}/`, values)
          return data
        },
        remove: async key => {
          const data = await this.axios.delete(`/pessoas/${key}/`)
          return data
        }
      })
    },
    formCustomizado () {
      // formConfig.focusStateEnabled = true
      // formConfig.labelLocation = 'left'
      return {
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
