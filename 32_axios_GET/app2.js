document.querySelector(".btn").addEventListener("click", () => {
  axios.all([get_users(), get_comments()])
  .then(axios.spread((users, comments) => {
    console.log(users.data.results);
    console.log(comments.data.results);
  }))
});

function get_users() {
  return axios.get("http://localhost/recursos_online/api/v1/get_all_users");
}
function get_comments() {
    return axios.get("http://localhost/recursos_online/api/v1/get_all_comments");
}
