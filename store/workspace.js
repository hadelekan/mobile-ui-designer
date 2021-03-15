export const state = () => ({
    tools: [
        // {name:'Section', group: 'layout'},
        // {name:'Text', group: 'Typography'},
        // {name:'Heading', group: 'Heading'},
        // {name:'Icon'},
        {name:'Card', config:{header:{title: 'Card Header'}, content:{text: 'content'}, footer:{title:'Card Footer'}}},
        {name:'Picture', config: {input:{src: '', placeholder:'Image placeholder'}}},
        {name:'Autocomplete', group: 'form', config: {label:{text: 'label'}, input:{label: 'label', placeholder: 'Placeholder', data:[ 'data-1', 'data-2']}}},
        {name:'Button', group: 'form', config: {label: 'Button-X'}},
        {name:'Checkbox', group: 'form', config:{label:{}, input:{}}},
        {name:'Select', group: 'form', config:{label:{}, input:{rounded: false, list:[{text:'Select 1', value: 'select-1'}, {text:'Select 2', value: 'select-2'} ]}}},
        {name:'Label', group: 'form', config:{}},
        {name:'NumberInput', group: 'form', config:{label:{}, input:{}}},
        {name:'RadioBox', group: 'form', config:{input:{value: 'Radiobox'}}},
        {name:'ToggleSwitch', group: 'form', config:{input:{text:'Switch'}}},
        {name:'Input', group: 'form', config: {label:{text: 'label'}, input:{label: 'label', placeholder: 'Placeholder'}}},
    ],
    collections:[
    ],
    selectedControl: {}
  })
  
  export const mutations = {
    collectionOverride(state, data){
      state.collections = data
    },
    activateControl(state, data){
      state.selectedControl = data
    },
    remove(state, { todo }) {
      state.list.splice(state.list.indexOf(todo), 1)
    },
    toggle(state, todo) {
      todo.done = !todo.done
    }
  }