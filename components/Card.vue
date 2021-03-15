<template>
  <div class="py-2">
    <div class="card">
      <header class="card-header" v-if="config.header.title">
        <p class="card-header-title has-text-grey">
          {{ config.header.title }}
        </p>
      </header>
      <div class="card-content" v-if="config.content.text">
        <div class="content has-text-centered">
          {{config.content.text}}
        </div>
      </div>
      <footer class="card-footer" v-if="config.footer.text">
        <div class="card-footer-item">
          <span>
            <slot />
          </span>
        </div>
      </footer>
    </div>
  </div>
</template>

<script>
export default {
  props: ['config']
}
</script>
