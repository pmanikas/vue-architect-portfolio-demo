<template lang="pug">
  .projects
    BaseVerLine(:height="'400vh'" :top="'0vh'" :right="'0'").hidden-xs.hidden-md-off
    .projectList
      .projectItem.baseSection(v-for="(project, index) in cards" :key="index" :id="'project' + (index + 1)")
        .row
          .jar-md-25.hidden-xs.hidden-md-off
            SideSea(:check="index")
          .jar-md-75.fullHeight
            BaseVerLine.hidden-xs.hidden-md-off(:height="'100vh'" :top="'0vh'" :left="'0'" :widthy="'10px'")
            .tiles
            router-link(:to="`project/${project.uid}`")
              ProjectCover(:projectCoverImg="project.cover" :projectTitle="project.title")
            .decoration.hidden-xs.hidden-md-off
              .lightArea
              .seamanArea
              .doggymanArea
              .benchArea
              .benchmanArea
</template>

<script>
import SideSea from '@components/SideSea'
import ProjectCover from '@components/ProjectCover'
import { mapState } from 'vuex'
import store from '@store'

export default {
  name: 'Projects',
  components: {
    SideSea,
    ProjectCover,
  },
  computed: {
    ...mapState(['cards']),
  },
  created() {
    store.dispatch('getProjectCards')
  },
}
</script>

<style lang="sass" scoped>
@import '~@assets/style/essentials'

.projects
  position: relative
  overflow: hidden
  max-width: 100vw
.tiles
  overflow: visible
  background: url(~@/assets/img/grid-tile.png) repeat
  background-position: 0% 0.1%
  background-size: 7.144% 10vh
  min-height: 50vh
  @include fill
.projectItem
  position: relative
  min-height: 50vh

.projectItem:nth-of-type(1)
  .seamanArea
    position: absolute
    bottom: 15vh
    left: -43px
    z-index: 10
    width: 86px
    height: 68px
    background: url(~@assets/img/seaman.png) no-repeat
    background-size: contain
.projectItem:nth-of-type(2)
  .lightArea
    position: absolute
    bottom: 150px
    left: -240px
    width: 240px
    height: 265px
    background: url(~@assets/img/light.png)
    animation: light 2s linear infinite
  .doggymanArea
    position: absolute
    bottom: -114px
    left: 40%
    z-index: 10
    width: 216px
    height: 228px
    background: url(~@assets/img/doggyman.png) no-repeat
    background-size: contain
.projectItem:nth-of-type(3)
  .benchArea
    position: absolute
    right: $base-spacing
    bottom: $base-spacing
    z-index: 10
    width: 55px
    height: 183px
    background: url(~@assets/img/bench.png) no-repeat
    background-size: contain
.projectItem:nth-of-type(4)
  .lightArea
    position: absolute
    bottom: 150px
    left: -240px
    width: 240px
    height: 265px
    background: url(~@assets/img/light.png)
  .benchmanArea
    position: absolute
    right: $base-spacing
    bottom: $base-spacing
    z-index: 10
    width: 117px
    height: 183px
    background: url(~@assets/img/benchman.png) no-repeat
    background-size: contain

@media (min-width: $desktop)
  .projectCover
    position: absolute
    top: 45vh
    left: 50%
    width: 72.8%
    margin: 0
    transform: translateY(-50%) translateX(-50%)
</style>
