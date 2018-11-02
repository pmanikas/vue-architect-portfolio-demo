<template lang="pug">
  #app
    .background
    .container-full
      .row
        .jar-xs-100
          .router
            transition(name="slide-right" mode="out-in")
              router-view
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="sass">
  @import '~@assets/style/main'
  .baseContent
      padding: $size-content-padding 0
  .baseSection
    position: relative
    min-height: 100vh
    min-width: 1px
    // border: 1px solid transparentize(white, 0.8) // DEV
  .fullHeight, .fullHeight > div
    min-height: 100vh

  @media(min-width: $tablet)
    .baseContent
      padding: $size-content-padding $size-content-padding/3

  @media(min-width: $desktop)
    .baseContent
      padding: $size-content-padding $size-content-padding/2

  @media(min-width: $widescreen)
    .baseContent
      padding: $size-content-padding
</style>

<style lang="sass" scoped>
.background
  position: fixed
  width: 100%
  height: 100%
  background: url(~@assets/img/blackbord-bg.jpg)
  background-position: center top
</style>
