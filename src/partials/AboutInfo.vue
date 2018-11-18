<template lang="pug">
  .aboutInfo
    Avatar
    h1(v-if="heading") {{ heading }}
    .profileText
      p {{owner.description}}
        
</template>

<script>
import { owner } from '@data/data'
import Avatar from '@components/Avatar'

export default {
  name: 'AboutInfo',
  components: {
    Avatar
  },
  props: {
    heading: {
      type: String,
      default: null
    }
  },
  data() {
    return {
      owner: owner
    }
  }
}
</script>