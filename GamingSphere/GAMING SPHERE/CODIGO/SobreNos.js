$.ajax({
    url: 'https://api.github.com/users/aniellevic'
})
    .done(response => {
        $('#foto1').attr('src', response.avatar_url)
    })
$.ajax({
    url: 'https://api.github.com/users/DYOGO1'
})
    .done(response => {
        $('#foto2').attr('src', response.avatar_url)
    })
$.ajax({
    url: 'https://api.github.com/users/Gustavoavendanha'
})
    .done(response => {
        $('#foto3').attr('src', response.avatar_url)
    })
$.ajax({
    url: 'https://api.github.com/users/Thi2510'
})
    .done(response => {
        $('#foto4').attr('src', response.avatar_url)
    })
$.ajax({
    url: 'https://api.github.com/users/Sympathy34'
})
    .done(response => {
        $('#foto5').attr('src', response.avatar_url)
    })
