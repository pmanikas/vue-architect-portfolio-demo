<template lang="pug">
  .footer.baseSection
    .container-full
      .row.full-height
        .jar-md-90
          .row
            //- .jar-xs-25
            .jar-md-75.jar-md-push-25
              BaseVerLine(:height="'60vh'" :widthy="'10px'" :top="'0'" :left="'0'")
              BaseVerLine(:height="'30vh'" :top="'0'" :right="'0'")
              .baseContent
                Compass
              .footerBottom
                MapMemo
                Credits
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