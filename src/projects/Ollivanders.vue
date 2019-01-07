<template>
    <div>
            <img class="project" @click="toggle" src="../assets/ollivanders.png" alt="ollivanders" />
            <p v-show="showDesc">
                project description
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
