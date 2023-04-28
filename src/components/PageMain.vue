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
  <!-- Todo CSS -->
  <section id="critics">
    <div class="container d-flex justify-content-between">
      <div>
        <h3>What The Critics Say</h3>
        <h4 class="text-success">TESTIMONIALS FROM AROUND THE WORLD</h4>
      </div>

      <a href="#" class="border-0 rounded-2">Read All Testimonials</a>
    </div>
    <div class="container d-flex">
      <div class="card my_card box text-center mt-5 h-100">
        <div class="card-body d-flex justify-content-end  align-content-center flex-column text-white">
          <h2 class="card-title mt-5">Best Author Of His Generation</h2>
          <hr class="text-white-50 ms-5">
          <h4 class="pb-5">This book will change your perspective on life</h4>
          <p class="px-5">
            Donec fringilla nunc eu turpis dignissim, at euismod sapien
            tincidunt. Maecenas eleifend congue cursus. In vita enim quis sem
            pharetra.Curabitur arcu erat, accumsan id imperdiet et, porttitor at
            sem.<br><br>
            Donec rutrum congue leo eget malesuada. Vivamus suscipit tortor
            eget felis porttitor volutpat. Nulla quis lorem ut liber. Proin eget
            tortor risus. Praesent sapien massa, convallis a pellentesque nec,
            egestas non nisi. Donec rutrum congue leo eget malesuada.
          </p>
          <img class="pb-0" width="50px" src="../assets/img/nytimes-logo-white-xsmall.png" alt="">
          <p class="pb-5">Justine Kilpatrick, <span class="text-success">The New York Times</span></p>
        </div>
      </div>

      <div>
        <div class="card bg_card mt-5 h-50 rounded-0 ms-5 d-flex justify-content-center">

          <h2 class="card-title text-center">A True Masterpiece, Bravo!</h2>
          <p class="card-subtitle ps-5 text-secondary">
            Nulla quis lorem ut libero malesuada feugiat.
            Vivamus magna justo, lacinia eget consectetur
            sed, convallis at tellus. Vivamus suscipit tortor
            eget felis porttitor volutpat. Nulla quis lorem ut
            libero malesuada feug at.
          </p>

        </div>

        <div class="ms-5 mt-4">
          <img src="../assets/img/theguardian-xsmall.png" alt="">
          Gerald Hendley, The Guardian
        </div>

        <div class="card bg_card mt-5 h-50 rounded-0 ms-5 d-flex justify-content-center">

          <h2 class="card-title text-center">A Unique View On The World</h2>
          <p class="card-subtitle ps-5 text-secondary">
            Donec sollicitudin molestie malesuada.
            Curabitur arcu erat, accumsan id imperdiet et,
            porttitor at sem. Vestibulum ac diam sit amet
            quam vehicula elementum sed sit amet dui.
            Nulla quis lorem ut libero malesuada feugiat.
            Vestibulum ac diam sit amet.
          </p>

        </div>

        <div class="ms-5 mt-4">
          <img src="../assets/img/globe-xsmall.png" alt="">
          Mary Maxey, The Globe And Mail
        </div>
      </div>

    </div>
  </section>


  <section id="events">
    <h2>Upcoming Events</h2>
    <h4>MEET THE AUTHOR IN PERSON</h4>
    <div class="container d-flex justify-content-center">
      <div class="card m-3" style="width: 18rem;">
        <img src="../assets/img/event-05-200x120.jpg" class="card-img-top rounded-0" alt="...">
        <div class="card-body">
          <h5 class="card-title">Chicago Book Signing</h5>
          <hr>
          <p class="card-text">
            Mauris blandit aliquet elit, eget tincidunt nibt
            pulvinar a. Mauris blandit aliquet elit, eget
            tincidunt nihh pulviner a nulla.
          </p>
        </div>
      </div>

      <div class="card m-3" style="width: 18rem;">
        <img src="../assets/img/event-04-200x120.jpg" class="card-img-top rounded-0" alt="...">
        <div class="card-body">
          <h5 class="card-title">Meet & Greet With Amanda</h5>
          <hr>
          <p class="card-text">
            Mauris blandit aliquet elit, eget tincidunt nibh
            pulvinar a. Present sapien massa, convallis a
            pellentesque nec, egestas.
          </p>
        </div>
      </div>

      <div class="card m-3" style="width: 18rem;">
        <img src="../assets/img/event-07-200x120.jpg" class="card-img-top rounded-0" alt="...">
        <div class="card-body">
          <h5 class="card-title">Open Book: Dialogues</h5>
          <hr>
          <p class="card-text">
            Mauris blandit aliquet elit, get tincidunt nibh
            pulvinar a. Mauris blandit aliquet elit, eget
            tincidunt nibh pulvinar a nulla.
          </p>
        </div>
      </div>
    </div>

  </section>
  <!-- /#events -->

  <section id="newsletter">
    <h2 class="pt-5 pb-5">Subscribe To My <br> Newsletter</h2>
    <h4>BE NOTIFIED ABOUT BOOK SIGNING TOUR DATES</h4>
    <div class="container">
      <div class="d-flex justify-content-center">
        <form class="row g-3">
          <div class="col-auto">
            <input type="email" placeholder="Insert your email,...*" class="p-2 rounded-1 border-0">
          </div>
          <div class="col-auto">
            <button class="button rounded-1 border-0">Subscribe</button>
          </div>
        </form>

      </div>
      <p class="m-0">Donec fringilla nunc eu turpis dignissim, at euismod sapien<br>tincidunt.</p>
    </div>


  </section>
  <!-- /#newsletter -->

  <section id="author">
    <h2 class="pt-5">Dig A Little Deeper Into Damon Vaughn</h2>
    <h4 class="pt-3 pb-5">FIND OUT MORE ABOUT THE AUTHOR HIMSELF</h4>
    <div class="container d-flex justify-content-between">
      <div class="card my_card box1 text-center">
        <div class="card-body d-flex justify-content-end  align-content-center flex-column">
          <h2 class="card-title text-white">About Me</h2>
          <hr class="text-secondary ms-5">
          <h6 class="card-subtitle mb-5 ps-5 text-warning">Vestibulum ante ipsum primis</h6>
        </div>
      </div>

      <div class="card my_card box2 text-center">
        <div class="card-body d-flex justify-content-end  align-content-center flex-column">
          <h2 class="card-title text-white">My Latest Book</h2>
          <hr class="text-secondary ms-5">
          <h6 class="card-subtitle mb-5 ps-5 text-warning">Vestibulum ante ipsum primis</h6>
        </div>
      </div>

      <div class="card my_card box3 text-center">
        <div class="card-body d-flex justify-content-end  align-content-center flex-column">
          <h2 class="card-title text-white">Book Signing</h2>
          <hr class="text-secondary ms-5">
          <h6 class="card-subtitle mb-5 ps-5 text-warning">Vestibulum ante ipsum primis</h6>
        </div>
      </div>
    </div>

  </section>
  <!-- ./#author -->

  <section id="articles">
    <div class="container d-flex justify-content-between">
      <div>
        <h2>Recent Articles</h2>
        <h5>READ THE LATEST ENTRIES</h5>
      </div>

      <a href="#" class="border-0 rounded-2">All Articles</a>
    </div>
    <div class="container d-flex">
      <div class="card my-5 h-25 rounded-0">
        <img src="../assets/img/20-Tips-1200x706.jpg" class="card-img-top rounded-0 p-5" alt="...">
        <div class="card-body">
          <h5 class="card-title ps-5">20 Creativity Tips</h5>
          <h6 class="card-subtitle mb-2 text-muted ps-5">By admin | October 24th, 2019 | Categories: Event, Tips & Tricks
          </h6>
          <p class="card-text ps-5 mb-5">
            Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae;
            Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet.
          </p>
        </div>
      </div>

      <div class="card my-5 ms-5 h-100 rounded-0">
        <img src="../assets/img/thumb-13-2x-320x202.jpg" class="card-img-top rounded-0 pt-5 px-5" alt="...">
        <div class="card-body">
          <h5 class="card-title px-3">What's On Your Booklist?</h5>
          <h6 class="card-subtitle px-2 mb-2 text-muted">October 24th, 2019 | 0 Comments</h6>
          <img src="../assets/img/thumb-08-2x-320x202.jpg" class="card-img-top rounded-0 pt-5 px-3" alt="...">
          <h5 class="card-title pt-3 px-3">Istanbul Travel Guide</h5>
          <h6 class="card-subtitle ps-3 mb-2 text-muted">October 24th, 2019 | O Comments</h6>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@use '../assets/scss/partials/variables' as *;

#critics {
  padding: 7rem 0;

  .bg_card {
    background-color: #fef7e9;
  }

  a {
    color: $White;
    background-color: $Saffron;
    text-decoration: none;
    width: 16rem;
    height: 3rem;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .my_card {
    border-top-left-radius: 0;
    border-top-right-radius: 0;
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 15%;
  }

  .box {
    background-image: url("../assets/img/testimonial2-2x.jpg");
    background-repeat: no-repeat;
    background-color: black;
    background-size: cover;
  }
}


#events {
  background-color: #fef7e9;
  padding: 2rem;
  margin-top: 10rem;

  h4 {
    color: $Saffron;
  }

  h2,
  h4 {
    text-align: center;
  }

}

#newsletter {
  h2 {
    font-size: 3rem;
    color: $White;
  }

  h4 {
    color: $Saffron;
  }

  p {
    color: $Pumice;
    padding-bottom: 6rem;
  }

  input,
  .button {
    margin-top: 3rem;
  }

  .button {
    color: $White;
    background-color: $KeppelDarkVibrant;
  }

  text-align: center;
  background-image: url("../assets/img/banner-2.jpg");

}

#author {

  h2,
  h4 {
    text-align: center;
  }

  h4 {
    color: $KeppelDarkVibrant;
  }

  .box1 {
    background-image: url("../assets/img/box-1.jpg");
  }

  .box2 {
    background-image: url("../assets/img/box-4.jpg");
    background-size: cover;
  }

  .box3 {
    background-image: url("../assets/img/box-3.jpg");
  }

  .my_card {
    background-repeat: no-repeat;
    border-top-left-radius: 0;
    border-top-right-radius: 0;
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 15%;
    width: 410px;
    height: 500px;
    margin-bottom: 6rem;
  }

  hr {
    width: 10%;
  }
}

#articles {
  background-color: $DawnPink;
  padding-top: 6rem;

  h5 {
    color: $KeppelDarkVibrant;
  }

  a {
    color: $White;
    background-color: $Saffron;
    text-decoration: none;
    padding-top: .5rem 1rem;
    height: 3rem;
    width: 16rem;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
</style>