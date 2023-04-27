import { createApp } from "vue";
import "./assets/scss/app.scss";
import App from "./App.vue";
/* import the fontawesome core */
import { library } from "@fortawesome/fontawesome-svg-core";

/* import font awesome icon component */
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

/* import specific icons */
import {
  faAngleRight,
  faArrowLeft,
  faArrowRight,
  faCartShopping,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebookF,
  faInstagramSquare,
  faLinkedinIn,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

/* add icons to the library */
library.add(
  faCartShopping,
  faArrowLeft,
  faArrowRight,
  faAngleRight,
  faFacebookF,
  faTwitter,
  faInstagramSquare,
  faLinkedinIn,
  faYoutube
);
createApp(App).component("font-awesome-icon", FontAwesomeIcon).mount("#app");
