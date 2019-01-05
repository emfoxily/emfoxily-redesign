<template>
    <nav>
        <ul>
            <li>
                <img src="../assets/home.png" alt="home" />
            </li>
            <li>
                <img src="../assets/mail.png" alt="mail" />
            </li>
            <li>
                <img src="../assets/linkedin.png" alt="linked in" />
            </li>
            <li>
                <img src="../assets/github.png" alt="github" />
            </li>
            <li>
                <img src="../assets/instagram.png" alt="instagram" />
            </li>
            <li>
                <img src="../assets/twitch.png" alt="twitch" />
            </li>
        </ul>
    </nav>
</template>

<script>
export default {
    name: 'MobNav',
}
</script>

<style scope>
    nav {
        background-color: #181818;
        width: 100%;
        padding: 1em 5em 2em 0em;
        margin-left: -5vw;
    }

    ul {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        list-style: none;
    }

    li img {
        width: 40vw;
        flex-direction: row;
    }
</style>

