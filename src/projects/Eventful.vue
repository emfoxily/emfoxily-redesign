<template>
    <div>
        <img class="project" @click="toggle" src="../assets/eventful.png" alt="eventful" />
        <p v-show="showDesc">
            project description
        </p>
    </div>
</template>

<script>
    export default {
        name: 'Eventful',
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