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
      v-if="posts.length > 0"
      class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3"
    >
      <div v-for="p in postsToDisplay" :key="p.id" class="col">
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
      isLoadingData: false,
      posts: [],
      paginationPageCount: 0,
      paginationCurrentPage: 1,
      paginationItemIndexStart: 1,
    }
  },
  computed: {
    // Return cached values until dependencies change
    postsToDisplay() {
      return this.posts.slice(parseInt(this.paginationItemIndexStart), 9)
    },
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

    const startIndex = currentpage * 9 - 9
    this.paginationItemIndexStart = startIndex
    console.log('this.startIndex:', startIndex) // john
  },
  mounted() {
    this.getPosts()
  },
  methods: {
    async getPosts() {
      this.isLoadingData = true
      this.posts = []
      this.posts = await fetch('https://jsonplaceholder.typicode.com/posts')
        .then((res) => res.json())
        .finally(() => {
          this.isLoadingData = false
        })
    },
  },
}
</script>

<style lang="scss" scoped>
.card {
  margin-bottom: 4px;
}
</style>
