<template lang="pug">
  #app
    Background
    .container-full
      .row
        .jar-xs-100
          Header
          MainMenu
      .row
        .jar-xs-100
          .router
            transition(name="component-fade" mode="out-in")
              router-view
</template>

<script>
import Background from '@components/Background'
import Header from '@partials/Header'
import MainMenu from '@components/MainMenu'

export default {
  name: 'App',
  metaInfo: {
    title: '[]',
    titleTemplate: '%s | Architect Portfolio | Lefteris Kapsalas',
  },
  components: {
    Background,
    Header,
    MainMenu,
  },
}
</script>

<style lang="sass">
@import '~@assets/style/main'
body
  overflow-x: hidden
  overflow-y: scroll !important
.baseContent
  padding: $size-content-padding $base-spacing
.baseSection
  position: relative
  min-width: 1px

@media(min-width: $tablet)
  .baseContent
    padding: $size-content-padding $size-content-padding/3

@media(min-width: $desktop)
  .baseContent
    padding: $size-content-padding $size-content-padding/2
  .baseSection
    min-height: 100vh
  .fullHeight, .fullHeight > div
    min-height: 100vh

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
