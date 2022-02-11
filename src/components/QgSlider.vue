<template>
  <div class="glide__container">
      <div class="glide">

        <div class="glide__track" data-glide-el="track">
          <ul class="glide__slides">

            <!-- PLANTILLA PARA COLOCAR VIDEOS EN EL CAROUSEL -->
            <!-- Para agregar un nuevo video debe primero subirlo a YouTube y
            pegar el id del video en la propiedad
            vid="id-del-video"  -->

            <li class="glide__slide">
              <div class="test__video-container">
                <YoutubeEmbedLite
                  vid="rl6numqqxSY" <!-- LLSKFFDS -->
                  thumb-quality="hq"
                  :params="{start: 0}"
                  class="test__video"
                />
                <div class="img-desc">
                  <svg v-for="i in 5" :key="i" aria-hidden="true" focusable="false" data-prefix="far" data-icon="star" class="svg-inline--fa fa-star fa-w-18" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="currentColor" d="M528.1 171.5L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6zM388.6 312.3l23.7 138.4L288 385.4l-124.3 65.3 23.7-138.4-100.6-98 139-20.2 62.2-126 62.2 126 139 20.2-100.6 98z"></path></svg>
                </div>
              </div>
            </li>

            <li class="glide__slide">
              <div class="test__video-container">
                <YoutubeEmbedLite
                  vid="gqdcXWFAIW0"
                  thumb-quality="hq"
                  :params="{start: 0}"
                  class="test__video"
                />
                <div class="img-desc">
                  <svg v-for="i in 5" :key="i" aria-hidden="true" focusable="false" data-prefix="far" data-icon="star" class="svg-inline--fa fa-star fa-w-18" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="currentColor" d="M528.1 171.5L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6zM388.6 312.3l23.7 138.4L288 385.4l-124.3 65.3 23.7-138.4-100.6-98 139-20.2 62.2-126 62.2 126 139 20.2-100.6 98z"></path></svg>
                </div>
              </div>
            </li>

            <li class="glide__slide">
              <div class="test__video-container">
                <YoutubeEmbedLite
                  vid="QGjJmIbnrOw"
                  thumb-quality="hq"
                  :params="{start: 0}"
                  class="test__video"
                />
                <div class="img-desc">
                  <svg v-for="i in 5" :key="i" aria-hidden="true" focusable="false" data-prefix="far" data-icon="star" class="svg-inline--fa fa-star fa-w-18" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="currentColor" d="M528.1 171.5L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6zM388.6 312.3l23.7 138.4L288 385.4l-124.3 65.3 23.7-138.4-100.6-98 139-20.2 62.2-126 62.2 126 139 20.2-100.6 98z"></path></svg>
                </div>
              </div>
            </li>

            <li class="glide__slide">
              <div class="test__video-container">
                <YoutubeEmbedLite
                  vid="U1yCWi9L-ec"
                  thumb-quality="hq"
                  :params="{start: 0}"
                  class="test__video"
                />
                <div class="img-desc">
                  <svg v-for="i in 5" :key="i" aria-hidden="true" focusable="false" data-prefix="far" data-icon="star" class="svg-inline--fa fa-star fa-w-18" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="currentColor" d="M528.1 171.5L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6zM388.6 312.3l23.7 138.4L288 385.4l-124.3 65.3 23.7-138.4-100.6-98 139-20.2 62.2-126 62.2 126 139 20.2-100.6 98z"></path></svg>
                </div>
              </div>
            </li>

            <li class="glide__slide">
              <div class="test__video-container">
                  <YoutubeEmbedLite
                    vid="sjmuOeyZ48U"
                    thumb-quality="hq"
                    :params="{start: 0}"
                    class="test__video"
                  />
                <div class="img-desc">
                  <svg v-for="i in 5" :key="i" aria-hidden="true" focusable="false" data-prefix="far" data-icon="star" class="svg-inline--fa fa-star fa-w-18" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="currentColor" d="M528.1 171.5L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6zM388.6 312.3l23.7 138.4L288 385.4l-124.3 65.3 23.7-138.4-100.6-98 139-20.2 62.2-126 62.2 126 139 20.2-100.6 98z"></path></svg>
                </div>
              </div>
            </li>

            <li class="glide__slide">
              <div class="test__video-container">
                  <YoutubeEmbedLite
                    vid="_KLr6jtOXAc"
                    thumb-quality="hq"
                    :params="{start: 0}"
                    class="test__video"
                  />
                <div class="img-desc">
                  <svg v-for="i in 5" :key="i" aria-hidden="true" focusable="false" data-prefix="far" data-icon="star" class="svg-inline--fa fa-star fa-w-18" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="currentColor" d="M528.1 171.5L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6zM388.6 312.3l23.7 138.4L288 385.4l-124.3 65.3 23.7-138.4-100.6-98 139-20.2 62.2-126 62.2 126 139 20.2-100.6 98z"></path></svg>
                </div>
              </div>
            </li>

            <li class="glide__slide">
              <div class="test__video-container">
                  <YoutubeEmbedLite
                    vid="sdF-OCCVeHY"
                    thumb-quality="hq"
                    :params="{start: 0}"
                    class="test__video"
                  />
                <div class="img-desc">
                  <svg v-for="i in 5" :key="i" aria-hidden="true" focusable="false" data-prefix="far" data-icon="star" class="svg-inline--fa fa-star fa-w-18" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="currentColor" d="M528.1 171.5L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6zM388.6 312.3l23.7 138.4L288 385.4l-124.3 65.3 23.7-138.4-100.6-98 139-20.2 62.2-126 62.2 126 139 20.2-100.6 98z"></path></svg>
                </div>
              </div>
            </li>

            <li class="glide__slide">
              <div class="test__video-container">
                  <YoutubeEmbedLite
                    vid="dR8ok3BPIY0"
                    thumb-quality="hq"
                    :params="{start: 0}"
                    class="test__video"
                  />
                <div class="img-desc">
                  <svg v-for="i in 5" :key="i" aria-hidden="true" focusable="false" data-prefix="far" data-icon="star" class="svg-inline--fa fa-star fa-w-18" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="currentColor" d="M528.1 171.5L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6zM388.6 312.3l23.7 138.4L288 385.4l-124.3 65.3 23.7-138.4-100.6-98 139-20.2 62.2-126 62.2 126 139 20.2-100.6 98z"></path></svg>
                </div>
              </div>
            </li>

            <li class="glide__slide">
              <div class="test__video-container">
                  <YoutubeEmbedLite
                    vid="QLDtsTnEdGI"
                    thumb-quality="hq"
                    :params="{start: 0}"
                    class="test__video"
                  />
                  <div class="img-desc">
                    <svg v-for="i in 5" :key="i" aria-hidden="true" focusable="false" data-prefix="far" data-icon="star" class="svg-inline--fa fa-star fa-w-18" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="currentColor" d="M528.1 171.5L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6zM388.6 312.3l23.7 138.4L288 385.4l-124.3 65.3 23.7-138.4-100.6-98 139-20.2 62.2-126 62.2 126 139 20.2-100.6 98z"></path></svg>
                  </div>
              </div>
            </li>

            <li class="glide__slide">
              <div class="test__video-container">
                  <YoutubeEmbedLite
                    vid="qRr7jYyehq0"
                    thumb-quality="hq"
                    :params="{start: 0}"
                    class="test__video"
                  />
                  <div class="img-desc">
                    <svg v-for="i in 5" :key="i" aria-hidden="true" focusable="false" data-prefix="far" data-icon="star" class="svg-inline--fa fa-star fa-w-18" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="currentColor" d="M528.1 171.5L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6zM388.6 312.3l23.7 138.4L288 385.4l-124.3 65.3 23.7-138.4-100.6-98 139-20.2 62.2-126 62.2 126 139 20.2-100.6 98z"></path></svg>
                  </div>
              </div>
            </li>

            <!-- PLANTILLA PARA COLOCAR IMAGENES EN EL CAROUSEL -->
            <!-- Para agregar una nueva imagen copiar la plantilla
            que se encuentra debado
            y cambiar la ruta de la imagen -->

            <li class="glide__slide">
              <figure class="about--desc-img">
                <img class="img-ab" src="../assets/images/cli-1.webp" alt="">
                  <figcaption class="img-desc">
                    <svg v-for="i in 5" :key="i" aria-hidden="true" focusable="false" data-prefix="far" data-icon="star" class="svg-inline--fa fa-star fa-w-18" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="currentColor" d="M528.1 171.5L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6zM388.6 312.3l23.7 138.4L288 385.4l-124.3 65.3 23.7-138.4-100.6-98 139-20.2 62.2-126 62.2 126 139 20.2-100.6 98z"></path></svg>
                  </figcaption>
              </figure>
            </li>

            <li class="glide__slide">
              <figure class="about--desc-img">
                <img class="img-ab" src="../assets/images/cli-2.webp" alt="">
                  <figcaption class="img-desc">
                    <svg v-for="i in 5" :key="i" aria-hidden="true" focusable="false" data-prefix="far" data-icon="star" class="svg-inline--fa fa-star fa-w-18" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="currentColor" d="M528.1 171.5L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6zM388.6 312.3l23.7 138.4L288 385.4l-124.3 65.3 23.7-138.4-100.6-98 139-20.2 62.2-126 62.2 126 139 20.2-100.6 98z"></path></svg>
                  </figcaption>
              </figure>
            </li>

            <li class="glide__slide">
              <figure class="about--desc-img">
                <img class="img-ab" src="../assets/images/cli-3.webp" alt="">
                  <figcaption class="img-desc">
                    <svg v-for="i in 5" :key="i" aria-hidden="true" focusable="false" data-prefix="far" data-icon="star" class="svg-inline--fa fa-star fa-w-18" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="currentColor" d="M528.1 171.5L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6zM388.6 312.3l23.7 138.4L288 385.4l-124.3 65.3 23.7-138.4-100.6-98 139-20.2 62.2-126 62.2 126 139 20.2-100.6 98z"></path></svg>
                  </figcaption>
              </figure>
            </li>

            <li class="glide__slide">
              <figure class="about--desc-img">
                <img class="img-ab" src="../assets/images/cli-4.webp" alt="">
                  <figcaption class="img-desc">
                    <svg v-for="i in 5" :key="i" aria-hidden="true" focusable="false" data-prefix="far" data-icon="star" class="svg-inline--fa fa-star fa-w-18" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="currentColor" d="M528.1 171.5L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6zM388.6 312.3l23.7 138.4L288 385.4l-124.3 65.3 23.7-138.4-100.6-98 139-20.2 62.2-126 62.2 126 139 20.2-100.6 98z"></path></svg>
                  </figcaption>
              </figure>
            </li>

          </ul>
        </div>

        <div
          class="glide__arrows" data-glide-el="controls">
          <button :class="activate ? 'zindex' : 'zindexOff'"
              class="glide__arrow glide__arrow--left" data-glide-dir="<">
              <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="chevron-left" class="svg-inline--fa fa-chevron-left fa-w-10" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path fill="currentColor" d="M34.52 239.03L228.87 44.69c9.37-9.37 24.57-9.37 33.94 0l22.67 22.67c9.36 9.36 9.37 24.52.04 33.9L131.49 256l154.02 154.75c9.34 9.38 9.32 24.54-.04 33.9l-22.67 22.67c-9.37 9.37-24.57 9.37-33.94 0L34.52 272.97c-9.37-9.37-9.37-24.57 0-33.94z"></path></svg>
          </button>
          <button :class="activate ? 'zindex' : 'zindexOff'"
              class="glide__arrow glide__arrow--right" data-glide-dir=">">
              <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="chevron-right" class="svg-inline--fa fa-chevron-right fa-w-10" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path fill="currentColor" d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"></path></svg>
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
import YoutubeEmbedLite from '@miyaoka/vue-youtube-embed-lite';

export default {
  name: 'QgSlider',
  components: { YoutubeEmbedLite },
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
          gap: 50,
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
    height: 320px;
  }

  .img-desc {
    padding: 10px 20px;
    text-align: center;
    color: var(--yellow);
  }

  svg {
    width: 16px;
    display: inline-block;
    margin-right: 5px;
  }

  .glide__arrow svg {
    width: 10px;
  }

  /* --- --- -- Video design -- --- --- */

  .test__video-container {
    background-color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .test__video {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 408px;
    height: 320px;
    margin-bottom: -45px;
    margin-top: 42px;
  }

/* --- --- -- Responsive design -- --- --- */
@media only screen and (max-width: 523px) {
  .glide__container {
    height: 60vh;
    width: 95%;
  }
}

</style>
