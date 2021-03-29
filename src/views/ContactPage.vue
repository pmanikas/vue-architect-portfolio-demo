<template lang="pug">
  .contactPage
    .container
      .row
        .jar-md-50
          h1 Contact
          ContactForm
        .jar-md-50
          .baseContent
            ContactInfo
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
import ContactForm from '@partials/ContactForm'
import ContactInfo from '@partials/ContactInfo'
import Compass from '@components/Compass'
import MapMemo from '@components/MapMemo'
import Credits from '@components/Credits'
import BottomSmudge from '@components/BottomSmudge'

export default {
  name: 'ContactPage',
  metaInfo: {
    title: 'Contact',
  },
  components: {
    ContactForm,
    ContactInfo,
    Compass,
    MapMemo,
    Credits,
    BottomSmudge,
  },
}
</script>
