<template lang="pug">
  .projectPage
    transition(name="slide-right")
      .container
        .row
          .jar-xs-100
            .baseContentttt
              h1.projectHeading {{project.title}}
              carousel.projectCarousel(
                :navigationEnabled="true", 
                :paginationEnabled="true", 
                :perPage="1"
                navigationPrevLabel="<"
                navigationNextLabel=">")
                slide.projectSlide
                  img(:src="project.cover || imageNotFound" :alt="project.title")
                slide.projectSlide(v-if="project.gallery !== null" v-for="(galleryItem, index) in project.gallery" :key="index")
                  img(:src="galleryItem.carouselitem[0].url || imageNotFound" :alt="`${project.title} gallery ${index + 1}`")

        .row
          .jar-xs-100
            h2 Other Projects
        carousel.projectCarousel(
          :perPageCustom="[[0, 1],[768, 2], [992, 3]]"
          :navigationEnabled="false", 
          :paginationEnabled="true")
          slide(v-for="(card, index) in relatedProjectCards" :key="index")
            .projectItem
              router-link(:to="`/project/${card.uid}`") 
                ProjectCover(:projectCoverImg="card.cover || imageNotFound" :projectTitle="card.title" :borders="true")
        .row
          .jar-xs-100
            BaseArrowBack(:top="'0'" :left="'0'")

</template>

<script>
import ProjectCover from '@components/ProjectCover'
import Prism from "prismjs"
import { mapState } from "vuex"
import store from '@store'
import imageNotFound from '@assets/img/image-not-found.jpg'

export default {
  name: 'ProjectPage',
  metaInfo () {
    return {
      title: `${this.project.title} Project`
    }
  },
  components: {
    ProjectCover
  },
  data() {
    return {
      imageNotFound: imageNotFound
    }
  },
  computed: {
    ...mapState([
      'cards',
      'project'
    ]),
    relatedProjectCards() {
      return this.$store.getters.relatedProjectCards(this.$route.params.projectId)
    }
  },
  methods: {
    refresh() {
      this.$nextTick(() => {
        Prism.highlightAll();
      });
    },
  },
    beforeRouteUpdate(to, from, next) {
    store.dispatch('getProject', to.params.projectId).then(() => {
      this.refresh();
      next()
    }).catch(() => {
      next(vm => {
        vm.$router.push({name: '404'});
      })
    });
  },
  beforeRouteEnter(to, from, next) {
    store.dispatch('getProject', to.params.projectId).then(function () {
      next(vm => {
        vm.refresh();
      })
    }).catch(() => {
      next(vm => {
        vm.$router.push({name: '404'});
      })
    });
    store.dispatch('getProjectCards').then(function () {
      next(vm => {
        vm.refresh();
      })
    });
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
    text-align: left !important
    transform: translateY(-65px)
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
