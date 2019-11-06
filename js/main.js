// const config = require('../config')
// const axios = require('axios').default;

Vue.component('appNav', {
    props: [],
    template: `
    <nav id="app-nav" class="app-nav">
        <div class="container">
            <a href="/">SimpleBlog</a>
            <ul>
                <li><a href="/nuevo">Crear post</a></li>
                <li><a href="/perfil">Perfil</a></li>
                <li><a href="/registro">Registro</a></li>
                <li><a href="/entrar">Entrar</a></li>
            </ul>
        </div>
    </nav>
    `
})

Vue.component('appView', {
    props: [],
    template: `
    <main id="app-view" class="app-view">
        <app-content></app-content>
    </main>
    `
})

Vue.component('appSidebar', {
    props: [],
    template: `
    <section id="app-sidebar" class="app-sidebar">
        <a href="/">Sidebar</a>
        <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Contact</a></li>
        </ul>
    </section>
    `
})

Vue.component('appContent', {
    template: `
    <div id="app-content" class="app-content" v-if="posts">
        <div id="posted" class="posted" v-for="item in posts" :key="item.slug">
            <a :href="'/' + item.slug">
                <img :src="item.image" :alt="item.title" class="img-thumbnail-posts" />
            </a>
            <h1 class="subtitle"><a :href="'/' + item.slug">{{ item.title }}</a></h1>
            <div class="post-flag">
                <div class="info-user">
                    <span class="info-user-img"><img :src="'https://www.gravatar.com/avatar/' + item.userId.gravatar + '?s=40&f=y'" :alt="item.userId.firstName + ' ' + item.userId.lastName" class="img-thumbnail-avatar" /></span>
                    <span class="info-user-data"><b>{{ item.userId.firstName }} {{ item.userId.lastName }}</b><br>@{{ item.userId.username }}</span>
                </div>
                <div><b>{{ item.views }}</b> views</div>
            </div>
            <p class="info-category">
                <span class="info-category-name"><a href="'/' + item.categoryId.slug">{{ item.categoryId.title }}</a></span>
                <span class="info-category-date">{{ item.createdAt }}</span>
            </p>
        </div>
    </div>
    `,
    data() {
        return {
            posts: []
        }
    },
    async created() {
       /* await axios.get(`https://simple-blog-v1.herokuapp.com/api/v1/posts`)
        .then(response => {
            console.log('DATA:', response.data.data)
            return this.posts = response.data.data
        })
        .catch(error => {
            console.error(error)
        }) */
        await fetch(`https://simple-blog-v1.herokuapp.com/api/v1/posts`)
        .then(res => res.json())
        .then(data => {
            console.log('FETCH', data.data)
            return this.posts = data.data
        })
    }
})

var app = new Vue({
    el: '#app',
    data: {
        posts: [],
        menus: [
            { name: 'Crear posts', url: '/nuevo' },
            { name: 'Perfil', url: '/perfil' },
            { name: 'Registro', url: '/registro' },
            { name: 'Entrar', url: '/entrar' }
        ]
    },
    async created() {
        /* var info = document.getElementById('posted')
        console.log(info)
        
        await fetch(`https://simple-blog-v1.herokuapp.com/api/v1/posts`)
        .then(res => res.json())
        .then(data => {
            console.log(data.data)
            return this.posts = data.data
        })

        await axios.get(`https://simple-blog-v1.herokuapp.com/api/v1/posts`)
        .then(data => {
            console.log('DATA:', data)
        })
        .catch(error => {
            console.error(error)
        }) */
    }
})