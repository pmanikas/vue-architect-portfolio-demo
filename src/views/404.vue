<template lang="pug">
  .contactPage
    .container
      .row
        .jar-xs-100
          h1 Page Not Found
      .row
        .jar-xs-100
          .bigUglyLetters 404
      .row
        .buttons
          .button
            router-link(to="/") 
              BaseButton(:text="'Go Back to Home Page'")


</template>

<script>
export default {
  name: 'NotFound',
  metaInfo: {
    title: '404 | Page not Found',
  },
}
</script>

<style lang="sass" scoped>
@import '~@assets/style/essentials'

.bigUglyLetters
  font-size: 20rem
  text-align: center
  opacity: 0.5

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
