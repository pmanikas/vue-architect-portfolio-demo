<template lang="pug">
  .footer.base-section
    .container-full
      .row.full-height
        .jar-xs-25
        .jar-xs-65
          BaseVerLine(:height="'60vh'" :widthy="'10px'" :top="'0'" :left="'0'")
          BaseVerLine(:height="'30vh'" :top="'0'" :right="'0'")
          .content
            Compass
          .footerBottom
            MapMemo
            Credits
        .jar-xs-10
</template>

<script>
import Compass from '@components/Compass'
import MapMemo from '@components/MapMemo'
import Credits from '@components/Credits'
export default {
  name: 'Footer',
  components: {
    Compass,
    MapMemo,
    Credits
  }
}
</script>

<style lang="sass" scoped>
@import '~@assets/style/essentials'

.footer
  color: white
  .footerBottom
    position: relative
    top: 170px
</style>