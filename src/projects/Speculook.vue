<template>
    <div>
        <mq-layout mq="sm">
            <img class="project" @click="toggle" src="../assets/speculook.png" alt="speculook" />
            <p v-show="showDesc">
                <br />
                <br />
                <strong style="padding: 4em"> SPECULOOK </strong>
                <br class="project-break" /> Speculook was made for the WDIR Speculoos class of General Assembly. It’s like Facebook, but with cooler people. This is where we’ll keep in touch and share everything we’ve done and learned in this web development
                journey of ours. So, come on in! Everyone could use a little bit of speculoos.
                <br class="project-break" />
                <a href="https://github.com/emfoxily/speculook">CODE</a> •
                <a href="http://speculook.herokuapp.com/">LINK</a>
            </p>
        </mq-layout>
    </div>
</template>

<script>
    export default {
        name: 'Speculook',
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