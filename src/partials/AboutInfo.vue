<template lang="pug">
  .aboutInfo
    Avatar
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
  data() {
    return {
      owner: owner
    }
  }
}
</script>