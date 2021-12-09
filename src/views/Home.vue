<template>
  <div class="home">
    <h3>TDKA Blog</h3>
    <!-- If there is error during data fetching -->
    <div v-if="error">{{ error }}</div>
    <!-- Loading during completed fetch -->
    <div v-if="posts.length" class="posts">
      <PostsList :posts="posts" />
    </div>
    <div v-else>
      <h3>Loading...</h3>
      <img
        src="https://c.tenor.com/I6kN-6X7nhAAAAAj/loading-buffering.gif"
        alt=""
      />
    </div>
  </div>
</template>

<script>
import { ref, reactive, computed } from "@vue/reactivity";
import { watch, watchEffect } from "@vue/runtime-core";
import PostsList from "../components/PostsList.vue";
import Post from "../components/Post.vue";
import getPosts from "../composables/getPosts";
// @ is an alias to /src

export default {
  components: { PostsList },
  setup() {
    // grab getPosts.js
    const { posts, error, loadPosts } = getPosts();
    // load all posts
    loadPosts();
    return { posts, error };
  },
};
</script>
<style scoped>
.test {
  padding: 15px 25px;
  background: orangered;
  color: whitesmoke;
  border: none;
  border-radius: 30px;
}

.home {
  max-width: 1200px;
  margin: 0 auto;
}

.posts {
  padding: 30px 10px;
}
</style>
