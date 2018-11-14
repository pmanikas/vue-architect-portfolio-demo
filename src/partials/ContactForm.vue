<template lang="pug">
  .contactForm
    transition(name="fade" mode="out-in")
      form(v-show="formEnabled" @submit.prevent="sendMessage")
        .baseInput
          input(type="text" name="name" v-model="form.name" placeholder="Name" min="3" v-validate="'required'")
        transition(name="fade" mode="out-in")
          span.errorLine(v-if="errors.has('name')") *{{ errors.first('name') }}
        .baseInput
          input(type="text" name="email" v-model="form.email" placeholder="Email" v-validate="'required|email'")
        transition(name="fade" mode="out-in")
          span.errorLine(v-if="errors.has('email')") *{{ errors.first('email') }}
        .textArea
          textarea(name="message" v-model="form.message" placeholder="Message" v-validate="'required'")
          transition(name="fade" mode="out-in")
            span(v-if="errors.has('message')") *{{ errors.first('message') }}
        BaseButton(:text="'Send'" @click="sendMessage()" :widthy="'700px'" :disabled="errors.any()")
    transition(name="fade" mode="out-in")
      .successMessage(v-show="successMessage")
        h2 Congrats
        p You've successfully sent you message.
        .sendAgain(@click="showForm()")
          BaseButton(:text="'Send Again'" :widthy="'700px'")
    transition(name="fade" mode="out-in")
      .successMessage(v-show="errorMessage")
        h2 Ooops!
        p Something went wrong. Please try again.
        .sendAgain(@click="showForm()")
          BaseButton(:text="'Try Again'" :widthy="'700px'")
</template>

<script>
import { SendMail } from '@services/SendMail'

const mailEndpoint = process.env.NODE_ENV === 'production'
  ? 'https://kapsalas-portfolio.eu/maily/mail.php'
  : 'https://dev.kapsalas-portfolio.eu/maily/mail.php'

export default {
  name: 'ContactForm',
  
  data() {
    return {
      form: {
        name: '',
        email: '',
        message: ''
      },
      formEnabled: true,
      successMessage: false,
      errorMessage: false,
      sendMail: SendMail,
      responseStatus: 0
    }
  },
  methods: {
    sendMessage() {
      this.$validator.validateAll().then(res=>{
        if(res) {
          this.sendMail(mailEndpoint, this.form).then((response) => {
            this.responseStatus = response.status;
            this.formEnabled = false;
            if(this.responseStatus === 200){
              this.successMessage = true;
              this.reset();
            }else{
              this.errorMessage = true;
            }
          });
        }
      })
    },
    showForm() {
      this.successMessage = false;
      this.errorMessage = false;
      this.formEnabled = true;
    },
    reset(){
      this.form = {
        name: '',
        email: '',
        message: ''
      };
      this.$validator.reset(); 
    }
  }
}
</script>

<style lang="sass" scoped>
@import '~@assets/style/essentials'

.contactForm
  .baseInput
    box-sizing: border-box
    width: 700px
    max-width: 100%
    height: 50px
    padding: $base-spacing
    margin-bottom: $base-spacing
    border-style: solid
    border-width: 5px
    border-image: url(~@assets/img/border.png) 10 round
    
    input
      width: 100%
      font-weight: bold
      color: #ddd
      background: none
      border: none
    .errorLine
      display: block
      line-height: 30px
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
      border-style: solid
      border-width: 5px
      border-image: url(~@assets/img/border.png) 10 round
</style>