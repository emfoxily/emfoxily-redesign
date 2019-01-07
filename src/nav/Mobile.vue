<template>
    <nav class="mobile-nav">
        <Nav />
    </nav>
</template>

<script>
    import Nav from '../nav/Nav.vue'
    
    export default {
        name: 'MobNav',
        components: {
            Nav,
        }
    }
</script>

<style scope>
    nav.mobile-nav {
        background-color: #181818;
        width: 105%;
        padding: 1em 2em 2em 0em;
        margin-left: -7vw;
    }
    
    nav.mobile-nav ul {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        list-style: none;
    }
    
    nav.mobile-nav li img {
        width: 40vw;
        flex-direction: row;
    }
    
    li a {
        cursor: pointer;
    }
</style>

