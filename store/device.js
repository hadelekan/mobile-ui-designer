export const state = () => ({
    list: [
        {name:'Motor-G4', type: 'android' , width:360, height:640, image: 'android.png'},
        {name:'Pixel 2',  type: 'android' ,width:411, height:731, image: 'iphone.png'},
        {name:'IPhone 6', type: 'ios' , width:375, height:667, image: 'iphone.png'},
    ],
    selectedDevice: '',
    orientation: 'portrait'
  })
  
  export const mutations = {
    selectDevice(state, device) {
      state.selectedDevice = device
    },
    changeDeviceOrientation(state, orientation){
      const { width, height } = state.selectedDevice
      let dimLong  = ''
      let dimShort  = ''

      if(width > height){
        dimLong = width
        dimShort = height
      }else{
        dimLong = height
        dimShort = width
      }
      if(orientation == 'toggle'){
        const currentOrientation = state.orientation
        orientation =  state.orientation == 'landscape' ? 'portrait' : 'landscape' 
      }

      if(orientation == 'landscape'){
        state.selectedDevice.width = dimLong
        state.selectedDevice.height = dimShort
        state.orientation = 'landscape'
      }else{
        state.selectedDevice.width = dimShort
        state.selectedDevice.height = dimLong
        state.orientation = 'portrait'
      }
    },
    remove(state, { todo }) {
      state.list.splice(state.list.indexOf(todo), 1)
    },
    toggle(state, todo) {
      todo.done = !todo.done
    }
  }