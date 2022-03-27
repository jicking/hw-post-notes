<template>
  <div class="card">
    <div class="card-header h6">{{ post.title }}</div>
    <div class="card-body">
      <div class="card-text">
        {{ post.body | truncateText }}
      </div>
      <div class="d-flex justify-content-start align-items-center mt-2">
        <div class="btn-group">
          <NuxtLink
            :to="`/post?id=${post.id}`"
            class="btn btn-sm btn-outline-secondary"
            >View Full Post</NuxtLink
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    post: {
      type: Object,
      required: true,
      default: () => {
        return { id: '', title: '', body: '' }
      },
    },
  },
}
</script>
