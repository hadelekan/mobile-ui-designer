<template>
    <div>
        <b-navbar class="has-background-black-ter has-text-white">
            <template #brand>
                <b-navbar-item tag="router-link" :to="{ path: '/' }" style="color:white">
                    XE
                </b-navbar-item>
            </template>

            <template #end>
                <b-navbar-item tag="div">
                    <div class="buttons">
                        <b-button type="is-dark" icon-right="file" />
                        <b-button type="is-dark" icon-right="folder-open" @click="isOpen = !isOpen"  />
                        <b-button type="is-dark" icon-right="content-save" />
                    </div>
                </b-navbar-item>
            </template>
        </b-navbar>
        <b-modal v-model="isOpen">
            <div class="is-4by3">
                <div class="card">
                    <header class="card-header">
                        <div class="card-header-title">Open Project</div>
                    </header>
                    <div class="card-content">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet quam tempore earum est ab laborum, ullam provident qui illo corporis dolorem maiores nemo nulla illum omnis iste asperiores consequatur. Accusamus!
                </div>
                </div>
            </div>
        </b-modal>
    </div>

</template>

<script>
export default {
    data(){
        return{
            isOpen:false
        }
    }
}
</script>

<style>

</style>