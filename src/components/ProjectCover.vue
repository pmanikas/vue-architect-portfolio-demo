<template lang="pug">
  .projectCover
    BaseVerLine(:height="'110%'" :widthy="'12px'" :top="'-9%'" :left="'0'")
    BaseVerLine(:height="'106%'" :widthy="'12px'" :top="'-3%'" :right="'0'")
    BaseHorLine(:height="'12px'" :widthy="'104%'" :top="'0'" :left="'-3%'" )
    BaseHorLine(:height="'12px'" :widthy="'105%'" :bottom="'0'" :left="'-2.5%'")
    img(:src="projectCoverImg")
    .projectTitle(:class="titlePosition")
      p {{ projectTitle }}
</template>

<script>
  import imageNotFound from '@assets/img/image-not-found.jpg'
  export default {
    name: 'ProjectCover',
    props: {
      projectCoverImg: {
        type: String,
        default: imageNotFound
      },
      projectTitle: {
        type: String,
        default: 'Project'
      },
      titlePosition: {
        type: String,
        default: 'right'
      }
    }
  }
</script>

<style lang="sass" scoped>
  @import '~@assets/style/essentials'

  .projectCover
    position: absolute
    top: 45vh
    left: 50%
    width: 70%
    max-width: 100%
    transform: translateY(-50%) translateX(-50%)
    z-index: 10
    padding: 5px 10px 0

    img
      width: 100%
      height: auto
    .projectTitle
      position: absolute
      bottom: 0
      &.right
        right: $base-spacing*2
      &.left
        left: $base-spacing*2
</style>
