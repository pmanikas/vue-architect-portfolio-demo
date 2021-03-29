<template lang="pug">
  .about.baseSection
    Smudge
    .row.fullHeight
      .jar-md-75.jar-md-push-25.profile-details
        .baseContent
          .profileInfo
            AboutInfo(:heading="'Lefteris Kapsalas Portfolio'")
          Steps
          BaseVerLine.hidden-xs.hidden-md-off(:height="'90vh'" :widthy="'10px'" :bottom="'0'" :left="'0'")
          BaseVerLine.hidden-xs.hidden-md-off(:height="'50vh'" :bottom="'0'" :right="'0'")
        
</template>

<script>
import AboutInfo from '@partials/AboutInfo'
import Smudge from '@components/Smudge'
import Steps from '@components/Steps'

export default {
  name: 'About',
  components: {
    AboutInfo,
    Smudge,
    Steps,
  },
}
</script>
