<template>
  <div>
    <div class="device">
      <div class="viewport">
        <draggable v-model="list" group="people" class="viewport">
          <component :is="l.name" class="item" v-for="(l, k) in list" :key="k" @click="selectedControl(k)">
            <div>
              {{ l.slug }}
            </div>
          </component>
        </draggable>
      </div>
    </div>
  </div>
</template>

<script>
import draggable from "vuedraggable";
import Toolbox from '../components/Toolbox.vue';

export default {
  components: {
    draggable,
    Toolbox,
  },
  data() {
    return {
      list: [
        { name: "Button", label: "button-a", slug: "button-1" },
        { name: "Button", label: "button-b", slug: "button-2" },
        { name: "Button", label: "button-c", slug: "button-3" },
      ],

    };
  },
  methods:{
    selectedControl(k){
      console.log(this.list[k])
    }
  }
};
</script>

<style>
.device {
  width: 300px;
  height: 500px;
  border: solid 1px grey;
  display: flex;
  margin: 0 auto;
}
.item {
  padding: 5px;
  margin: 5px 3px;
  border: solid 1px grey;
  background: white;
}
.viewport {
  flex: 1;
  display: flex;
  flex-direction: column;
  background: rgb(238, 238, 238);
}
.toolbox {
  display: flex;
  flex-direction: column;
  position: absolute;
  border: solid 1px gray;
  padding: 2px;
}
.toolbox span {
  padding: 10px;
  border: solid 1px grey;
  margin: 3px;
  background: rgb(241, 241, 241);
}
</style>