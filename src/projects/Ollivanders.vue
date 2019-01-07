<template>
    <div>
            <img class="project" @click="toggle" src="../assets/ollivanders.png" alt="ollivanders" />
            <p v-show="showDesc">
                <br />
                <br />
                <strong style="padding: 0em"> OLLIVANDER'S WAND SHOP </strong>
                <br class="project-break" /> The Laughing Sock acts as a portal for Ollivander's Wand Shop website. Think of the checkbox you usually have to click when signing up for new websites to say you're not a robot. 
                <br />
                Here, you have to specify that
                you're not a muggle. (hint: it's hidden in the sock in the logo on the registration page!)
                <br class="project-break" />
                <a href="https://github.com/emfoxily/maraudersApp">CODE</a> •
                <a href="https://maraudersapp.herokuapp.com/">LINK</a>
            </p>
        </div>
</template>

<script>
    export default {
        name: 'Ollivanders',
        data() {
            return {
                showDesc: false
            }
        },
        methods: {
            toggle() {
                this.showDesc = !this.showDesc
            }
        }
    }
</script>
