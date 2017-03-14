<template lang="html">
  <div class="container">
    <h1>About this project</h1>
    <p v-html='message'></p>
    <h1>frontend with:</h1>
    <ol>
      <li> <a href="https://vuejs.org">Vue.js</a></li>
      <li> <a href="https://github.com/xlsdg/vue-echarts-v3">vue-echarts-v3</a></li>


    </ol>
    <h1>By: <br />Gang Zhao</h1>
      <ul>
        <li><a href="https://www.freecodecamp.com/crumpx"><i class="fa fa-free-code-camp" aria-hidden="true"></i></a></li>
        <li><a href="https://github.com/crumpx"><i class="fa fa-github" aria-hidden="true"></i></a></li>
        <li><a href="http://crumpz.info/www.linkedin.com/in/gang-zhao-198201"><i class="fa fa-linkedin" aria-hidden="true"></i></a></li>
      </ul>

  </div>
</template>

<script>
export default {
  name: 'about',
  data () {
    return {
      message: `<p>A simple frontend project for Free Code Camp Poll project
      Backend is Node.js, Express and Mongoose(mongodb). There are alot of
      functionalities such as user authentication, poll modification, delete,
      etc. not yet implemented.</p>`,
    }
  },
}
</script>

<style lang="sass" scoped>
  .container
    font-family: 'Open Sans', sans-serif
    width: 100%
    max-width: 790px
    margin: 0 auto
    ul
      list-style: none
      text-align: center
      padding: 0

      li
        display: inline-block

        a
          font-size: 200%
          margin: 10px
          text-decoration: none
          color: #000
    h1
      text-align: center
    p
      padding: 0 10px
      font-size: 120%
      &::first-letter
        text-transform: uppercase
        font-size: 140%
        font-weight: 700

</style>
