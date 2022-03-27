<template>
  <div class="container">
    <!-- header -->
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

    <!-- status -->
    <div v-if="$fetchState.pending">Fetching posts...</div>
    <div v-else-if="$fetchState.error">An error occurred :(</div>

    <!-- posts -->
    <div
      v-if="posts.length > 0"
      class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3"
    >
      <div v-for="p in posts.slice(0, 9)" :key="p.id" class="col">
        <PostCard :post="p" />
      </div>
    </div>

    <!-- pagination -->
    <div v-if="posts.length > 9">
      <nav aria-label="...">
        <ul class="pagination">
          <li class="page-item disabled">
            <a class="page-link">Previous</a>
          </li>

          <li
            v-for="index in paginationPageCount"
            :key="index"
            :class="`page-item ${
              paginationCurrentPage === index ? 'active' : ''
            }`"
            :aria-current="paginationCurrentPage === index ? 'page' : ''"
          >
            <a :href="`/?page=${index}`" class="page-link">{{ index }}</a>
          </li>
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
      paginationPageCount: 0,
      paginationCurrentPage: 1,
      paginationItemIndexStart: 1,
    }
  },
  // https://nuxtjs.org/docs/features/data-fetching/
  async fetch() {
    this.posts = []
    this.posts = await fetch('https://jsonplaceholder.typicode.com/posts')
      .then((res) => res.json())
      .then((json) => json)
  },
  watch: {
    posts(val) {
      if (!val || val.length === 0) return

      const excessCount = parseInt(val.length) % 9
      const pageCount = (val.length - excessCount) / 9
      this.paginationPageCount = pageCount
    },
  },
  created() {
    const currentpage = parseInt(this.$route.query.page || 1) 
    this.paginationCurrentPage = currentpage

    const startIndex = currentpage * 9
    this.paginationItemIndexStart = startIndex 
    console.log('this.startIndex:', startIndex) // john
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
