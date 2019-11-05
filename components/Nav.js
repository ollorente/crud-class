Vue.component('appNav', {
    template: `
    <nav>
        <a href="/">Logo</a>
        <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Contact</a></li>
        </ul>
    </nav>
    `
})

var app = new Vue({
    el: '#app',
    data: {
        message: 'Navbar!'
    }
})