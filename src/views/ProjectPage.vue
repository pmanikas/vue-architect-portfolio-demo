<template lang="pug">
  .projectPage
    .container
      .row
        .jar-xs-100
          .baseContent
            h1.projectHeading {{ project.name }}
            carousel.projectCarousel(
              :navigationEnabled="true", 
              :paginationEnabled="true", 
              :perPage="1"
              navigationPrevLabel="<"
              navigationNextLabel=">")
              slide.projectSlide
                img(:src="project.mainPhoto")
              slide.projectSlide
                img(:src="project.mainPhoto")
              slide.projectSlide
                img(:src="project.mainPhoto")
      .row
        .jar-xs-100
          h2 Other Projects
      .row.paddingRow
        .jar-md-33(v-for="(project, index) in projects" v-if="project.id !== $route.params.projectId")
          .projectItem
            router-link(:to="`/project/${project.id}`") 
              ProjectCover(:projectCoverImg="project.mainPhoto" :projectTitle="project.name" :borders="true")
      .row
        .jar-xs-100
          BaseArrowBack(:top="'0'" :left="'0'")

</template>

<script>
import { projects } from '@data/data'
import ProjectCover from '@components/ProjectCover'

export default {
  name: 'ProjectPage',
  metaInfo () {
    return {
      title: `${this.project.name} Project`
    }
  },
  components: {
    ProjectCover
  },
  data() {
    return {
      project: {
        name: String,
        gallery: Object
      },
      projects: projects
    }
  },
  watch: {
    "$route.params.projectId"() {
      this.loadProject();
    }
  },
  mounted() {
    this.loadProject();
  },
  methods: {
    loadProject() {
      this.project = projects.find(project => project.id === this.$route.params.projectId);
    }
  }
}
</script>

<style lang="sass">
@import '~@assets/style/essentials'

.projectCarousel
  .VueCarousel-navigation-button
    font-family: 'martha', serif !important
    font-size: 5rem
    color: white !important
    transform: translateY(-50%) !important
  .VueCarousel-pagination
    text-align: right !important
    .VueCarousel-dot
      width: 15px
      height: 15px
      padding: 0 !important
      margin: ($base-spacing * 2) 0 0 $base-spacing
      border: 1px solid white
      button
        display: none !important
      &.VueCarousel-dot--active
        background: url(~@assets/img/active-box.png) no-repeat !important
        background-position: center
        background-size: cover      
</style>

<style lang="sass" scoped>
.projectPage
  .projectHeading
    margin-top: 0
  .projectCarousel
    .projectSlide
      img
        width: 100%
        
.projectItem
  height: 250px
  .projectCover
    position: relative
</style>
