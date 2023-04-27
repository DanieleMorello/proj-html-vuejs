<script>

export default {
  name: 'PageHeader'
}
</script>

<template>
  <header>
    <nav>
      <div>
        <img src="../assets/img/author-logo-round-small.png" alt="Logo">
      </div>

      <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#">About Me</a></li>
        <li><a href="#">Testimonials</a></li>
        <li><a href="#">My Blog</a></li>
        <li><a href="#">Meetups</a></li>
        <li><a href="#">Shop</a></li>
        <li><a href="#">Contact Me</a></li>
        <li><a href="#"><font-awesome-icon :icon="['fas', 'cart-shopping']" /></a></li>
      </ul>
    </nav>

    <div class="container">
      <section class="my_container">
        <h1>Damon Vaughn</h1>
        <h2>
          Best-selling author and the most <br>
          influential public intellectual in the <br>
          avoctors world richt now.
        </h2>
        <p>-The New York Times</p>
        <button class="left border-0 rounded-1"><font-awesome-icon :icon="['fas', 'arrow-left']" /></button>
        <button class="right border-0 rounded-1"><font-awesome-icon :icon="['fas', 'arrow-right']" /></button>
      </section>
    </div>

  </header>
</template>

<style lang="scss" scoped></style>