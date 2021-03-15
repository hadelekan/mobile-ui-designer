<template>
  <section>
    <nuxt />
  </section>
</template>

<script>
import Header from '@/components/Header'
import SideNav from '@/components/navigations/SideNav'
export default {
  components:{
    Header,
    SideNav
  },
  data () {
    return {
      items: [
        {
          title: 'Home',
          icon: 'home',
          to: { name: 'index' }
        },
      ]
    }
  }
}
</script>
