<template>
    <div class="desktop-flex">
        <Leviosfour />
        <br />
        <br />
        <br />
        <Laughsock />
        <br />
        <Ollivanders />
        <br />
        <Speculook />
        <br />
        <Eventful />
        <br />
        <SantasWork />
        <br />
        <Codemas />
    </div>
</template>

<script>
    import Leviosfour from '../projects/Leviosfour.vue'
    import Laughsock from '../projects/Laughsock.vue'
    import Ollivanders from '../projects/Ollivanders.vue'
    import Speculook from '../projects/Speculook.vue'
    import Eventful from '../projects/Eventful.vue'
    import SantasWork from '../projects/SantasWork.vue'
    import Codemas from '../projects/Codemas.vue'
    
    export default {
        name: 'Projects',
        components: {
            Leviosfour,
            Laughsock,
            Ollivanders,
            Speculook,
            Eventful,
            SantasWork,
            Codemas
        },
    }
</script>
