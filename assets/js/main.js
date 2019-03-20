
var dataURL = 'https://jsonplaceholder.typicode.com/posts';

var app = new Vue({
    el: '#app',
    data: {
        titulo: 'Hola, Modyo',
        posts: []
    },
    mounted () {
      axios
        .get(dataURL)
        .then(response => {
            this.posts = response;
            console.log(this.posts);
        })
    }
});