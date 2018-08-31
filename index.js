var app = new Vue({
  el: "#app",
  data: {
    items: [],
    total: 0,
    page: 1,
    loading: false,
    pages: 0,
  },
  created(){    
    this.getData(this.page);
  },
  methods: {
    getData(page) {
      this.page = page;
      this.loading = true;
      fetch('https://rickandmortyapi.com/api/character/?page=' + page)
        .then(response => {
          return response.json();
        })
        .then(res => {
          this.items = res.results;          
          this.total = res.info.count;
          this.pages = res.info.pages;
          setTimeout(() => {
            this.loading = false;
          }, 1500);          
        });
    }
  }
});
