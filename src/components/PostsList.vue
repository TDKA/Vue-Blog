<template>
  <div class="post-list" v-for="post in posts" :key="post.id">
    <Post :post="post" />
  </div>
</template>

<script>
import Post from "../components/Post.vue";
export default {
  props: ["posts"],
  components: { Post },
  setup(props) {
    console.log(props.posts);
  },
};
</script>

<style>
</style>