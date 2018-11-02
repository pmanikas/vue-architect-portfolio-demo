<template lang="pug">
  .projects
    BaseVerLine(:height="'400vh'" :top="'0vh'" :right="'0'")
    .projectItem.baseSection(v-for="(project, index) in projects" :key="index" :id="'project' + (index + 1)")
      .row
        .jar-md-25.hidden-xs.hidden-md-off
          SideSea(:check="index")
        .jar-md-75
          BaseVerLine(:height="'100vh'" :top="'0vh'" :left="'0'" :widthy="'10px'")
          .tiles
          router-link(to="skills") 
            ProjectCover(:projectCoverImg="project.mainPhoto" :projectTitle="project.name" :titlePosition="project.titlePosition")


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
</style>
