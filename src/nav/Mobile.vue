<template>
    <nav>
        <ul>
            <li>
                <a href="/">
                    <img src="../assets/home.png" alt="home" />
                </a>
            </li>
            <li>
                <a href="mailto:emily@emfoxily.com">
                    <img src="../assets/mail.png" alt="mail" />
                </a>
            </li>
            <li>
                <a href="https://linkedin.com/in/emcaitlin">
                    <img src="../assets/linkedin.png" alt="linked in" />
                </a>
            </li>
            <li>
                <a href="https://github.com/emfoxily">
                    <img src="../assets/github.png" alt="github" />
                </a>
            </li>
            <li>
                <a href="https://www.instagram.com/emcaitlin/">
                    <img src="../assets/instagram.png" alt="instagram" />
                </a>
            </li>
            <li>
                <a href="https://www.twitch.tv/emfoxily">
                    <img src="../assets/twitch.png" alt="twitch" />
                </a>
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
        padding: 1em 2em 2em 0em;
        margin-left: -7vw;
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
    
    li a {
        cursor: pointer;
    }
</style>

