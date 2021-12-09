<template>
  <div v-if="error">{{ error }}</div>

  <div v-if="post" class="post">
    <h3>{{ post.title }}</h3>
    <p>{{ post.body }}</p>
    <span v-for="tags in post.tags" :key="tags"> #{{ tags }} </span>

    <button class="btnDelete" @click="deletePost">Delete Post</button>
  </div>
  <div v-else>
    <img src="https://c.tenor.com/I6kN-6X7nhAAAAAj/loading-buffering.gif" />
  </div>
</template>
<script>
import { useRouter } from "vue-router";
import getPost from "../composables/getPost";
import { projectFirestore } from "../firebase/config";

export default {
  props: ["id"],
  setup(props) {
    const { post, error, loadPost } = getPost(props.id);
    loadPost();
    const router = useRouter();

    const deletePost = async () => {
      await projectFirestore.collection("posts").doc(props.id).delete();

      router.push({ name: "Home" });
    };
    return { post, error, deletePost };
  },
};
</script>
<style>
.post {
  max-width: 800px;
  margin: 0 auto;
  text-align: left !important;
}
span {
  margin-right: 10px;
  font-weight: italic;
}
.btnDelete {
  cursor: pointer;
}
</style>
