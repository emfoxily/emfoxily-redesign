<template>
    <main>
      <mq-layout mq="lg">
        <span>
          Display on lg
        </span>
      </mq-layout>
      <mq-layout mq="md+">
        <img class="mdlg-logo" src="../assets/emfoxlogo.png" alt="emfoxily" />
      </mq-layout>
      <mq-layout mq="sm">
        <img class="sm-logo" src="../assets/emfoxlogo.png" alt="emfoxily" />
      </mq-layout>
    </main>
</template>

<script>
import Nav from '../nav/Nav.vue'

export default {
  name: 'Main',
  components: {
    Nav
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
  }

</style>
