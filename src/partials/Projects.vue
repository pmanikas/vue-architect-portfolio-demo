<template lang="pug">
  .projects
    BaseVerLine(:height="'400vh'" :top="'0vh'" :right="'0'")
    .project-item.baseSection(v-for="(project, index) in projects" :key="index" :id="'project' + (index + 1)")
      .row
        .jar-md-25.hidden-xs.hidden-md-off
          SideSea(:check="index")
        .jar-md-75
          BaseVerLine(:height="'100vh'" :top="'0vh'" :left="'0'" :widthy="'10px'")
          .tiles


</template>

<script>
import { projects } from '@data/data'
import SideSea from '@components/SideSea'

export default {
  name: 'Projects',
  components: {
    SideSea
  },
  data() {
    return {
      projects: projects
    }
  }
}
</script>

<style lang="sass" scoped>
  .projects
    position: relative
    .tiles
      position: absolute
      left: 0
      top: 0
      background: url(~@/assets/img/grid-tile.png) repeat
      background-size: auto
      width: 100%
      height: 100vh
      background-position: 0% 0.1%
      background-size: 7.144% 10vh
      overflow: visible
</style>
