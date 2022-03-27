<template>
  <div class="container">
    <div class="row">
      <div class="col-md-6"><div class="h2">Posts</div></div>
      <div class="col-md-6">
        <button
          class="btn btn-primary"
          :disabled="isFetchingPosts"
          @click="refreshPosts()"
        >
          {{ isFetchingPosts ? 'Fetchng...' : 'Refresh' }}
        </button>

        <button @click="clearPosts()">clear</button>
      </div>
    </div>
    <div v-if="posts.length > 0">
      <div  v-for="p in posts" :key="p.id" class="card">
        <div class="card-header">{{ p.title }}</div>
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
  mounted() {
    this.refreshPosts()
  },
  methods: {
    async refreshPosts() {
      this.isFetchingPosts = true
      this.posts = []

      try {
        const response = await this.$axios.$get(
          'https://jsonplaceholder.typicode.com/posts'
        )
        this.posts = response
      } catch (error) {
      } finally {
        this.isFetchingPosts = false
      }
    },
    clearPosts() {
      this.posts = []
    }
  },
}
</script>

<style lang="scss" scoped>
.card {
  margin-bottom: 4px;
}
</style>
