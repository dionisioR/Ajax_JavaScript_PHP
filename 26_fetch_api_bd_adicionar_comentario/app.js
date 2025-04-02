window.onload = () => get_all_users();

function get_all_users() {
  let list_users = document.querySelector("#list_users");

  fetch("http://localhost/recursos_online/api/v1/get_all_users")
    .then((response) => {
      if (response.status === 200) {
        return response.json();
      } else {
        throw new Error("Erro ao buscar usuários");
      }
    })
    .then((dados) => {
      if (dados.status === "success") {
        let users = dados.results;

        if (users.length != 0) {
          users.forEach((user) => {
            let li = document.createElement("li");
            li.classList.add("clickable");
            li.textContent = user.username;
            li.addEventListener("click", () => {
              document.querySelector("#user_info").textContent = user.username;
              show_user_comments(id);
            });
            list_users.appendChild(li);
          });
        }
      } else {
        throw new Error("Erro ao buscar usuários");
      }
    })
    .catch((error) => {
      console.error("Erro:", error);
    });
}

function show_user_comments(id) {}
