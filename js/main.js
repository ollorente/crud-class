// const config = require('../config')

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
    <main id="app-content" class="app-content">
        <div id="posted" class="posted">
            <a href="/empresarios-inmobiliarios-trajeron-inversion-de-colombianos-en-el-exterior-al-pais">
                <img src="https://res.cloudinary.com/dbszizqh4/image/upload/v1572147232/economia/bpadomcoh4kmhcbf4qkl.jpg" alt="Empresarios Inmobiliarios trajeron inversión de colombianos en el exterior al país" class="img-thumbnail-posts" />
            </a>
            <h1 class="subtitle"><a href="/empresarios-inmobiliarios-trajeron-inversion-de-colombianos-en-el-exterior-al-pais">Empresarios Inmobiliarios trajeron inversión de colombianos en el exterior al país</a></h1>
            <div class="post-flag">
                <div class="info-user">
                    <span class="info-user-img"><img src="https://www.gravatar.com/avatar/d8ba48aef066b1e1487c738541b3f794?s=40&f=y" alt="EtniaStudio © Group" class="img-thumbnail-avatar" /></span>
                    <span class="info-user-data"><b>EtniaStudio © Group</b><br>@etniastudio</span>
                </div>
                <div><b>10</b> views</div>
            </div>
            <p class="info-category">
                <span class="info-category-name"><a href="/economia">Economía</a></span>
                <span class="info-category-date">2019-10-27T03:33:52.665Z</span>
            </p>
        </div>
    </main>
    `
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
    created() {
        var info = document.getElementById('posted')
        console.log(info)
        
        fetch(`https://simple-blog-v1.herokuapp.com/api/v1/posts`)
        .then(res => res.json())
        .then(data => {
            console.log(data.data)
            return posts = data.data
        })
    }
})