<template>
    <div>
        <mq-layout mq="md+">
            <img class="lg-project" @click="toggle" src="../assets/ollivanders.png" alt="ollivanders" />
            <p v-show="showDesc" class="lg-desc">
                <br />
                <br />
                <strong style="padding: 0em"> OLLIVANDER'S WAND SHOP </strong>
                <br class="project-break" /> The Laughing Sock acts as a portal for Ollivander's Wand Shop website. Think of the checkbox you usually have to click when signing up for new websites to say you're not a robot.
                <br /> Here, you have to specify that you're not a muggle. (hint: it's hidden in the sock in the logo on the registration page!)
                <br class="project-break" />
                <a href="https://github.com/emfoxily/maraudersApp">CODE</a> •
                <a href="https://maraudersapp.herokuapp.com/">LINK</a>
            </p>
        </mq-layout>
        <mq-layout mq="sm">
            <img class="sm-project" @click="toggle" src="../assets/ollivanders.png" alt="ollivanders" />
            <p v-show="showDesc">
                <br />
                <br />
                <strong style="font-size: 5.4vw"> OLLIVANDER'S WAND SHOP </strong>
                <br class="project-break" /> The Laughing Sock acts as a portal for Ollivander's Wand Shop website. Think of the checkbox you usually have to click when signing up for new websites to say you're not a robot.
                <br /> Here, you have to specify that you're not a muggle. (hint: it's hidden in the sock in the logo on the registration page!)
                <br class="project-break" />
                <a href="https://github.com/emfoxily/maraudersApp">CODE</a> •
                <a href="https://maraudersapp.herokuapp.com/">LINK</a>
            </p>
        </mq-layout>
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
