<template>
  <div class="container">
    <!-- header -->
    <div class="d-flex justify-content-between">
      <div class="h1">Posts</div>
      <div>
        <button
          class="btn btn-primary"
          :disabled="isLoadingData"
          @click="getPosts()"
        >
          {{ isLoadingData ? 'Fetchng...' : 'Refresh' }}
        </button>
      </div>
    </div>

    <!-- status -->
    <div v-if="isLoadingData" class="spinner-border" role="status">
      <span class="visually-hidden">Loading...</span>
    </div>

    <!-- posts -->
    <div
      v-if="postsToDisplay.length > 0"
      class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3"
    >
      <div v-for="p in postsToDisplay" :key="p.id" class="col">
        <PostCard :post="p" />
      </div>
    </div>

    <!-- pagination -->
    <div v-if="posts.length > 9" class="mt-4">
      <nav aria-label="...">
        <ul class="pagination">
          <li :class="`page-item ${paginationCurrentPage === 1 ? 'disabled':''}`">
            <a class="page-link" :href="`/?page=${paginationCurrentPage - 1}`">Previous</a>
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
          <li class="page-item" :class="`page-item ${paginationCurrentPage === paginationPageCount ? 'disabled':''}`">
            <a class="page-link" :href="`/?page=${paginationCurrentPage + 1}`">Next</a>
          </li>
        </ul>
      </nav>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isLoadingData: false,
      posts: [],
      postsToDisplay: [],
      paginationPageCount: 0,
      paginationCurrentPage: 1,
    }
  },
  // https://nuxtjs.org/docs/features/data-fetching/
  async fetch() {
    await this.getPosts()
  },
  async mounted() {
    if (this.posts.count === 0) await this.getPosts()
  },
  methods: {
    async getPosts() {
      this.isLoadingData = true
      this.posts = []
      const posts = await fetch('https://jsonplaceholder.typicode.com/posts')
        .then((res) => res.json())
        .finally(() => {
          this.isLoadingData = false
        })
      this.posts = posts

      // set paginated data
      const currentpage = parseInt(this.$route.query.page || 1)
      this.paginationCurrentPage = currentpage

      const startIndex = currentpage * 9 - 9
      const slicedPost = posts.slice(startIndex, startIndex + 9)
      this.postsToDisplay = slicedPost

      // set pagination links count
      const postCount = this.posts.length
      const excessCount = postCount % 9
      const pageCount = (postCount - excessCount) / 9 + (excessCount ? 1 : 0)
      this.paginationPageCount = pageCount
    },
  },
}
</script>

<style lang="scss" scoped>
.card {
  margin-bottom: 4px;
}
</style>
