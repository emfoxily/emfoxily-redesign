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
                <img src="../assets/twitter.png" alt="twitter" />
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
    name: 'Mobile',
}
</script>

<style scope>
    nav {
        /* background-color: #222; */
        width: 100%;
        margin-left: -5vw;
    }

    ul {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
    }

    li img {
        width: 40vw;
        flex-direction: row;
    }
</style>

