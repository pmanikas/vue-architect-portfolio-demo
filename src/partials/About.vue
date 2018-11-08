<template lang="pug">
  .about.baseSection
    Smudge
    .row.fullHeight
      .jar-md-75.jar-md-push-25.profile-details
        .baseContent
          .profileInfo(v-inViewport.once.fully)
            AboutInfo
          Steps
          BaseVerLine(:height="'90vh'" :widthy="'10px'" :bottom="'0'" :left="'0'")
          BaseVerLine(:height="'50vh'" :bottom="'0'" :right="'0'")
        
</template>

<script>
import AboutInfo from '@partials/AboutInfo'
import Smudge from '@components/Smudge'
import Steps from '@components/Steps'
import inViewportDirective from 'vue-in-viewport-directive'

export default {
  name: 'About',
  components: {
    AboutInfo,
    Smudge,
    Steps
  },
  directives: {
    inViewport: inViewportDirective
  }
}
</script>

<style lang="sass" scoped>
.profileInfo
  transition: transform 1s ease-in-out
  transform: scale(0)
  &.fully-in-viewport
    transform: scale(1)
</style>