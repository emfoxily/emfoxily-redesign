<template>
    <div class="projects">
        <h1>
            <img src="../assets/projects.png" alt="projects" />
        </h1>
        <img class="project" src="../assets/connect4.png" alt="wingardium leviosfour" />
        <img class="project" src="../assets/speculook.png" alt="speculook" />
        <img class="project" src="../assets/eventful.png" alt="eventful" />
        <img class="project" src="../assets/santasworkshop.png" alt="santa's workshop" />
    </div>
</template>

<script>
export default {
    name: 'MobProj',
}
</script>

<style scope>
    .projects {
        background-image: linear-gradient(to bottom, #f712d9, #6951fc, #3f07e0);
        background-color: #222;
        width: 94.5%;
        margin: -15vw -3vw;
        left: 0;
        padding: 1em;
        color: #c5c5c5;
        text-align: center;
    }

    img.project {
        width: 90%;
        border: .5em solid #333;
    }

    h1 img {
        width: 100%;
    }
</style>
