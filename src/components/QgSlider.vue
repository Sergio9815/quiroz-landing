<template>
  <div class="glide__container">
      <div class="glide">

        <div class="glide__track" data-glide-el="track">
          <ul class="glide__slides">

            <li class="glide__slide">
              <figure class="about--desc-img">
                <img class="img-ab" src="../assets/images/cli-1.jpeg" alt="">
                  <figcaption class="img-desc">
                    <i v-for="i in 5" :key="i" class="far fa-star"></i>
                  </figcaption>
              </figure>
            </li>

            <li class="glide__slide">
              <figure class="about--desc-img">
                <img class="img-ab" src="../assets/images/cli-2.jpeg" alt="">
                  <figcaption class="img-desc">
                    <i v-for="i in 5" :key="i" class="far fa-star"></i>
                  </figcaption>
              </figure>
            </li>

            <li class="glide__slide">
              <figure class="about--desc-img">
                <img class="img-ab" src="../assets/images/cli-3.jpeg" alt="">
                  <figcaption class="img-desc">
                    <i v-for="i in 5" :key="i" class="far fa-star"></i>
                  </figcaption>
              </figure>
            </li>

            <li class="glide__slide">
              <figure class="about--desc-img">
                <img class="img-ab" src="../assets/images/cli-4.jpeg" alt="">
                  <figcaption class="img-desc">
                    <i v-for="i in 5" :key="i" class="far fa-star"></i>
                  </figcaption>
              </figure>
            </li>

            <li class="glide__slide">
              <iframe width="560" height="350" src="https://www.youtube.com/embed/QGjJmIbnrOw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </li>

            <li class="glide__slide">
              <iframe width="560" height="350" src="https://www.youtube.com/embed/U1yCWi9L-ec" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </li>

            <li class="glide__slide">
              <iframe width="560" height="350" src="https://www.youtube.com/embed/sjmuOeyZ48U" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </li>

            <li class="glide__slide">
              <iframe width="560" height="350" src="https://www.youtube.com/embed/_KLr6jtOXAc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </li>

            <li class="glide__slide">
              <iframe width="560" height="350" src="https://www.youtube.com/embed/sdF-OCCVeHY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </li>

            <li class="glide__slide">
              <iframe width="560" height="350" src="https://www.youtube.com/embed/dR8ok3BPIY0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </li>

            <li class="glide__slide">
              <iframe width="560" height="350" src="https://www.youtube.com/embed/QLDtsTnEdGI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </li>

            <li class="glide__slide">
              <iframe width="560" height="350" src="https://www.youtube.com/embed/qRr7jYyehq0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </li>

          </ul>
        </div>

        <div
          class="glide__arrows" data-glide-el="controls">
          <button :class="activate ? 'zindex' : 'zindexOff'"
              class="glide__arrow glide__arrow--left" data-glide-dir="<"><i
              class="fas fa-chevron-left"></i>
          </button>
          <button :class="activate ? 'zindex' : 'zindexOff'"
              class="glide__arrow glide__arrow--right" data-glide-dir=">"><i
              class="fas fa-chevron-right"></i>
          </button>
        </div>

        <div :class="activate ? 'zindex' : 'zindexOff'"
          class="glide__bullets" data-glide-el="controls[nav]">
          <button class="glide__bullet" data-glide-dir="=0"></button>
          <button class="glide__bullet" data-glide-dir="=1"></button>
          <button class="glide__bullet" data-glide-dir="=2"></button>
          <button class="glide__bullet" data-glide-dir="=3"></button>
          <button class="glide__bullet" data-glide-dir="=4"></button>
          <button class="glide__bullet hide-bullet" data-glide-dir="=5"></button>
          <button class="glide__bullet hide-bullet" data-glide-dir="=6"></button>
          <button class="glide__bullet hide-bullet" data-glide-dir="=7"></button>
          <button class="glide__bullet hide-bullet" data-glide-dir="=8"></button>
        </div>

      </div>
    </div>

</template>

<script>
import Glide from '@glidejs/glide';

export default {
  name: 'QgSlider',
  props: {
    activate: Boolean,
  },
  mounted() {
    const glide = new Glide('.glide', {
      type: 'slider',
      perView: 3,
      focusAt: 0,
      bound: true,
      rewind: true,
      hoverpause: true,
      autoplay: '5000',
      breakpoints: {
        1382: {
          perView: 2.8,
        },
        1290: {
          perView: 2,
        },
        926: {
          perView: 1,
        },
      },
    });

    glide.mount();
  },
};
</script>

<style scoped>
  @import url(../styles/glide.theme.css);
  @import url(../styles/glide.default.css);

  .zindex {
    z-index: -2;
  }

  .zindexOff {
    z-index: 0;
  }

  .glide__container {
    width: 90%;
    height: 70vh;
    /* background-color: beige; */
    display: flex;
    align-items: center;
    justify-content: center;
  }

  /* --- --- -- Images design -- --- --- */

  .about--desc-img {
    border: none;
    padding: 0;
    width: 400px;
    background-color: white;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19);
  }

  .img-ab {
    width: 400px;
    height: 300px;
  }

  .img-desc {
    padding: 10px 20px;
    text-align: center;
    color: var(--yellow);
  }

  .fa-star {
    display: inline-block;
    margin-right: 5px;
  }

  /* --- --- -- Video design -- --- --- */
  .test-video {
    height: 350px;
  }

/* --- --- -- Responsive design -- --- --- */
@media only screen and (max-width: 523px) {
  .glide__container {
    height: 60vh;
  }
}

</style>
