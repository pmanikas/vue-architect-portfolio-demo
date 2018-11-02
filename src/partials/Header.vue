<template lang="pug">
  .row
    .jar-xs-12
      .header.baseSection
        .headerButton
          .headerButtonInner
            img(src="@assets/img/home-button.png")
        .smudge
          img(src="@assets/img/smudge.png")
</template>

<script>
export default {
  name: 'Header'
}
</script>

<style lang="sass" scoped>
@import '~@assets/style/essentials'

.header
  .headerButton
    @include center

    .headerButtonInner
      @include animation(heartbeat, 1.5s, linear, forwards, 3, 1s)
  
  .smudge
    position: absolute
    right: 0
    bottom: 0
    transform: translateY(50%)
    opacity: 0.3
    img
      width: 550px
</style>