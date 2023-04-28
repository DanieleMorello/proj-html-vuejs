<script>
import LogoComponent from './LogoComponent.vue';

export default {
  name: "PageHeader",
  components: { LogoComponent },
  data() {
    return {
      menu: [
        {
          text: 'Home',
          href: '#',
          current_page: false
        },
        {
          text: 'About Me',
          href: '#about',
          current_page: false
        },
        {
          text: 'Testimonials',
          href: '#testimonials',
          current_page: false
        },
        {
          text: 'My Blog',
          href: '#articles',
          current_page: false
        },
        {
          text: 'Meetups',
          href: '#author',
          current_page: false
        },
        {
          text: 'Shop',
          href: '#testimonials',
          current_page: false
        },
        {
          text: 'Contact Me',
          href: '#newsletter',
          current_page: false
        },
      ]
    }
  },
}
</script>

<template>
  <header>
    <nav>
      <LogoComponent></LogoComponent>

      <ul>
        <li v-for="item in menu">
          <a :href="item.href">{{ item.text }}</a>
        </li>
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
        <!-- Todo Aggiungere parte Ultimo libro e fix della posizione dei bottoni-->
      </section>
    </div>

  </header>
</template>

<style lang="scss" scoped></style>