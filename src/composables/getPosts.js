import { ref } from "vue";
import  {projectFirestore } from "../firebase/config"

const getPosts = () => {
    const posts = ref([]);
    const error = ref(null);

    const loadPosts = async () => {
      try {

        await new Promise(resolve => {
              setTimeout(resolve, 1000)
          })

          const response = await projectFirestore.collection('posts').orderBy('createdAt', 'desc').get()

          posts.value = response.docs.map(doc => {
            console.log(doc.data())

            return {...doc.data(), id: doc.id}
          })
          console.log(response.docs, 'OK')

        // let data = await fetch("http://localhost:3000/posts");
        // if (!data.ok) {
        //   throw Error("No data available");
        // }
        // posts.value = await data.json();
      } catch (err) {
        error.value = err.message;
        console.log(error.value);
      }
    };

    return { posts, error, loadPosts}
}

export default getPosts