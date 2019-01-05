<template>
    <main>
        <mq-layout mq="sm">
            <fieldset class="sm-about">
                <legend>
                    <img src="../assets/aboutem.png" alt="about emily" />
                </legend>
                Hi! I'm Emily and I'm a UX/UI designer and front-end web developer based in Georgia. When I'm not working on a project, I'm writing stories, creating digital art, and probably binging The Office on Netflix.
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
    fieldset.sm-about {
        background-color: #1a1a1a;
        width: 75%;
        margin: 0 auto;
        border: 1px solid #f115db;
        border-radius: 2vw;
        font-size: 5.5vw;
        color: #c5c5c5;
        text-align: justify;
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
