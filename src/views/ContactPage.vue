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
      BaseArrowBack(:top="'0'" :left="'0'")

</template>

<script>
import ContactForm from '@partials/ContactForm'
import ContactInfo from '@partials/ContactInfo'

export default {
  name: 'ContactPage',
  metaInfo: {
    title: 'Contact'
  },
  components: {
    ContactForm,
    ContactInfo
  }
}
</script>