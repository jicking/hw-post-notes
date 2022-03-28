<template>
  <div class="container">
    <article v-if="post">
      <h1>{{ post.title }}</h1>
      <p>
        {{ post.body }}
      </p>
    </article>
    <div v-else class="spinner-border" role="status">
      <span class="visually-hidden">Loading...</span>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      post: undefined,
    }
  },
  // https://nuxtjs.org/docs/features/data-fetching/
  async fetch() {
    const postId = parseInt(this.$route.query.id || 1)
    this.post = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${postId}`
    ).then((res) => res.json())
  },
}
</script>

<style></style>
