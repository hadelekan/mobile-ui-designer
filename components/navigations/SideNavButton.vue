<template>
    <div class="mx-3 my-2 px-3 py-3 btn-dark">
        <b-icon
        :icon="icon"
        :size="size">
        </b-icon>
        <p>{{label}}</p>
    </div>
</template>
<script>
export default {
    props:['icon', 'label', 'size']
}
</script>