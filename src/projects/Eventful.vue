<template>
    <div>
        <mq-layout mq="md+">
            <img class="lg-project" @click="toggle" src="../assets/eventful.png" alt="eventful" />
            <p v-show="showDesc" class="lg-desc">
                <br />
                <br />
                <strong style="padding: 4.5em"> EVENTFUL </strong>
                <br class="project-break" /> Eventful is an event booking app inspired by Meetup built and designed for a group project at General Assembly. The ultimate idea was to allow users to host and rsvp to event accross a bunch of different catergories.
                <br class="project-break" />
                <a href="https://github.com/ashwanth1109/EventfulRails">CODE</a> •
                <a href="https://eventful-rails.herokuapp.com/">LINK</a>
            </p>
        </mq-layout>
        <mq-layout mq="sm">
            <img class="sm-project" @click="toggle" src="../assets/eventful.png" alt="eventful" />
            <p v-show="showDesc">
                <br />
                <br />
                <strong style="padding: 4.5em"> EVENTFUL </strong>
                <br class="project-break" /> Eventful is an event booking app inspired by Meetup built and designed for a group project at General Assembly. The ultimate idea was to allow users to host and rsvp to event accross a bunch of different catergories.
                <br class="project-break" />
                <a href="https://github.com/ashwanth1109/EventfulRails">CODE</a> •
                <a href="https://eventful-rails.herokuapp.com/">LINK</a>
            </p>
        </mq-layout>
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