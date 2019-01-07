<template>
    <div>
        <img class="project" @click="toggle" src="../assets/codemas.png" alt="codemas" />
        <p v-show="showDesc">
            project description
        </p>
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