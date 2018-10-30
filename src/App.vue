<template lang="pug">
  #app
    .router
      router-view
</template>

<script>
import HomePage from '@views/HomePage';
export default {
  name: 'app',
  components: {
    HomePage
  }
}
</script>

<style lang="sass">
  @import '~@assets/style/reset'

  #app
    background: url(~@assets/img/blackbord-bg.jpg)
  .base-section
    min-height: 100vh
</style>
