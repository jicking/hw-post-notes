<template>
  <div class="page-container d-flex flex-column">
    <nav class="navbar navbar-expand-md navbar-dark bg-dark mb-4">
      <div class="container">
        <NuxtLink to="/" class="navbar-brand"><SiteLogo /></NuxtLink>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarCollapse"
          aria-controls="navbarCollapse"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div id="navbarCollapse" class="collapse navbar-collapse">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item">
              <NuxtLink to="/" class="nav-link">Home</NuxtLink>
            </li>
            <li class="nav-item">
              <NuxtLink to="/about" class="nav-link">About</NuxtLink>
            </li>
          </ul>

          <a class="btn btn-success ms-auto" href="https://github.com/jicking/hw-post-notes" target="_blank"><i class="bi bi-github ms-auto"></i> Check Code</a>
        </div>
      </div>
    </nav>
    <main class="main-container mb-2">
      <Nuxt />
    </main>
    <footer class="footer">
      <div class="container">
        © 2022 <span class="text-muted"><SiteLogo /></span> is crafted
        by
        <a href="https://github.com/jicking" target="_blank">@jicking</a>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'DefaultLayout',
}
</script>

<style scoped>
body {
  overflow: visible;
}
.page-container {
  min-height: 100vh;
}
.main-container {
  flex: 1;
}
.footer {
  height: 60px;
  line-height: 60px; /* Vertically center the text there */
  background-color: #f5f5f5;
}
</style>
