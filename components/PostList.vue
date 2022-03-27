<template>
  <div class="container">
    <div class="d-flex justify-content-between">
      <div class="h1">Posts</div>
      <div>
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
    <div
      v-if="posts.length > 0"
      class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3"
    >
      <div v-for="p in posts" :key="p.id" class="col">
        <div class="card">
          <div class="card-header h6">{{ p.title }}</div>
          <div class="card-body">
            <div class="card-text">
              {{ p.body }}
            </div>
            <div class="d-flex justify-content-between align-items-center mt-2">
              <div class="btn-group">
                <button type="button" class="btn btn-sm btn-outline-secondary">
                  View
                </button>
                <button type="button" class="btn btn-sm btn-outline-secondary">
                  Edit
                </button>
              </div>
              <small class="text-muted">9 mins</small>
            </div>
          </div>
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
    }
  },
  // https://nuxtjs.org/docs/features/data-fetching/
  async fetch() {
    this.posts = []
    this.posts = await fetch('https://jsonplaceholder.typicode.com/posts')
      .then((res) => res.json())
      .then((json) => json.slice(0, 10))
  },
  mounted() {
    this.$fetch()
  },
  methods: {},
}
</script>

<style lang="scss" scoped>
.card {
  margin-bottom: 4px;
}
</style>
