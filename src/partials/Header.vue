<template lang="pug">
  .row
    .jar-xs-12
      .header.baseSection
        .headerButton
          .headerButtonInner
            img(src="@assets/img/home-button.png")
        Smudge
</template>

<script>
import Smudge from '@components/Smudge'

export default {
  name: 'Header',
  components: {
    Smudge
  }
}
</script>

<style lang="sass" scoped>
@import '~@assets/style/essentials'

.header
  .headerButton
    @include center

    .headerButtonInner
      @include animation(heartbeat, 1.5s, linear, forwards, 3, 1s)
</style>