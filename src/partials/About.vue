<template lang="pug">
  .about.base-section
    .container-full
      .row.full-height
        .jar-xs-25
        .jar-xs-65.profile-details
          .content
            .profile-pic
              img(:src="owner.avatar")
            .profile-text
              p {{owner.description}}
            Steps
            BaseVerLine(:height="'90vh'" :width="'10px'" :bottom="'0'" :left="'0'")
            BaseVerLine(:height="'50vh'" :bottom="'0'" :right="'0'")
        .jar-xs-10
          .grass
</template>

<script>
import { owner } from '@data/data'
import Steps from '@components/Steps'
export default {
  name: 'About',
  components: {
    Steps
  },
  data() {
    return {
      owner: owner
    }
  }
}
</script>

<style lang="sass" scoped>
@import '~@assets/style/essentials'

.profile-details
  img
    width: 200px
.grass
  position: absolute
  right: 0
  top: 40vh
  height: 510vh
  width: 100%
  background: url(~@assets/img/grass.png)
  background-size: 100%
</style>