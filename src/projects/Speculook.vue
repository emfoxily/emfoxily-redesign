<template>
    <div>
        <img class="project" @click="toggle" src="../assets/speculook.png" alt="speculook" />
        <p v-show="showDesc">
            project description
        </p>
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