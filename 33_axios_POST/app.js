document.querySelector(".btn").addEventListener('click', () => {
    let username = document.querySelector('[name="text_username"]').value
    let email = document.querySelector('[name="text_email"]').value

    // ------------------------------------------------------------
    // https://kapeli.com/cheat_sheets/Axios.docset/Contents/Resources/Documents/index
    // ------------------------------------------------------------
    // primeiro método
    // axios({
    //     method: 'post',
    //     url: 'http://localhost/recursos_online/api/v1/add_new_user/index.php',
    //     data: {
    //         username,
    //         email
    //     }
    // }).then(response => {
    //     console.log(response)
    // })

    // ------------------------------------------------------------
    // segundo método
    axios.post('http://localhost/recursos_online/api/v1/add_new_user/index.php', {
        username,
        email
    }).then(response => {
        console.log(response.data)
    })
})