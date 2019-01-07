<template>
    <div>
        <mq-layout mq="sm">
            <img class="project" @click="toggle" src="../assets/codemas.png" alt="codemas" />
            <p v-show="showDesc">
                <br />
                <br />
                <strong style="padding: 4.5em">CODEMAS</strong>
                <br class="project-break" /> Ever wanted to read Taco Bell hot sauce packet sayings without actually going to Taco Bell? Look no further! Click away to your heart's content.
                <br class="project-break" />
                <a href="https://github.com/emfoxily/codemas">CODE</a> •
                <a href="https://emfoxily.com/codemas/">LINK</a>
            </p>
        </mq-layout>
    </div>
</template>

<script>
    export default {
        name: 'Codemas',
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