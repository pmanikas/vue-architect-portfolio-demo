<template lang="pug">
  .contactPage
    .container
      .row
        .jar-md-50
          h1 Contact
          form.contactForm(@submit.prevent="sendMessage")
            .baseInput
              input(type="text" name="name" v-model="form.name" placeholder="Name")
            .baseInput
              input(type="email" name="email" v-model="form.email" placeholder="Email")
            .textArea
              textarea(name="message" v-model="form.message" placeholder="Message")
            BaseButton(:text="'Send'" @click="sendMessage()" :widthy="'700px'")
        .jar-md-50
          .baseContent
            ContactInfo
      BaseArrowBack(:top="'0'" :left="'0'")

</template>

<script>
import ContactInfo from '@partials/ContactInfo'

export default {
  name: 'ContactPage',
  components: {
    ContactInfo
  },
  data() {
    return {
      form: {
        name: '',
        email: '',
        message: ''
      }
    }
  },
  methods: {
    sendMessage() {
      alert('Message Send');
    }
  }
}
</script>

<style lang="sass" scoped>
@import '~@assets/style/essentials'

.baseInput
  box-sizing: border-box
  width: 700px
  max-width: 100%
  height: 50px
  padding: $base-spacing
  margin-bottom: $base-spacing
  border: 5px solid transparent
  border-image: url(~@assets/img/border.png) 10 round
  
  input
    width: 100%
    font-weight: bold
    color: #ddd
    background: none
    border: none
.textArea
  width: 700px
  max-width: 100%
  margin-bottom: $base-spacing
  textarea
    box-sizing: border-box
    width: 100% !important
    max-width: 100%
    height: 250px
    max-height: 50vh
    padding: $base-spacing
    font-weight: bold
    color: #ddd
    background: none
    border: 5px solid transparent
    border-image: url(~@assets/img/border.png) 10 round
</style>
