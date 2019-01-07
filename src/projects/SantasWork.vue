<template>
    <div>
        <img class="project" @click="toggle" src="../assets/santasworkshop.png" alt="santa's workshop" />
        <p v-show="showDesc">
            project description
        </p>
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