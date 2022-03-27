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
        <PostCard :post="p" />
      </div>
    </div>
    <div v-if="posts.length > 9">
      <nav aria-label="...">
        <ul class="pagination">
          <li class="page-item disabled">
            <a class="page-link">Previous</a>
          </li>
          <li class="page-item"><a class="page-link" href="#">1</a></li>
          <li class="page-item active" aria-current="page">
            <a class="page-link" href="#">2</a>
          </li>
          <li class="page-item"><a class="page-link" href="#">3</a></li>
          <li class="page-item">
            <a class="page-link" href="#">Next</a>
          </li>
        </ul>
      </nav>
    </div>
  </div>
</template>

<script>
// const maxPostPerPage = 9

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
      .then((json) => json.slice(0, 20))
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
