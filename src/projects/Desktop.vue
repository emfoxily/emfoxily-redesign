<template>
    <div class="lg-projects">
        <h1>
            <img src="../assets/portfolio.png" alt="projects" />
        </h1>
        <Projects class="portfolio"/>
    </div>
</template>

<script>
    import Projects from '../projects/Projects.vue'
    
    export default {
        name: 'DeskProj',
        components: {
            Projects,
        }
    }
</script>

<style scope>
    .lg-projects {
        background-image: linear-gradient(to bottom, #f712d9, #6951fc, #3f07e0);
        background-color: #222;
        width: 100%;
        margin: -2.5vw 0vw;
        left: 0;
        padding: 1em;
        color: #c5c5c5;
        text-align: center;
        /* overflow: hidden; */
    }

    .desktop-flex {
        display: flex;
        flex-direction: column;
        /* justify-content: center; */
    }
    
    img.lg-project {
        width: 75%;
        border: .5em solid #333;
        border-radius: 3vw;
        z-index: -1;
        margin-bottom: 2vw;
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
    
    p.lg-desc {
        position: relative;
        background-color: #333;
        background-image: linear-gradient(to top, #111, #222, #222, #222, #222, #222, transparent);
        width: 71.6%;
        margin: -5vw 11.5vw;
        padding: 1em;
        font-size: 2vw;
        text-align: center;
        color: #c5c5c5;
        z-index: 2;
        border-left: .2em solid #333;
        border-right: .2em solid #333;
        border-bottom: .2em solid #333;
        border-radius: 0 0 3vw 3vw;
    }
    
    p.lg-desc strong {
        font-size: 4.5vw;
        color: #f712d9;
    }
    
    p.lg-desc a {
        color: #c5c5c5;
        text-decoration: none;
        font-size: 3vw;
        font-weight: 600;
        width: 100%;
        justify-content: center;
        cursor: pointer;
    }
</style>
