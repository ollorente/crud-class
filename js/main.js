const _URL = 'https://jsonplaceholder.typicode.com/posts'

const app = document.getElementById('app')
const button = document.getElementById('button')
const ListClick = document.getElementById('listClick')
const GetOneClick = document.getElementById('getOneClick')
const UpadteClick = document.getElementById('upadteClick')
const RemoveClick = document.getElementById('removeClick')

button.addEventListener('click', () => {
    const newPost = {
        userId: 1,
        id: 1,
        title: "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
        body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
    }

    console.log(newPost)
    console.log(JSON.stringify(newPost))

    fetch(`${_URL}/posts`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newPost)
    })
    .then(res => res.json())
    .then(data => {
        console.log(data)
    })
    .catch(e) {
        console.error(e)
    }
})

ListClick.addEventListener('click', listData())
GetOneClick.addEventListener('click', getOneData())
UpadteClick.addEventListener('click', upadteData())
RemoveClick.addEventListener('click', removeData())

/* function createData () {
    const newPost = {
        userId: 1,
        id: 1,
        title: "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
        body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
    }
console.log(newPost)
    fetch(`${_URL}/posts`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' }
    })
    .then(res => res.jason())
    .then(data => {
        console.log(data)
    })
    .catch(e) {
        console.error(e)
    }
} */

/* function listData () {
    console.log('diste clic en List')
    fetch(`${_URL}/posts`)
    .then(res => res.jason())
    .then(data => {
        console.log(data)
    })
    .catch(e) {
        console.error(e)
    }
} */

/* function getData () {
    fetch(`${_URL}/posts/1`)
    .then(res => res.jason())
    .then(data => {
        console.log(data)
    })
    .catch(e) {
        console.error(e)
    }
} */

/* function updateData () {
    fetch(`${_URL}/posts/1`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' }
    })
    .then(res => res.jason())
    .then(data => {
        console.log(data)
    })
    .catch(e) {
        console.error(e)
    }
} */

/* function removeData () {
    fetch(`${_URL}/posts/1`, {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' }
    })
    .then(res => res.jason())
    .then(data => {
        console.log(data)
    })
    .catch(e) {
        console.error(e)
    }
} */

/* class GetData {

    constructor () {}

    getData () {
        fetch(`${_URL}/posts/1`)
        .then(res => res.jason())
        .then(data => {
            console.log(data)
        })
        .catch(e) {
            console.error(e)
        }
    }

} */