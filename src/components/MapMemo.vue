<template lang="pug">
  .mapMemo
    .container-full
      .row
        .jar-md-50
          .row
            .jar-xs-50
              .row
                .jar-xs-50
                  .mapMemoScale
                    span
                    span
                    span
                    span
                .jar-xs-50
                  BaseVerLine(:height="'230%'" :top="'-10%'" :left="'0'")
                  .cvBtn
                    router-link(to="skills") 
                      p CV
            .jar-xs-50
              BaseVerLine(:height="'250%'" :top="'-10%'" :left="'0'")
              .contactBtn
                router-link(to="contact") 
                  p CONTACT
        .jar-md-50.hidden-xs.hidden-md-off
          BaseVerLine(:height="'220%'" :top="'-10%'" :left="'0'")
          .doNotPress(@click="$emit('mess')")
            p DO NOT PRESS
    .outerLines
      BaseHorLine(:widthy="'104%'" :top="'0'" :left="'-2%'")
      BaseHorLine(:widthy="'102%'" :top="'calc(50% - 3px)'" :left="'-1%'")
      BaseHorLine(:widthy="'103%'" :bottom="'0'" :left="'-1.8%'")
      BaseVerLine(:height="'110%'" :top="'-5%'" :left="'0'")
      BaseVerLine(:height="'130%'" :top="'-22%'" :right="'0'")
</template>

<script>
export default {
  name: 'MapMemo',
  methods: {
    mess() {
      return ""
    }
  }
}
</script>

<style lang="sass" scoped>
  @import '~@assets/style/essentials'

  .mapMemo
    position: relative
    height: 62px
    text-align: center
    p
      padding: 0
      margin: 0
      font-weight: bold
      line-height: 33px
      color: #222
      text-shadow: 1px 1px 0 #222, -1px -1px 0 #222
      letter-spacing: 5px
      word-spacing: 10px
    
    .mapMemoScale
      position: relative
      top: 5px
      width: 100%
      height: 52px
      opacity: 0.6
      span
        display: inline-block
        width: 25%
        height: 50%
        background-image: url(~@assets/img/smudge.png)
        background-position: 60% 50%
      span:nth-of-type(2n+1)
        transform: translateY(100%)

    .doNotPress, .cvBtn
      transform: translateY(100%)   

    .doNotPress, .contactBtn, .cvBtn
      position: relative
      top: 4px
      height: 28px
      overflow: hidden
      cursor: pointer
      background-image: url(~@assets/img/smudge.png)
      background-position: 60% 50%
      background-size: 133% auto
      opacity: 0.6
      transition: opacity .3s ease-in-out
      &:hover
        opacity: 1
</style>