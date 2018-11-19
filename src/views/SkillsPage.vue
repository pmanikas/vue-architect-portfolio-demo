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
              h2.skillHeading {{ owner.name }}
              Avatar
            .jar-md-40
              ContactInfo
          .row.education
            .jar-xs-100
              h2.skillHeading Education
              .row(v-for="(school, index) in cv.education" :key="index")
                .jar-md-25
                  h3 {{ school.date }}
                .jar-md-50
                  h4 {{ school.name }}, {{ school.area}}
                  p(v-html="school.description")
          hr.chalkyHr
          .row.jobExperience
            .jar-xs-100
              h2.skillHeading Job Experience
              .row(v-for="(job, index) in cv.jobs" :key="index")
                .jar-md-25
                  h3 {{ job.date }}
                .jar-md-50
                  h4 {{ job.name }}, {{ job.area}}
                  ul
                    li(v-for="(item, index) in job.description" :key="index") {{item}}
          hr.chalkyHr
          .row.keySkills
            .jar-xs-100
              .row
                .jar-md-25
                  h2.skillHeading Key Skills
                .jar-md-50
                  ul
                    li(v-for="(skill, index) in cv.keySkills" :key="index") {{ skill }}
          hr.chalkyHr
          .row.skillsSummary
            .jar-xs-100
              .row
                .jar-xs-100
                  h2.skillHeading Skills Summary
              .row(v-for="(skillType, index) in cv.skillsSum" :key="index")
                .jar-md-25
                  h3 {{ skillType.name }}
                .jar-md-40
                  ul
                    li(v-for="(skill, index) in skillType.list" :key="index") {{ skill.skill }}
                      span {{ skill.level }}
          hr.chalkyHr
          .row.recognition
            .jar-xs-100
              .row
                .jar-xs-100
                  h2.skillHeading Recognition
              .row(v-for="(publish, index) in cv.recognition" :key="index")
                .jar-md-25
                  h3 {{ publish.date }}
                .jar-md-40
                  h4 {{ publish.title }}
                  ul
                    li(v-for="(link, index) in publish.links" :key="index")
                      a(:href="link" target="_blank") Link {{ index + 1 }}
          hr.chalkyHr
          .row.languages
            .jar-md-25
              h2.skillHeading Language
            .jar-md-75
              .row
                .jar-md-33(v-for="(language, index) in cv.languages" :key="index")
                  p.languageName {{ language.name }}
                  p.languageLevel {{ language.level }}
          hr.chalkyHr
          .row.others
            .jar-md-25
              h2.skillHeading Others
            .jar-md-75
              p.otherTitle(v-for="(other, index) in cv.others" :key="index")
                | {{ other }}
      .row
        .jar-xs-50
          BaseArrowBack(:top="'0'" :left="'0'")
        .jar-xs-50
          .CompassArea(style="text-align: right")
            Compass
      br
      br
      .row
        .jar-xs-100
          MapMemo
          Credits
          BottomSmudge               
</template>

<script>
import {owner, cv} from '@data/data'
import Avatar from '@components/Avatar'
import ContactInfo from '@partials/ContactInfo'
import Compass from '@components/Compass'
import MapMemo from '@components/MapMemo'
import Credits from '@components/Credits'
import BottomSmudge from '@components/BottomSmudge'

export default {
  name: 'SkillsPage',
  components: {
    Avatar,
    ContactInfo,
    Compass,
    MapMemo,
    Credits,
    BottomSmudge
  },
  metaInfo: {
    title: 'Skills'
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
  .skillHeading
    text-transform: uppercase
  .skillsSummary
    li
      span
        float: right
        padding-left: $base-spacing
  .languages
    .languageName
      display: inline-block
    .languageLevel
      display: inline-block
    .languageName~.languageLevel
      &::before
        padding: 0 $base-spacing
        content: '->'
  

  @media(min-width: $desktop)
    .languages
      .languageName
        display: block
      .languageLevel
        display: block
      .languageName~.languageLevel
        &::before
          display: none
    
    .others
      .otherTitle
        display: inline-block
      .otherTitle~.otherTitle
        &::before
          padding: 0 $base-spacing
          content: '|'

</style>

