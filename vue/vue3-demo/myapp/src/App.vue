<template>
  <div id="app">
    <button @click="toggle">Show/Hide heightLighted post</button>
    <BlogPost
      v-for="(blogPost, index) in visibleBlogPosts"
      :key="index"
      :post="blogPost"></BlogPost>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import BlogPost, { Post } from './components/Blog.vue';
import { AxiosResponse } from 'axios';

@Component({
  components: {
    BlogPost,
  },
})
export default class App extends Vue {
  private blogPosts: Post[] = [{
    title: 'My first blogpost ever!',
    body: 'Lorem ipsum dolor sit amet.',
    author: 'Elke',
    datePosted: new Date(2019, 1, 18),
  }, {
    title: 'Look I am blogging!',
    body: 'Hurray for me, this is my second post!',
    author: 'Elke',
    datePosted: new Date(2019, 1, 19),
  }, {
    title: 'Another one?!',
    body: 'Another one!',
    author: 'Elke',
    datePosted: new Date(2019, 1, 20),
    heightLighted: true,
  },
  ];
  private showHeightLighted: boolean = true;
  get visibleBlogPosts() {
    return this.blogPosts.filter((post: Post) =>
    post.heightLighted === undefined || post.heightLighted === this.showHeightLighted);
  }
  public toggle() {
    this.showHeightLighted = !this.showHeightLighted;
  }
  public created() {
    this.$http.get('./request.json').then((res: AxiosResponse) => {
      this.blogPosts = res.data.blogposts.map(({title, body, datePosted, author}: any) =>
      ({title, body, datePosted: new Date(datePosted), author}));
    });
  }
}
</script>

<style lang="stylus">
#app
  font-family 'Avenir', Helvetica, Arial, sans-serif
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  text-align center
  color #2c3e50
  margin-top 60px
</style>
