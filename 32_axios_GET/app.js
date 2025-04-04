document.querySelector(".btn").addEventListener("click", () => {
  axios
    .get("http://localhost/recursos_online/api/v1/get_all_comments")
    .then(response => {
        if(response.status === 200){
            return response.data
        }else{
            throw new Error("Error in response")
        }
    })
    .then(data => {
       if(data.message === 'success'){
        data.results.forEach(post => {
            let p = document.createElement("p");
            p.textContent = post.comment;
            document.querySelector("#conteudo").appendChild(p);
        });
       }
    })
    .catch()
    .finally(() => {
      console.log("Request completed");
    });
});
