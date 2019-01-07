<template>
    <main class="sm-about-bg">
        <mq-layout mq="sm">
            <fieldset class="sm-about">
                <legend>
                    <img src="../assets/aboutem.png" alt="about emily" />
                </legend>
                Hi! I'm Emily and I'm a UX/UI designer and front-end web developer based in Georgia. When I'm not working on a project, I'm writing stories, creating digital art, and probably playing video games or binging The Office on Netflix. Let's chat!
            </fieldset>
        </mq-layout>
    </main>
</template>

<script>
    export default {
        name: 'About',
    }
</script>

<style scope>
    main.sm-about-bg {
        background-image: linear-gradient(to top, #f115db, #f115db, #222, #111);
        /* background-size: 100% 75%; */
        background-repeat: no-repeat;
        background-position: bottom;
        margin-left: -3vw;
    }   

    main {
        width: 105%;
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
