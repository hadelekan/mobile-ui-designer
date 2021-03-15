<template>
  <div class="wrap p-1 has-text-white">
      <div v-for="(l,k) in list" :key="k" class="listitem" @click="selectDevice(l)">{{l.name}}</div>
  </div>
</template>

<script>
export default {
    props:['list'],
    methods:{
        selectDevice(device){
            this.$store.commit('device/selectDevice', device)
        }
    }
}
</script>
<style>
.wrap{
    border: solid 1px #585454;
    background: #524f4f;
    position: relative;
}
.listitem{
    padding: 1px 2px;
}
.listitem:hover{
    background-color: #464646;
    cursor: pointer;
}
.select{

}
</style>