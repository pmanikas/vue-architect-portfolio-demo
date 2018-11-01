<template lang="pug">
  .footer.base-section
    .container-full
      .row.full-height
        .jar-xs-25
        .jar-xs-65
          .content
            .profile-text
              p {{owner.description}}

        .jar-xs-10
</template>

<script>
import { owner } from '@data/data'
export default {
  name: 'Footer',

  data() {
    return {
      owner: owner
    }
  }
}
</script>

<style lang="sass" scoped>
@import '~@assets/style/essentials'

.footer
  color: white
</style>