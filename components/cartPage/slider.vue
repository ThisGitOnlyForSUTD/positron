<template>
<section class="slider container">
  <h2 class="slider__title">Просмотренные товары</h2>
  <div class="swiper mySwiper" ref="swiper">
    <div class="swiper-wrapper">
      <div class="swiper-slide" v-for="item in items" :key="item.id">
        <img class="swiper-slide__img" :src="require(`@/assets/imgs/slider/${item.img}.png`)" />
        <span class="swiper-slide__title">{{item.title}}</span>
        <span class="swiper-slide__text">
        {{ item.text }}
        </span
        >
        <span class="swiper-slide__price">{{ item.price }}</span
        ><span class="swiper-slide__euro">{{ item.euro }}</span>
        <nuxt-link to="/" class="swiper-slide__link">Подробнее</nuxt-link>
      </div>
    </div>
  </div>
  <div class="slider__control">
    <div class="swiper-button-prev" @click="page--"></div>
      <div class="swiper-silde__counter">
        <span class="swiper-slide__page">{{ page }}</span>
        <span class="swiper-slide__length">/ {{ items.length / 4 }}</span>
      </div>
    <div class="swiper-button-next" @click="page++" :class="disabledBtn"></div>
  </div>
</section>
</template>
<script>
import Swiper from 'swiper/swiper-bundle.min';
import 'swiper/swiper-bundle.min.css';

export default {
  async mounted() {
    await this.$nextTick();
    new Swiper(this.$refs.swiper, {
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });
  },
  data () {
    return {
      items: [
        {
          "id": 1,
          "title": "BXC",
          "text": "Вытяжное устройство для механической системы вентиляции",
          "price": "6 848 ₽ – 56 584 ₽",
          "euro": "77.60 € – 643.86 €",
          "article": "G2H1065",
          "specs": "12-72/168 м3/ч / гидрорегулируемый расход / от датчика присутствия",
          "img": "bxc"
        },
        {
          "id": 2,
          "title": "G2H",
          "text": "Многофункциональное вытяжное устройство для естественной и гибридной вентиляции",
          "price": "6 848 ₽ – 56 584 ₽",
          "euro": "77.60 € – 643.86 €",
          "article": "G2H1065",
          "specs": "12-72/168 м3/ч / гидрорегулируемый расход / от датчика присутствия",
          "img": "g2h"
        },
        {
          "id": 3,
          "title": "GHN",
          "text": "Вытяжное устройство с датчиком присутствия",
          "price": "6 848 ₽ – 56 584 ₽",
          "euro": "77.60 € – 643.86 €",
          "article": "G2H1065",
          "specs": "12-72/168 м3/ч / гидрорегулируемый расход / от датчика присутствия",
          "img": "ghn"
        },
        {
          "id": 4,
          "title": "TDA",
          "text": "Вытяжное устройство с датчиком присутствия",
          "price": "6 848 ₽ – 56 584 ₽",
          "euro": "77.60 € – 643.86 €",
          "article": "G2H1065",
          "specs": "12-72/168 м3/ч / гидрорегулируемый расход / от датчика присутствия",
          "img": "tda"
        },
        {
          "id": 5,
          "title": "BXC",
          "text": "Вытяжное устройство для механической системы вентиляции",
          "price": "6 848 ₽ – 56 584 ₽",
          "euro": "77.60 € – 643.86 €",
          "article": "G2H1065",
          "specs": "12-72/168 м3/ч / гидрорегулируемый расход / от датчика присутствия",
          "img": "bxc"
        },
        {
          "id": 6,
          "title": "G2H",
          "text": "Многофункциональное вытяжное устройство для естественной и гибридной вентиляции",
          "price": "6 848 ₽ – 56 584 ₽",
          "euro": "77.60 € – 643.86 €",
          "article": "G2H1065",
          "specs": "12-72/168 м3/ч / гидрорегулируемый расход / от датчика присутствия",
          "img": "g2h"
        },
        {
          "id": 7,
          "title": "GHN",
          "text": "Вытяжное устройство с датчиком присутствия",
          "price": "6 848 ₽ – 56 584 ₽",
          "euro": "77.60 € – 643.86 €",
          "article": "G2H1065",
          "specs": "12-72/168 м3/ч / гидрорегулируемый расход / от датчика присутствия",
          "img": "ghn"
        },
        {
          "id": 8,
          "title": "TDA",
          "text": "Вытяжное устройство с датчиком присутствия",
          "price": "6 848 ₽ – 56 584 ₽",
          "euro": "77.60 € – 643.86 €",
          "article": "G2H1065",
          "specs": "12-72/168 м3/ч / гидрорегулируемый расход / от датчика присутствия",
          "img": "tda"
        },
        {
          "id": 9,
          "title": "BXC",
          "text": "Вытяжное устройство для механической системы вентиляции",
          "price": "6 848 ₽ – 56 584 ₽",
          "euro": "77.60 € – 643.86 €",
          "article": "G2H1065",
          "specs": "12-72/168 м3/ч / гидрорегулируемый расход / от датчика присутствия",
          "img": "bxc"
        },
        {
          "id": 10,
          "title": "G2H",
          "text": "Многофункциональное вытяжное устройство для естественной и гибридной вентиляции",
          "price": "6 848 ₽ – 56 584 ₽",
          "euro": "77.60 € – 643.86 €",
          "article": "G2H1065",
          "specs": "12-72/168 м3/ч / гидрорегулируемый расход / от датчика присутствия",
          "img": "g2h"
        },
        {
          "id": 11,
          "title": "GHN",
          "text": "Вытяжное устройство с датчиком присутствия",
          "price": "6 848 ₽ – 56 584 ₽",
          "euro": "77.60 € – 643.86 €",
          "article": "G2H1065",
          "specs": "12-72/168 м3/ч / гидрорегулируемый расход / от датчика присутствия",
          "img": "ghn"
        },
        {
          "id": 12,
          "title": "TDA",
          "text": "Вытяжное устройство с датчиком присутствия",
          "price": "6 848 ₽ – 56 584 ₽",
          "euro": "77.60 € – 643.86 €",
          "article": "G2H1065",
          "specs": "12-72/168 м3/ч / гидрорегулируемый расход / от датчика присутствия",
          "img": "tda"
        },
        {
          "id": 13,
          "title": "BXC",
          "text": "Вытяжное устройство для механической системы вентиляции",
          "price": "6 848 ₽ – 56 584 ₽",
          "euro": "77.60 € – 643.86 €",
          "article": "G2H1065",
          "specs": "12-72/168 м3/ч / гидрорегулируемый расход / от датчика присутствия",
          "img": "bxc"
        },
        {
          "id": 14,
          "title": "G2H",
          "text": "Многофункциональное вытяжное устройство для естественной и гибридной вентиляции",
          "price": "6 848 ₽ – 56 584 ₽",
          "euro": "77.60 € – 643.86 €",
          "article": "G2H1065",
          "specs": "12-72/168 м3/ч / гидрорегулируемый расход / от датчика присутствия",
          "img": "g2h"
        },
        {
          "id": 15,
          "title": "GHN",
          "text": "Вытяжное устройство с датчиком присутствия",
          "price": "6 848 ₽ – 56 584 ₽",
          "euro": "77.60 € – 643.86 €",
          "article": "G2H1065",
          "specs": "12-72/168 м3/ч / гидрорегулируемый расход / от датчика присутствия",
          "img": "ghn"
        },
        {
          "id": 16,
          "title": "TDA",
          "text": "Вытяжное устройство с датчиком присутствия",
          "price": "6 848 ₽ – 56 584 ₽",
          "euro": "77.60 € – 643.86 €",
          "article": "G2H1065",
          "specs": "12-72/168 м3/ч / гидрорегулируемый расход / от датчика присутствия",
          "img": "tda"
        },
        {
          "id": 17,
          "title": "BXC",
          "text": "Вытяжное устройство для механической системы вентиляции",
          "price": "6 848 ₽ – 56 584 ₽",
          "euro": "77.60 € – 643.86 €",
          "article": "G2H1065",
          "specs": "12-72/168 м3/ч / гидрорегулируемый расход / от датчика присутствия",
          "img": "bxc"
        },
        {
          "id": 18,
          "title": "G2H",
          "text": "Многофункциональное вытяжное устройство для естественной и гибридной вентиляции",
          "price": "6 848 ₽ – 56 584 ₽",
          "euro": "77.60 € – 643.86 €",
          "article": "G2H1065",
          "specs": "12-72/168 м3/ч / гидрорегулируемый расход / от датчика присутствия",
          "img": "g2h"
        },
        {
          "id": 19,
          "title": "GHN",
          "text": "Вытяжное устройство с датчиком присутствия",
          "price": "6 848 ₽ – 56 584 ₽",
          "euro": "77.60 € – 643.86 €",
          "article": "G2H1065",
          "specs": "12-72/168 м3/ч / гидрорегулируемый расход / от датчика присутствия",
          "img": "ghn"
        },
        {
          "id": 20,
          "title": "TDA",
          "text": "Вытяжное устройство с датчиком присутствия",
          "price": "6 848 ₽ – 56 584 ₽",
          "euro": "77.60 € – 643.86 €",
          "article": "G2H1065",
          "specs": "12-72/168 м3/ч / гидрорегулируемый расход / от датчика присутствия",
          "img": "tda"
        },
        {
          "id": 21,
          "title": "BXC",
          "text": "Вытяжное устройство для механической системы вентиляции",
          "price": "6 848 ₽ – 56 584 ₽",
          "euro": "77.60 € – 643.86 €",
          "article": "G2H1065",
          "specs": "12-72/168 м3/ч / гидрорегулируемый расход / от датчика присутствия",
          "img": "bxc"
        },
        {
          "id": 22,
          "title": "G2H",
          "text": "Многофункциональное вытяжное устройство для естественной и гибридной вентиляции",
          "price": "6 848 ₽ – 56 584 ₽",
          "euro": "77.60 € – 643.86 €",
          "article": "G2H1065",
          "specs": "12-72/168 м3/ч / гидрорегулируемый расход / от датчика присутствия",
          "img": "g2h"
        },
        {
          "id": 23,
          "title": "GHN",
          "text": "Вытяжное устройство с датчиком присутствия",
          "price": "6 848 ₽ – 56 584 ₽",
          "euro": "77.60 € – 643.86 €",
          "article": "G2H1065",
          "specs": "12-72/168 м3/ч / гидрорегулируемый расход / от датчика присутствия",
          "img": "ghn"
        },
        {
          "id": 24,
          "title": "TDA",
          "text": "Вытяжное устройство с датчиком присутствия",
          "price": "6 848 ₽ – 56 584 ₽",
          "euro": "77.60 € – 643.86 €",
          "article": "G2H1065",
          "specs": "12-72/168 м3/ч / гидрорегулируемый расход / от датчика присутствия",
          "img": "tda"
        },
      ],
      page: 1
    }
  },
  computed: {
    disabledBtn () {
      return {'swiper-button-disabled': this.page >= this.items.length / 4}
    }
  }
};
</script>

<style lang="scss">
.swiper {
  position: relative;
}

.slider {
  margin-top: 95px;
  &__title {
    font-style: normal;
    font-weight: 600;
    font-size: 30px;
    line-height: 120.52%;
    color: #1F2432;
  }
}

.swiper-wrapper {
  display: flex;
  justify-content: center;
  width: min-content;
  margin-top: 50px;
  gap: 0 18px;
}

.slider__control {
  position: absolute;
  display: flex;
  width: 179px;
  top: 10px;
  right: 50px;
  column-gap: 20px;
  align-items: center;
  justify-content: center;
  text-align: center;
}

.swiper-button-prev {
  position: static;
  margin-top: 0;
}

.swiper-button-prev:after {
  content: url(@/static/icons/arrow-prev.svg);
  color: #90A2B5;
  height: 50px;
  width: 50px;
}

.swiper-button-next {
  position: static;
  margin-top: 0;
}

.swiper-button-next:after {
  content: url(@/static/icons/arrow-next.svg);
  color: #90A2B5;
  height: 50px;
  width: 50px;
}

.swiper-slide {
  flex-direction: column;
  max-width: 255px;
  width: 100%;
  max-height: 563px;
  padding: 25px;
  display: flex;
  align-items: center;

  &__page {
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    color: #212121;
  }

  &__length {
    color: #797B86;
    font-size: 14px;
  }

  &__title {
    margin: 5px 0 10px 0;
    font-weight: 700;
    text-transform: uppercase;
    color: #1F2432;
    font-size: 22px;
    line-height: 120.52%;
  }

  &__text {
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 145%;
    color: #1F2432;
    max-width: 255px;
    margin-bottom: 39px;
    height: 60px;
  }

  &__price {
    font-family: 'Roboto';
    font-weight: 500;
    font-size: 22px;
    line-height: 130%;
    letter-spacing: 0.005em;
    margin-bottom: 3px;
  }
  &__euro {
    font-weight: 400;
    font-size: 16px;
    line-height: 145%;
    color: #797b86;
    margin-bottom: 20px;
  }

  &__link {
    display: block;
    justify-content: center;
    align-items: center;
    padding: 15px 50px;
    background: #0069B4;
    border-radius: 4px;
    font-weight: 400;
    font-size: 16px;
    line-height: 145%;
    text-align: center;
    color: #FFFFFF;
    border: none;
    &:hover {
      background: #01548f;
    }
  }
}
</style>
