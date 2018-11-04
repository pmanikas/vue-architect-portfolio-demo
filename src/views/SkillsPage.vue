<template lang="pug">
  .skillsPage
    .container
      .row
        .jar-xs-100
          .row
            .jar-xs100
              h1 Skills
          .row.basicDetails
            .jar-md-60
              h2 {{ owner.name }}
              Avatar
            .jar-md-40
              ContactInfo
          .row.education
            .jar-xs-100
              h2 Education
              .row(v-for="(school, index) in cv.education" :key="index")
                .jar-md-25
                  h3 {{ school.date }}
                .jar-md-50
                  h4 {{ school.name }}, {{ school.area}}
                  p(v-html="school.description")
          .row.jobExperience
            .jar-xs-100
              h2 Job Experience
              .row(v-for="(job, index) in cv.jobs" :key="index")
                .jar-md-25
                  h3 {{ job.date }}
                .jar-md-50
                  h4 {{ job.name }}, {{ job.area}}
                  ul
                    li(v-for="(item, index) in job.description" :key="index") {{item}}
          .row.keySkills
            .jar-xs-100
              .row
                .jar-xs-100
                  h2 Key Skills
              .row
                .jar-md-50.jar-md-push-25
                  ul
                    li(v-for="(skill, index) in cv.keySkills" :key="index") {{ skill }}
          .row.skillsSummary
            .jar-xs-100
              .row
                .jar-xs-100
                  h2 Skills Summary
              .row(v-for="(skillType, index) in cv.skillsSum" :key="index")
                .jar-md-25
                  h3 {{ skillType.name }}
                .jar-md-40
                  ul
                    li(v-for="(skill, index) in skillType.list" :key="index") {{ skill.skill }}
                      span {{ skill.level }}
          BaseArrowBack(:top="'0'" :left="'0'")                
</template>

<script>
import {owner, cv} from '@data/data'
import Avatar from '@components/Avatar'
import ContactInfo from '@partials/ContactInfo'

export default {
  name: 'SkillsPage',
  components: {
    Avatar,
    ContactInfo
  },
  data() {
    return {
      owner: owner,
      cv: cv
    }
  }
}
</script>

<style lang="sass" scoped>
@import '~@assets/style/essentials'

.skillsPage
  position: relative
  .skillsSummary
    li
      span
        float: right
        padding-left: $base-spacing
</style>

