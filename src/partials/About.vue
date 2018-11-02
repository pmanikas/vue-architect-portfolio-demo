<template lang="pug">
  .about.baseSection
    .row.fullHeight
      .jar-md-75.jar-md-push-25.profile-details
        .baseContent
          Avatar
          .profile-text
            p {{owner.description}}
          Steps
          BaseVerLine(:height="'90vh'" :widthy="'10px'" :bottom="'0'" :left="'0'")
          BaseVerLine(:height="'50vh'" :bottom="'0'" :right="'0'")
        
</template>

<script>
import { owner } from '@data/data'
import Avatar from '@components/Avatar'
import Steps from '@components/Steps'

export default {
  name: 'About',
  components: {
    Avatar,
    Steps
  },
  data() {
    return {
      owner: owner
    }
  }
}
</script>