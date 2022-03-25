<script>
import { ref } from '@nuxtjs/composition-api'
/* import { ref, useFetch } from '@nuxtjs/composition-api'
import { defineComponent } from '@nuxtjs/composition-api' */

export default {
  setup() {
    const count = ref(0)

    // expose to template and other options API hooks
    return {
      count,
    }
  },

  mounted() {
    console.log(this.count) // 0
  },
}
</script>

<template>
  <button @click="count++">{{ count }}</button>
</template>
