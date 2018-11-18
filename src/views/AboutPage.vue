<template lang="pug">
  .contactPage
    .container
      .row
        .jar-xs-100
          h1 About Lefters Kapsalas
      .row
        .jar-md-60
          AboutInfo
        .jar-md-40
          ContactInfo
      br
      .row
        .jar-xs-100
          .buttons
            BaseArrowBack(:top="'0'" :left="'0'")
            .button
              router-link(to="contact") 
                BaseButton(:text="'Contact'")
            .button
              router-link(to="skills") 
                BaseButton(:text="'Skills'")
          

</template>

<script>
import AboutInfo from '@partials/AboutInfo'
import ContactInfo from '@partials/ContactInfo'

export default {
  name: 'AboutPage',
  metaInfo: {
    title: 'About'
  },
  components: {
    AboutInfo,
    ContactInfo
  }
}
</script>

<style lang="sass" scoped>
@import '~@assets/style/essentials'

.buttons
  text-align: center
.button
  margin-bottom: $base-spacing
  vertical-align: middle

@media(min-width: $desktop)
  .buttons
    text-align: left
  .button
    display: inline-block
  .button~.button
    margin-left: $base-spacing
</style>
