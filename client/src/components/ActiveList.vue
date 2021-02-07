<template>
 <div>
   <h1>LIST!!!!!!!!!!!!</h1>
    <b-container fluid>
 <template #cell(name)="row">
        {{ row.value.first }} {{ row.value.last }}
      </template>

   <b-table :items="items" :fields="fields" stacked="md"
      show-empty
      small>
     <template #cell(actions)="row">
      <b-button  size="sm" @click="info(row.item, row.index, $event.target)" class="mr-1">Select row</b-button>
     </template>
   </b-table>
   <p>
      Selected Rows:<br>
      {{ infoModal }}
  </p>
  
  </b-container>
  </div>
</template>

<script>
export default {
  name: 'ActiveList',
  // props: {
  //     userData: {
  //         type: [Object,Array],
  //         default: '',
  //     }
  // },
   data() {
      return {
        fields: [ { key: 'first_name', label: 'first_name', sortable: true, sortDirection: 'desc' },
        { key: 'last_name', label: 'last_name', sortable: true, sortDirection: 'desc' },
          { key: 'age', label: 'Person age', sortable: true, class: 'text-center' },
          { key: 'actions', label: 'Actions' }],
        items: [
          { age: 40, first_name: 'Dickerson', last_name: 'Macdonald' },
          { age: 21, first_name: 'Larsen', last_name: 'Shaw' },
          { age: 89, first_name: 'Geneva', last_name: 'Wilson' },
          { age: 38, first_name: 'Jami', last_name: 'Carney' }
        ],
        selected: [],
        infoModal: {
          id: 'info-modal',
          title: '',
          content: ''
        }
      }
    },
    methods: {
    // onRowSelected(items) {
    //     this.selected = items
    // },
    info(item, index, button) {
        this.infoModal.title = `Row index: ${index}`
        this.infoModal.content = JSON.stringify(item)
        this.$root.$emit('bv::show::modal', this.infoModal.id, button)
      }
   }
}
</script>
