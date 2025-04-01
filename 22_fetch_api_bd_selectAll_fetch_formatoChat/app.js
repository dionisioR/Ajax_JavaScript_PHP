document.querySelector("#btn").addEventListener("click", () => {
  fetch("http://localhost/recursos_online/api/v1/get_all_comments")
    .then((response) => {
      if (response.status === 200) {
        return response.json();
      } else {
        throw new Error("Dados indisponíveis");
      }
    })
    .then((response) => {
      // console.log(response);
      let chat = document.querySelector("#chat");
      chat.innerHTML = null; 
      
      response.results.forEach((post) => {
        // new post
        let new_post = document.createElement("div");
        new_post.classList.add("col-12", "card", "bg-light", "p-2",'mb-3');
       
        let html = `<div class="row">`;
        html += `<div class="col-6">`;
        html += `<p><strong>${post.username}</strong></p>`;
        html += `</div>`;
        html += `<div class="col-6 text-end">`;
        html += `<p><strong>${post.created_at}</strong></p>`;
        html += `</div>`;
        html += `<div class="col-12 text-center">`;
        html += '<hr>';
        html += `<p><strong>${post.comment}</strong></p>`;
        html += `</div>`;

        new_post.innerHTML = html;
        chat.appendChild(new_post);
      })
    })
    .catch(() => {
      document.querySelector("#error").classList.remove("d-none");
    });

  // fetch("http://localhost/recursos_online/api/v1/get_all_users")
  //   .then((response) => {
  //     if (response.status === 200) {
  //       return response.json();
  //     } else {
  //       throw new Error("Dados indisponíveis");
  //     }
  //   })
  //   .then((dados) => {
  //   //   console.log(dados);
  //       let users = dados.results;
  //       let table_users = document.querySelector("#table_users");

  //       table_users.innerHTML = null; // Limpa a tabela antes de adicionar novos dados

  //       users.forEach(user => {
  //           let tr = document.createElement("tr");
  //           let html = `<td>${user.username}</td>`
  //           html += `<td>${user.email}</td>`
  //           html += `<td>${user.created_at}</td>`
  //           tr.innerHTML = html;
  //           table_users.appendChild(tr);
  //       });
  //       document.querySelector("#tabela").classList.remove("d-none");
  //   })
  //   .catch(() => {
  //     document.querySelector("#error").classList.remove("d-none");
  //   });
});
