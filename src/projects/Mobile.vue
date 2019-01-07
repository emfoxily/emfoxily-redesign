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
        width: 96.5%;
        margin: -15vw -3vw;
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
        z-index: -1;
    }

    br.project-break {
        display: block;
        content: "";
        margin-top: 5vw;
        border-top: 1px solid #f712d9;
        padding: .4em;
    }

    h1 img {
        width: 100%;
    }

    p {
        position: relative;
        /* background-color: #222; */
        background-image: linear-gradient(to top, #111, #222,  #222, #222, #222, #222, transparent);
        width: 79%;
        margin-top: -20vw;
        margin-left: 2.8vw;
        padding: 1em;
        font-size: 5vw;
        text-align: justify;
        color: #c5c5c5;
        z-index: 2;
        border-left: .5em solid #333;
        border-right: .5em solid #333;
        border-bottom: .5em solid #333;
        border-radius: 0 0 3vw 3vw;
    }

    p strong {
        font-size: 5.5vw;
        color: #f712d9;
    }

    p a {
        color: #c5c5c5;
        text-decoration: none;
        font-size: 7vw;
        font-weight: 600;
        padding: 1.2em;
        cursor: pointer;
    }
</style>
