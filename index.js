let self = null;

var app = new Vue({
  el: "#app",
  data: {
    items: [],
    total: 0,
    page: 0,
    loading: false,
    pages: 0,
  },
  created(){
    self = this;
    this.getData(this.page);
  },
  methods: {
    getData(page) {
      self.page = page;
      self.loading = true;
      fetch('https://rickandmortyapi.com/api/character/?page=' + page)
        .then(function(response) {
          return response.json();
        })
        .then(function(res) {
          self.items = res.results;          
          self.total = res.info.count;
          self.pages = res.info.pages;
          self.loading = false;
        });
    }
  }
});
