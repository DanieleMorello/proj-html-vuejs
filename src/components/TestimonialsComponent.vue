<script>
export default {
  name: "TestimonialsComponent",
}
</script>

<template>
  <section id="testimonials">
    <a href="#"><img src="../assets/img/ebay-logotan-2x-200x66.png" alt="Ebay"></a>
    <a href="#"><img src="../assets/img/audible-logotan-2x-200x66.png" alt="Audible"></a>
    <a href="#"><img src="../assets/img/bb-logotan-2x-200x66.png" alt="Barnes"></a>
    <a href="#"><img src="../assets/img/kindlefire-logotan-2x-200x66.png" alt="kindlefire"></a>
  </section>
</template>

<style lang="scss" scoped>
@use '../assets/scss/partials/variables' as *;

#testimonials {
  background-color: $DawnPink;
  padding: 3rem 0;
}
</style>