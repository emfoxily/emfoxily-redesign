<template>
    <div>
        <img class="project" @click="toggle" src="../assets/laughsock.png" alt="laughing sock" />
        <p v-show="showDesc">
            project description
        </p>
    </div>
</template>
 
<script>
    export default {
        name: 'Laughsock',
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
 