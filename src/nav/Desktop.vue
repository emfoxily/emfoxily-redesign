<template>
    <nav class="desktop-nav">
        <hr />
        <Nav />
        <hr />
    </nav>
</template>

<script>
import Nav from '../nav/Nav.vue'

export default {
    name: 'DeskNav',
    components: {
        Nav
    }
}
</script>

<style scope>

    nav.desktop-nav {
        background-color: #181818;
    }

    nav.desktop-nav img {
        width: 100%;
    }

    nav.desktop-nav ul {
        display: flex;
        flex-direction: row;
        margin: 0 auto;
        width: 90%;
        list-style: none;
        margin-left: 2.5vw;
    }

    nav.desktop-nav hr {
        border: 1px solid #333;
    }

</style>

