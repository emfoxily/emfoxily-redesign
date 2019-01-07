<template>
    <div>
        <img class="project" @click="toggle" src="../assets/connect4.png" alt="wingardium leviosfour" />
        <p v-show="showDesc">
            <strong>The best game in the wizarding world since Wizard's Chess!</strong> Represent your Hogwarts house in this revamped version of Connect Four! Each player will select their house and the first player that does so, makes the first move. Whoever
            gets four in a row vertically or horizontally, wins! Go to this website to play!
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
