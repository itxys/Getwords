<template>
  <div id="app">
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <a class="navbar-brand" href="#">GetWords</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item active">
            <a class="nav-link" href="#">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">About</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
    <div class="container-fluid mt-3">
      <div class="row">
        <div class="col-3">
          <div class="card">
            <div class="card-header">
              <h5 class="card-title">Categories</h5>
            </div>
            <div class="card-body">
              <div class="list-group">
                <router-link tag="a" class="list-group-item list-group-item-action" to="/">All</router-link>
                <router-link tag="a" class="list-group-item list-group-item-action" v-for="category in categories" :to="'/categories/' + category.name.toLowerCase()" :key="category.id">{{ category.name }}</router-link>
              </div>
            </div>
          </div>
        </div>
        <div class="col-9">
          <router-view></router-view>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      categories: []
    }
  },
  created() {
    this.fetchCategories();
  },
  methods: {
    fetchCategories() {
      axios.get('/api/categories')
        .then(response => {
          this.categories = response.data;
        })
        .catch(error => console.log(error));
    }
  }
}
</script>

<style>
</style>
