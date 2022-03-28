<template>
  <PostList />
</template>

<script>
import PostList from '~/components/PostList.vue'
export default {
  name: 'IndexPage',
  components: { PostList },
  layout: 'defaultLayout',
}
</script>
