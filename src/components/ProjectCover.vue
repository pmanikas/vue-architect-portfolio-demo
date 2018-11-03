<template lang="pug">
  .projectCover
    BaseVerLine(:height="'110%'" :widthy="'12px'" :top="'-9%'" :left="'0'")
    BaseVerLine(:height="'106%'" :widthy="'12px'" :top="'-3%'" :right="'0'")
    BaseHorLine(:height="'12px'" :widthy="'104%'" :top="'0'" :left="'-3%'" )
    BaseHorLine(:height="'12px'" :widthy="'105%'" :bottom="'0'" :left="'-2.5%'")
    img.filtered(:src="projectCoverImg" :alt="projectTitle")
    .projectTitle(:class="titlePosition")
    img.colored(:src="projectCoverImg" :alt="projectTitle")
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
    z-index: 10
    width: 70%
    max-width: 100%
    padding: 5px 10px 0
    transform: translateY(-50%) translateX(-50%)

    img
      width: 100%
      height: auto
      &.filtered
        filter: grayscale(1)
      &.colored
        position: absolute
        top: 5px
        left: 10px
        z-index: 0
        width: calc(100% - 20px)
        opacity: 0.2
        transition: opacity .3s ease-in-out
    .projectTitle
      position: absolute
      bottom: 0
      &.right
        right: $base-spacing * 2
      &.left
        left: $base-spacing * 2
    &:hover
      img.colored
        opacity: 1
</style>
