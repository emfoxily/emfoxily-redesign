<template>
    <div class="projects">
        <h1>
            <img src="../assets/projects.png" alt="projects" />
        </h1>
        <Projects />
    </div>
</template>

<script>
import Projects from '../projects/Projects.vue'

export default {
    name: 'MobProj',
    components: {
        Projects
    }
}
</script>

<style scope>
    .projects {
        background-image: linear-gradient(to bottom, #f712d9, #6951fc, #3f07e0);
        background-color: #222;
        width: 97%;
        margin: -15vw -5vw;
        left: 0;
        padding: 1em;
        color: #c5c5c5;
        text-align: center;
        overflow: hidden;
    }

    img.project {
        width: 90%;
        border: .5em solid #333;
        border-radius: 3vw;
    }

    h1 img {
        width: 100%;
    }

    p {
        /* background-color: #222; */
        margin-top: -2vw;
        padding: 1em;
        font-size: 5vw;
        text-align: justify;
        color: #c5c5c5;
    }

    p strong {
        font-size: 5.8vw;
        color: #222;
    }
</style>
