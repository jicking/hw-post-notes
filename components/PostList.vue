<template>
  <div class="container">
    <div class="row">
      <div class="col-md-6"><div class="h2">Posts</div></div>
      <div class="col-md-6">
        <button
          class="btn btn-primary"
          :disabled="$fetchState.pending"
          @click="$fetch"
        >
          {{ $fetchState.pending ? 'Fetchng...' : 'Refresh' }}
        </button>
      </div>
    </div>
    <div v-if="$fetchState.pending">Fetching posts...</div>
    <div v-else-if="$fetchState.error">An error occurred :(</div>
    <div v-if="posts.length > 0">
      <div v-for="p in posts" :key="p.id" class="card">
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
      posts: []
    }
  },
  // https://nuxtjs.org/docs/features/data-fetching/
  async fetch() {
    this.posts = []
    this.posts = await fetch('https://jsonplaceholder.typicode.com/posts').then(
      (res) => res.json()
    ).then(json => json.slice(0, 10))
  },
  mounted() {
    this.$fetch()
  },
  methods: {
  },
}
</script>

<style lang="scss" scoped>
.card {
  margin-bottom: 4px;
}
</style>
