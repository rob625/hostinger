new Vue({
    el: '#app',
    created() {
        this.fetchData();
    },
    data: {
        posts: []
    },
    methods: {
        fetchData() {
        axios.get('https://jsonplaceholder.typicode.com/posts').then(response => {
            this.posts = response.data;
            });
        }
    }
});
