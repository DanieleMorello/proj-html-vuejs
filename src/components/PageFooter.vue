<script>
import LogoComponent from './LogoComponent.vue';

export default {
  name: "PageFooter",
  components: { LogoComponent }
}
</script>

<template>
  <footer id="site_footer" class="d-flex">
    <div class="container">
      <div class="row row-cols-4">

        <div class="col">
          <LogoComponent></LogoComponent>
        </div>
        <div class="col">
          <div class="about">
            <h3>About me</h3>
            <p>
              Vivamus suscipit tortor eget felis<br>
              porttitor volutpat. Nulla quis lorem ut libero<br>
              malesuada feugiat. Vivamus suscipit tortor<br>
              eget felis porttitor volutpat.
            </p>
          </div>
          <!-- /.about -->
        </div>

        <div class="col">
          <div class="links">
            <h3>Usefull links</h3>
            <ul class="list-unstyled">
              <li><a href="#"><font-awesome-icon :icon="['fas', 'angle-right']" /> Latest Books</a></li>
              <li><a href="#"><font-awesome-icon :icon="['fas', 'angle-right']" /> Upcoming Events</a></li>
              <li><a href="#"><font-awesome-icon :icon="['fas', 'angle-right']" /> Recent Articles</a></li>
              <li><a href="#"><font-awesome-icon :icon="['fas', 'angle-right']" /> Business Enquiries</a></li>
              <li><a href="#"><font-awesome-icon :icon="['fas', 'angle-right']" /> Visit My Foundation</a></li>
            </ul>
          </div>
          <!-- ./links -->
        </div>

        <div class="col">
          <div class="contact">
            <h3>Contact info</h3>
            <address>
              63 E. Studebaker Street Bolingbrook, IL 60440<br>
              Phone: (800) 000-0000<br>
              Mobile: (800) 000-0000<br>
              Email: info@your-company.com
              <div class="social">
                <ul class="d-flex list-unstyled">
                  <li>
                    <a href="#">
                      <font-awesome-icon :icon="['fab', 'facebook-f']" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <font-awesome-icon :icon="['fab', 'twitter']" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <font-awesome-icon :icon="['fab', 'square-instagram']" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <font-awesome-icon :icon="['fab', 'linkedin-in']" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <font-awesome-icon :icon="['fab', 'youtube']" />
                    </a>
                  </li>
                </ul>
              </div>
            </address>
          </div>
          <!-- /.contact -->
        </div>

      </div>
      <!-- /.row -->

    </div>

    <p>
      &copy; Copyright 2012 - 2020 | Avada Theme by <span>ThemeFusion</span> | All Rights Reserved |
      <span>Powered by WordPress</span>
    </p>
  </footer>
</template>

<style lang="scss" scoped></style>