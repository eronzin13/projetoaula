<script setup></script>

<template>
  <header>home | Jogadores | Time</header>
  <main>Main</main>
  <footer>Rodapé</footer>
</template>

<style>
@import "@/assets/base.css";

#app {
  max-width: 1280px;
  margin: 0 auto;
  /* padding: 2rem; */
  height: 100vh;

  font-weight: normal;
}
header,
footer {
  background-color: pink;
  color: red;
  font-size: 1.3rem;
  height: 15%;
  display: flex;
  align-items: center;
  padding-left: 2rem;
}

main {
  height: 70%;
}
</style>
