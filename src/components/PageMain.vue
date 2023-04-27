<script>
import AboutComponent from './AboutComponent.vue';
import TestimonialsComponent from './TestimonialsComponent.vue';

export default {
  name: "PageMain",
  components: { AboutComponent, TestimonialsComponent }
}
</script>

<template>
  <AboutComponent></AboutComponent>
  <TestimonialsComponent></TestimonialsComponent>
</template>