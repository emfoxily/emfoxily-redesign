<template>
    <div class="sm-about-bg">
            <fieldset class="sm-about">
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
        name: 'MobAbout',
        components: {
            About
        }
    }
</script>

<style scope>
    div.sm-about-bg {
        background-image: linear-gradient(to top, #f115db, #f115db, #222, #111);
        /* background-size: 100% 75%; */
        background-repeat: no-repeat;
        background-position: bottom;
        margin-left: -3vw;
        width: 109%;
        padding-bottom: 2em;
    }   

    fieldset.sm-about {
        background-color: #222;
        width: 75%;
        margin: 0 auto 10vw 8vw;
        border: .5vw solid #f115db;
        border-radius: 3vw;
        font-size: 5.5vw;
        color: #c5c5c5;
        text-align: justify;
        padding-bottom: 2em;
    }
    
    .sm-about legend {
        color: #f115db;
        text-transform: uppercase;
        font-weight: 600;
    }

    .sm-about legend img {
        width: 100%;
    }
</style>
