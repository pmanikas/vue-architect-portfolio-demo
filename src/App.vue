<template lang="pug">
  #app
    Background
    .router
      router-view
</template>

<script>
import Background from '@components/Background';
import HomePage from '@views/HomePage';
export default {
  name: 'app',
  components: {
    Background,
    HomePage
  }
}
</script>

<style lang="sass">
  @import '~@assets/style/essentials'
  @import '~@assets/style/reset'
  @import '~@assets/style/main'

  .base-section
    min-height: 100vh
</style>
