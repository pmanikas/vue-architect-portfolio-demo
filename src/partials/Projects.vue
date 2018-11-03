<template lang="pug">
  .projects
    BaseVerLine(:height="'400vh'" :top="'0vh'" :right="'0'")
    .projectItem.baseSection(v-for="(project, index) in projects" :key="index" :id="'project' + (index + 1)" :class="{ [project.decoration] : project.decoration }")
      .row
        .jar-md-25.hidden-xs.hidden-md-off
          SideSea(:check="index")
        .jar-md-75.fullHeight
          BaseVerLine(:height="'100vh'" :top="'0vh'" :left="'0'" :widthy="'10px'")
          .tiles
          router-link(to="skills") 
            ProjectCover(:projectCoverImg="project.mainPhoto" :projectTitle="project.name" :titlePosition="project.titlePosition")
          .decoration.hidden-xs.hidden-md-off
            .lightArea
            .seamanArea
            .doggymanArea
            .benchArea
            .benchmanArea
</template>

<script>
import { projects } from '@data/data'
import SideSea from '@components/SideSea'
import ProjectCover from '@components/ProjectCover'

export default {
  name: 'Projects',
  components: {
    SideSea,
    ProjectCover
  },
  data() {
    return {
      projects: projects
    }
  }
}
</script>

<style lang="sass" scoped>
  @import '~@assets/style/essentials'

  .projects
    position: relative
    .tiles
      position: absolute
      top: 0
      left: 0
      width: 100%
      height: 100vh
      overflow: visible
      background: url(~@/assets/img/grid-tile.png) repeat
      background-position: 0% 0.1%
      background-size: 7.144% 10vh
    .projectItem
      position: relative
      &.light
        .lightArea
          position: absolute
          bottom: 150px
          left: -240px
          width: 240px
          height: 265px
          background: url(~@assets/img/light.png)
      &.brokenLight
        .lightArea
          animation: light 2s linear infinite
      &.seaman
        .seamanArea
          position: absolute
          bottom: 100px
          left: -43px
          z-index: 10
          width: 86px
          height: 68px
          background: url(~@assets/img/seaman.png) no-repeat
          background-size: contain
      &.doggyman
        .doggymanArea
          position: absolute
          bottom: -114px
          left: 40%
          z-index: 10
          width: 216px
          height: 228px
          background: url(~@assets/img/doggyman.png) no-repeat
          background-size: contain
      &.bench
        .benchArea
          position: absolute
          right: $base-spacing
          bottom: $base-spacing
          z-index: 10
          width: 55px
          height: 183px
          background: url(~@assets/img/bench.png) no-repeat
          background-size: contain
      &.benchman
        .benchmanArea
          position: absolute
          right: $base-spacing
          bottom: $base-spacing
          z-index: 10
          width: 117px
          height: 183px
          background: url(~@assets/img/benchman.png) no-repeat
          background-size: contain
</style>
