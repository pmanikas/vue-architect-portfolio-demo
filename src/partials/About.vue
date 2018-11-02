<template lang="pug">
  .about.baseSection
    .row.full-height
      .jar-md-75.jar-md-push-25.profile-details
        .baseContent
          .profile-pic
            img(:src="owner.avatar")
          .profile-text
            p {{owner.description}}
          Steps
          BaseVerLine(:height="'90vh'" :widthy="'10px'" :bottom="'0'" :left="'0'")
          BaseVerLine(:height="'50vh'" :bottom="'0'" :right="'0'")
        
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

</style>