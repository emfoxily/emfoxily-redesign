<template>
    <div>
        <div>
            <img class="project" @click="toggle()" src="../assets/connect4.png" alt="wingardium leviosfour" />
            <p v-show="showDesc">
                project description
            </p>
        </div>
        <div>
            <img class="project" @click="toggle" src="../assets/laughsock.png" alt="laughing sock" />
            <p v-show="showDesc">
                project description
            </p>
        </div>
        <div>
            <img class="project" @click="toggle" src="../assets/ollivanders.png" alt="ollivanders" />
            <p v-show="showDesc">
                project description
            </p>
        </div>
        <div>
            <img class="project" @click="toggle" src="../assets/speculook.png" alt="speculook" />
            <p v-show="showDesc">
                project description
            </p>
        </div>
        <div>
            <img class="project" @click="toggle" src="../assets/eventful.png" alt="eventful" />
            <p v-show="showDesc">
                project description
            </p>
        </div>
        <div>
            <img class="project" @click="toggle" src="../assets/santasworkshop.png" alt="santa's workshop" />
            <p v-show="showDesc">
                project description
            </p>
        </div>
        <div>
            <img class="project" @click="toggle" src="../assets/codemas.png" alt="codemas" />
            <p v-show="showDesc">
                project description
            </p>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Projects',
        data() {
            return {
                showDesc: false,
            }
        },
        methods: {
            toggle() {
                this.showDesc = !this.showDesc
            }
        }
    }
</script>
