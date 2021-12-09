<template>
  <div class="createPost">
    <form @submit.prevent="submitForm">
      <label for="">Title</label>
      <input type="text" v-model="title" />
      <label for=""> Content</label>
      <textarea name="" id="" cols="30" rows="10" v-model="body"></textarea>
      <label for=""
        >Tags <br />
        <i><small>(Presse "Enter" to add a tag)</small></i>
      </label>
      <input type="text" v-model="tag" @keydown.enter.prevent="handleAddTags" />

      <div v-for="tag in tags" :key="tag" class="tag">#{{ tag }}</div>

      <button>Add Post</button>
    </form>
  </div>
</template>

<script>
import { ref } from "vue";
import { projectFirestore, timestamp } from "../firebase/config";
import { useRouter } from "vue-router";
export default {
  setup() {
    const title = ref("");
    const body = ref("");
    const tag = ref("");
    const tags = ref([]);
    const router = useRouter();
    const handleAddTags = () => {
      if (!tags.value.includes(tag.value)) {
        tag.value = tag.value.replace(/\s/, "");
        console.log(tag.value);
        tags.value.push(tag.value);
      }
      tag.value = "";
    };

    const submitForm = async () => {
      const post = {
        title: title.value,
        body: body.value,
        tags: tags.value,
        createdAt: timestamp(),
      };
      // await fetch("http://localhost:3000/posts/", {
      //   method: "POST",
      //   headers: { "Content-Type": "application/json" },
      //   body: JSON.stringify(post),
      // });
      const response = await projectFirestore.collection("posts").add(post);
      console.log(response);

      router.push({ name: "Home" });
    };

    return { title, body, tag, handleAddTags, tags, submitForm };
  },
};
</script>

<style>
form {
  max-width: 550px;
  margin: 0 auto;
}

input,
textarea {
  display: block;
  margin: 10px 0;
  width: 100%;
  box-sizing: border-box;
  padding: 10px;
  border: 1px solid #dad8d8;
  border-radius: 30px;
  outline: none;
}

label {
  display: inline-block;
  font-size: 20px;
  letter-spacing: 2.7px;
  margin-top: 30px;
  position: relative;
  margin-bottom: 10px;
  color: #f4f4f4;
  outline: none;
}

label::before {
  position: absolute;
  display: block;
  content: "";
  width: 100%;
  height: 100%;
  background: linear-gradient(orangered, rgba(223, 16, 113, 0.7));
  padding: 10px 0 0 40px;
  z-index: -1;
  border-radius: 10px;
  left: -30px;
}

button {
  padding: 17px 28px;
  display: block;
  margin: 0 auto;
  border-radius: 30px;
  border: none;
  color: #f4f4f4;
  font-size: 19px;
  margin-top: 30px;
  background: linear-gradient(orangered, rgb(223, 16, 113));
}

.tag {
  display: inline-block;
  margin-right: 10px;
  background: #dad8d8;
  padding: 13px 16px;
  border-radius: 20px;
  color: #333;
}
</style>