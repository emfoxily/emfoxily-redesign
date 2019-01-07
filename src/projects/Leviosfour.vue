<template>
    <div>
        <mq-layout mq="sm">
            <img class="project" @click="toggle" src="../assets/connect4.png" alt="wingardium leviosfour" />
            <p v-show="showDesc">
                <br />
                <br />
                <strong>WINGARDIUM LEVIOSFOUR</strong>
                <br class="project-break" /> Represent your Hogwarts house in this revamped version of Connect Four! Each player will select their house and the first player that does so, makes the first move. Click any empty circle on the board to place
                your house crest. Whoever gets four in a row vertically or horizontally first, wins!
                <br class="project-break" />
                <a href="https://github.com/emfoxily/connect4">CODE</a> •
                <a href="https://emfoxily.com/connect4/">LINK</a>
            </p>
        </mq-layout>
    </div>
</template>

<script>
    export default {
        name: 'Leviosfour',
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
