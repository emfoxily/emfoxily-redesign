<template>
    <div>
        <mq-layout mq="sm">
            <img class="project" @click="toggle" src="../assets/santasworkshop.png" alt="santa's workshop" />
            <p v-show="showDesc">
                <br />
                <br />
                <strong style="padding: 2em"> SANTA'S WORKSHOP </strong>
                <br class="project-break" /> What if Santa's Workshop was real in 2018? He'd need a website to fix any broken toys made by the elves that were given on Christmas! Well, as long as the person that received the gift was on the nice list, that
                is. The staff of this website are none other than our beloved Buddy the Elf, Ming Ming, and Jovie. If you login in with the provided credentials, you'll get a look inside what the website would be like!
                <br class="project-break" />
                <a href="https://github.com/emfoxily/santas-workshop">CODE</a> •
                <a href="http://santasworkshop.herokuapp.com/">LINK</a>
            </p>
        </mq-layout>
    </div>
</template>

<script>
    export default {
        name: 'SantasWork',
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