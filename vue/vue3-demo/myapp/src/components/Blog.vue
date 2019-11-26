<template>
  <div>
    <div class="blogpost" :class="{'heightLighted': post.heightLighted}">
      <h2>{{post.title}}</h2>
      <p>{{post.body}}</p>
      <p class="meta">written by {{ post.author }} on {{date}}</p>
      <p v-if="post.heightLighted">This is heightLighted</p>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
export interface Post {
  title: string;
  body: string;
  author: string;
  datePosted: Date;
  heightLighted?: boolean;
}
@Component
export default class BlogPost extends Vue {
  @Prop() private post!: Post;
  get date() {
    return `${this.post.datePosted.getDate()}/${this.post.datePosted.getMonth()}/${this.post.datePosted.getFullYear()}`;
  }
}
</script>

<style scoped lang='stylus'>
.blogpost
  h2
    text-decoration underline
  .meta
    font-style italic
.heightLighted
  border 1px solid #f4d942
  background-color #fff333
</style>
