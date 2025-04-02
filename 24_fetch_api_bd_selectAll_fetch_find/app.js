window.onload = () => {
  let select_users = document.querySelector("#select_users");

  // buscar os dados dos users
  fetch("http://localhost/recursos_online/api/v1/get_all_users")
    .then((response) => {
      if (response.status === 200) {
        return response.json();
      } else {
        throw new Error("Dados indisponíveis");
      }
    })
    .then((dados) => {
      // console.log(dados)
      if (dados.status === "success") {
        dados.results.forEach((user) => {
          let option = document.createElement("option");
          option.value = user.id;
          option.textContent = user.username;
          select_users.appendChild(option);
        });
      } else {
        throw new Error("Opss! Não conseguimos encontrar os dados.");
      }
    })
    .catch((err) => {
      console.log(err);
    });

  select_users.addEventListener("change", () => {
    let id = select_users.value;
    if (id !== 0) {
      fetch(
        "http://localhost/recursos_online/api/v1/get_all_comments_from_user/?id=" +
          id
      )
        .then((response) => {
          if (response.status === 200) {
            return response.json();
          } else {
            throw new Error("Dados indisponíveis");
          }
        })
        .then((data) => {
          let posts = data.results;
          let user_posts = document.querySelector("#user_posts");
          let no_posts = document.querySelector("#no_posts");
          user_posts.innerHTML = null;

          if (posts.length == 0) {
            user_posts.classList.add("d-none");
            no_posts.classList.remove("d-none");
          } else {
            posts.forEach((post) => {
              let html = `<div class="row border  rounded py-2 bg-light my-3>
              <div class="col-6"><strong>@${post.username}</strong></div>
              <div class="col-6 text-end"><strong>${post.created_at}</strong></div>
              <div class="col-12">${post.comment}</div>
            </div>`;

              let post_div = document.createElement("div");

              post_div.innerHTML = html;
              user_posts.appendChild(post_div);
            });

            // adicionar total de posts
            let total_info = document.createElement("div");
            total_info.classList.add("text-end", "my-3");
            total_info.innerHTML = `<strong>Total de posts: ${posts.length}</strong>`;
            user_posts.appendChild(total_info);

            user_posts.classList.remove("d-none");
            no_posts.classList.add("d-none");
          }
        })
        .catch(() => {
          console.log("Opss! Não conseguimos encontrar os dados.");
        });
    }
  });
};
