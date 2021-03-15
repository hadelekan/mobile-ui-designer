<template>
    <div>
        <div class="is-flex">
            <div class="is-flex-grow-1 hoverable tab" :class="{activeClass: active == k}" v-for="(tab, k) in tabs" :key="k" @click="tabSelect(k)">{{tab}}</div>
        </div>
        <div v-for="(tab, k) in tabs" :key="k" class="tab-pane" :id="`tab-${name}-${tab}`" slot="`tab-${name}-${tab}`">

        </div>
    </div>
</template>
<script>
import $bus from '@/plugins/eventbus'
export default {
    props:['tabs', 'default', 'activeClass', 'name'],
    data(){
        return {
            active: 0
        }
    },
    methods:{
        tabSelect(k){
            this.active = k
            $bus.$emit('tabSelect', {tabIndex:k, tabName: this.tabs[k], component: this.name})
        }
    }
}
</script>
<style scoped>
.activeClass{
    color:rgb(255, 255, 255);
    border-bottom:solid 1px;
}
.tab{
    padding: 2px;
    text-transform: capitalize;

}
</style>