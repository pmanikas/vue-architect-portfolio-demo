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
            br
            BaseArrowBack(:top="'0'" :left="'0'")

</template>

<script>
import { projects } from '@data/data'

export default {
  name: 'ProjectPage',
  metaInfo () {
    return {
      title: `${this.project.name} Project`
    }
  },
  data() {
    return {
      project: {
        name: String,
        gallery: Object
      }
    }
  },
  mounted() {
    this.project = projects.find(project => project.id === this.$route.params.projectId);
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
</style>
