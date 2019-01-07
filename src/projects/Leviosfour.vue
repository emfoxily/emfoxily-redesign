<template>
    <div>
        <img class="project" @click="toggle" src="../assets/connect4.png" alt="wingardium leviosfour" />
        <p v-show="showDesc">
            project description
        </p>
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
