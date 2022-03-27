<template>
  <div class="page-container d-flex flex-column">
    <nav class="navbar navbar-expand-md navbar-dark bg-dark mb-4">
      <div class="container">
        <a class="navbar-brand" href="#"><SiteLogo /></a>
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
            <li class="nav-item active">
              <NuxtLink to="/" class="nav-link" href="#">Home</NuxtLink>
            </li>
            <li class="nav-item">
              <NuxtLink to="/about" class="nav-link" href="#">About</NuxtLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <main class="main-container mb-2">
      <Nuxt />
    </main>
    <footer class="footer">
      <div class="container">
        2022 <span class="text-muted"><SiteLogo /></span> a demo app crafted by <a href="https://github.com/jicking" target="_blank">@jicking</a>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
    name: "DefaultLayout"
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
