<template>
  <div id="wrapper">
    <main>
      <GameContent></GameContent>
    </main>
  </div>
</template>

<script>
  import GameContent from './LandingPage/GameContent'

  export default {
    name: 'landing-page',
    components: { GameContent },
    methods: {
      open (link) {
        this.$electron.shell.openExternal(link)
      }
    }
  }
</script>

<style>
  @import url('https://fonts.font.im/css?family=Source+Sans+Pro');

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body { font-family: 'Source Sans Pro', sans-serif; }

  #wrapper {
    background:
      radial-gradient(
        ellipse at top left,
        rgba(255, 255, 255, 1) 40%,
        rgba(229, 229, 229, .9) 100%
      );
    height: 100%;
    padding: auto;
    width: 100%;
  }

  
</style>
