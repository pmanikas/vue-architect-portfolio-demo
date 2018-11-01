<template lang="pug">
  #app
    Background
    .router
      router-view
    Footer
</template>

<script>
import Background from '@components/Background';
import Footer from '@partials/Footer';
export default {
  name: 'app',
  components: {
    Background,
    Footer
  }
}
</script>


<style lang="sass">
  @import '~@assets/style/main'
  @font-face
    font-family: 'martha'
    src: url('~@assets/fonts/martha.ttf')

  body
    color: $mainFontColor
    // min-height: 700vh
    p
      font-family: 'martha', Times, serif
      font-size: 2rem
      line-height: 3rem
    a
      text-decoration: none
      color: $mainFontColor
  .content
    padding: $size-content-padding
    // border-left: 1px solid transparentize(white, 0.8)
    // border-right: 1px solid transparentize(white, 0.8)
  .base-section
    position: relative
    min-height: 100vh
    border: 1px solid transparentize(white, 0.8)
  .full-height, .full-height > div
    height: 100vh
</style>
