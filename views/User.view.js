const config = require('../config')

const app = document.getElementById('app')

createClick.addEventListener('click', (e) => {
    e.preventDefault()

    const newPost = {
        username: 'etniastudio',
        email: 'etniastudio@gmail.com',
        password: 'Cb740525$',
        firstName: 'EtniaStudio',
        lastName: 'Group'
    }

    fetch(`${config._URL}${config._Version}/users`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'jwt': config.Token
        },
        body: JSON.stringify(newPost)
    })
    .then(res => res.json())
    .then(data => {
        console.log(data)
    })
    .catch(e => {
        console.error(e)
    })
})

ListClick.addEventListener('click', (e) => {
    e.preventDefault()

    fetch(`${config._URL}${config._Version}/users`, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' }
    })
    .then(res => res.json())
    .then(data => {
        console.log(data)
        app.innerHTML = ``
        data.data.forEach(e => {
            app.innerHTML += `
            <div class="media bg-white" style="border-bottom:solid 1px #fff;">
                <a href="/users/${e.username}"><img src="https://www.gravatar.com/avatar/${e.gravatar}?s=160&r=pg" class="mr-3" alt="+${e.username}" style="width:120px; height:160px; object-fit: cover; position: center center;"></a>
                <div class="media-body py-3 mr-3" style="max-height:160px;">
                    <a href="/images/${e.username}"><h5 class="mt-0 text-dark" style="height:70px; overflow:hidden; text-overflow: ellipsis;">+${e.username}</h5></a>
                    <div>${e.firstName} ${e.lastName}</div>
                    <div>+${e.username} views</div>
                </div>
            </div>
            `
        })
    })
    .catch(e => {
        console.error(e)
    })
})

GetOneClick.addEventListener('click', (e) => {
    e.preventDefault()

    fetch(`${config._URL}${config._Version}/users/ollorente`, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' }
    })
    .then(res => res.json())
    .then(data => {
        console.log(data)
        const e = data.data
        app.innerHTML = ``
        app.innerHTML = `
        <div class="media bg-white mb-4" style="border-bottom:solid 1px #fff;">
            <img src="https://www.gravatar.com/avatar/${e.gravatar}?s=160&r=pg" class="mr-3" alt="${e.username}" style="width:120px; height:160px; object-fit: cover; position: center center;">
            <div class="media-body py-3 mr-3" style="max-height:160px;">
                <h5 class="mt-0" style="height:70px; overflow:hidden; text-overflow: ellipsis;">${e.title}</h5>
                <div>${e.firstName} ${e.lastName}</div>
                <div>+${e.username}</div>
            </div>
        </div>
        <div class="card mb-3" id="posts"></div>
        `
    })
    .catch(e => {
        console.error(e)
    })
})

UpdateClick.addEventListener('click', (e) => {
    e.preventDefault()

    const newPost = {
        username: 'etniastudio',
        email: 'etniastudio@gmail.com',
        password: 'Cb740525$',
        firstName: 'EtniaStudio',
        lastName: '© Group'
    }

    fetch(`${config._URL}${config._Version}/users/etniastudio`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            'jwt': config.Token
        },
        body: JSON.stringify(newPost)
    })
    .then(res => res.json())
    .then(data => {
        console.log(data)
    })
    .catch(e => {
        console.error(e)
    })
})

RemoveClick.addEventListener('click', (e) => {
    e.preventDefault()

    fetch(`${config._URL}${config._Version}/posts/1`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
            'jwt': config.Token
        }
    })
    .then(res => res.json())
    .then(data => {
        console.log(data)
    })
    .catch(e => {
        console.error(e)
    })
})