<template>
    <div>
        <fieldset class="lg-about">
                <legend>
                    <img src="../assets/aboutem.png" alt="about emily" />
                </legend>
                <About />
            </fieldset>
    </div>
</template>

<script>
    import About from '../about/About.vue'

    export default {
        name: 'DeskAbout',
        components: {
            About
        }
    }
</script>

<style scope>

    fieldset.lg-about {
        background-color: #222;
        width: 60%;
        margin: 10vw 3vw;
        font-size: 2vw;
        color: #c5c5c5;
        border: .5vw solid #f115db;
        border-radius: 3vw;
        padding: 1em 2em 3em;
    }

    legend img {
        width: 100%;
    }

</style>
