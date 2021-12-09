import { ref } from "vue";
import { projectFirestore } from "../firebase/config";

const getPost = (idPost) => {
    const post = ref(null);
    const error = ref(null);

    const loadPost = async () => {
      try {
          await new Promise(resolve => {
              setTimeout(resolve, 2000)
          })
          let response = await projectFirestore.collection('posts').doc(idPost).get()
          console.log(response.data())
          if(!response.exists) {
            throw Error('The Post does not exist !')
          }
          post.value = {...response.data(), id: response.id }

          console.log(post.value);

        // let data = await fetch("http://localhost:3000/posts/" + idPost);
        // if (!data.ok) {
        //   throw Error("No data available");
        // }
        // post.value = await data.json();
      } catch (err) {
        error.value = err.message;
        console.log(error.value);
      }
    };

    return { post, error, loadPost}
}

export default getPost
