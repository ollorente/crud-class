const _URL = 'https://jsonplaceholder.typicode.com'

const app = document.getElementById('app')
const createClick = document.getElementById('createClick')
const ListClick = document.getElementById('listClick')
const GetOneClick = document.getElementById('getOneClick')
const UpdateClick = document.getElementById('updateClick')
const RemoveClick = document.getElementById('removeClick')

createClick.addEventListener('click', (e) => {
    e.preventDefault()

    const newPost = {
        userId: 1,
        id: 1,
        title: "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
        body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
    }

    fetch(`${_URL}/posts`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
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

    fetch(`${_URL}/posts`, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' }
    })
    .then(res => res.json())
    .then(data => {
        console.log(data)
    })
    .catch(e => {
        console.error(e)
    })
})

GetOneClick.addEventListener('click', (e) => {
    e.preventDefault()

    fetch(`${_URL}/posts/1`, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' }
    })
    .then(res => res.json())
    .then(data => {
        console.log(data)
    })
    .catch(e => {
        console.error(e)
    })
})

UpdateClick.addEventListener('click', (e) => {
    e.preventDefault()

    const newPost = {
        userId: 1,
        id: 1,
        title: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident, quae.",
        body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat aspernatur laudantium esse repellat, cupiditate, nihil illum ducimus iusto voluptatem, explicabo distinctio molestias sed ut velit aliquam ipsam similique animi quam."
    }

    fetch(`${_URL}/posts/1`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
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

    fetch(`${_URL}/posts/1`, {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' }
    })
    .then(res => res.json())
    .then(data => {
        console.log(data)
    })
    .catch(e => {
        console.error(e)
    })
})