<template>
  <div class="container">
    <div class="h2">Posts</div>
    <div>
      <button
        class="btn btn-primary"
        :disabled="isFetchingPosts"
        @click="refreshPosts()"
      >
        {{ isFetchingPosts ? 'Fetchng...' : 'Refresh' }}
      </button>
    </div>
    <div>
      <div v-for="p in posts" :key="p.id" class="card">
        <div class="card-header">{{ p.title}}</div>
        <div class="card-body">
          <p class="card-text">
            {{ p.body }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      posts: [],
      isFetchingPosts: false,
    }
  },
  methods: {
    async refreshPosts() {
      this.isFetchingPosts = true

      const ip = await this.$axios.$get(
        'https://jsonplaceholder.typicode.com/posts'
      )
      this.posts = ip

      this.isFetchingPosts = false
    },
  },
}
</script>

<style lang="scss" scoped>
.card {
  margin-bottom: 4px;
}
</style>
