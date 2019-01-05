<template>
  <main>
    <!-- when screen size is medium screen size and above -->
    <mq-layout mq="md+">
      <img class="mdlg-logo" src="../assets/emfoxlogo.png" alt="emfoxily" />
    </mq-layout>
  
    <!-- when screen size is small screen size and below -->
    <mq-layout mq="sm">
      <img class="sm-logo" src="../assets/emfoxlogo.png" alt="emfoxily" />
      <br />
      <hr class="sm-hr" />
      <MobNav />
      <hr class="sm-hr" />
      <br />
      <About />
    </mq-layout>
  </main>
</template>

<script>
  // desktop navigation component
  import Nav from '../nav/Nav.vue'
  
  // mobile navigation component
  import MobNav from '../nav/Mobile.vue'
  
  // about component
  import About from '../about/About.vue'
  
  export default {
    name: 'Main',
    components: {
      Nav,
      MobNav,
      About
    },
    computed: {
      displayText() {
        return this.$mq === 'sm' ? 'I am small' : 'I am large'
      }
    }
  }
</script>

<style scope>
  /* small logo */
  
  img.sm-logo {
    display: block;
    width: 90%;
    margin: 0 auto;
  }
  
  
  /* medium and large logo */
  
  img.mdlg-logo {
    width: 50%;
    margin: 0 5vw;
  }

  /* small horizontal rule */

  hr.sm-hr {
    border: 1px solid #222;
    width: 105%;
    margin: 1vw -3vw;
  }
</style>
