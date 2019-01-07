<template>
  <main>
    <!-- when screen size is medium screen size and above -->
    <mq-layout mq="md+" class="desktop">
      <header class="lg-header">
        <img class="mdlg-logo" src="../assets/emfoxlogo.png" alt="emfoxily" />
        <DeskAbout />
      </header>
      <DeskNav />
    </mq-layout>
  
    <!-- when screen size is small screen size and below -->
    <mq-layout mq="sm">
      <img class="sm-logo" src="../assets/emfoxlogo.png" alt="emfoxily" />
      <br />
      <hr class="sm-hr" />
      <MobNav class="mobile-nav"/>
      <hr class="sm-hr" />
      <br />
      <MobAbout />
      <!-- <hr class="sm-hr" /> -->
      <br />
      <MobProj />
    </mq-layout>
  </main>
</template>

<script>
  // desktop navigation component
  import DeskNav from '../nav/Desktop.vue'
  
  // mobile navigation component
  import MobNav from '../nav/Mobile.vue'
  
  // about component
  import DeskAbout from '../about/Desktop.vue'

  // mobile about component
  import MobAbout from '../about/Mobile.vue'

  // desktop projects component
  import DeskProj from '../projects/Desktop.vue'

  // mobile projects component
  import MobProj from '../projects/Mobile.vue'
  
  export default {
    name: 'Main',
    components: {
      DeskNav,
      MobNav,
      DeskAbout,
      MobAbout,
      DeskProj,
      MobProj
    },
    computed: {
      displayText() {
        return this.$mq === 'sm' ? 'I am small' : 'I am large'
      }
    }
  }
</script>

<style scope>

  /* desktop header */

  header.lg-header {
    display: flex;
  }
  
  /* small logo */
  
  img.sm-logo {
    display: block;
    width: 90%;
    margin: 0 auto;
  }
  
  
  /* medium and large logo */
  
  img.mdlg-logo {
    width: 40%;
    margin: 5vw;
    align-self: center;
  }

  /* sm, md, & lg logo */

  img.sm-logo, img.mdlg-logo {
    animation: blur 2s;
    transition: 1s linear;
  }

  @keyframes blur {
    0% {
      filter: blur(25px);
      -webkit-filter: blur(25px);
    }
    100% {
      filter: blur(0px);
      -webkit-filter: blur(0px);
    }
  }

  /* small horizontal rule */

  hr.sm-hr {
    border: 1px solid #222;
    width: 105%;
    margin: 1vw -3vw;
  }
</style>
