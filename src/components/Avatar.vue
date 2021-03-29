<template lang="pug">
  .avatar
    img(:src="owner.avatar")
</template>

<script>
import { owner } from '@data/data'

export default {
  name: 'Avatar',
  data() {
    return {
      owner: owner,
    }
  },
}
</script>

<style lang="sass" scoped>
@import '~@assets/style/essentials'

.avatar
  img
    width: 200px
</style>
