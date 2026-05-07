import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

const modulos = import.meta.glob('../assets/images/Foto*.jpeg', { eager: true })
const fotos = Object.entries(modulos)
  .sort(([a], [b]) => a.localeCompare(b, undefined, { numeric: true }))
  .map(([, mod]) => mod.default)

export default function Gallery() {
  return (
    <section id="gallery" className="gallery">
      <div className="gallery__header" data-aos="fade-up">
        <span className="gallery__eyebrow">Álbum</span>
        <h2 className="gallery__title">Nossas fotos</h2>
        <p className="gallery__subtitle">Para eternizar nossos momentos de noivos</p>
      </div>

      <div className="gallery__carousel" data-aos="zoom-in" data-aos-delay="200">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          loop
          spaceBetween={16}
          slidesPerView={1.1}
          breakpoints={{
            640:  { slidesPerView: 1.6, spaceBetween: 20 },
            1024: { slidesPerView: 2.8, spaceBetween: 24 },
          }}
          className="gallery__swiper"
        >
          {fotos.map((src, i) => (
            <SwiperSlide key={src}>
              <div className="gallery__slide">
                <img
                  src={src}
                  alt={`Foto ${i + 1}`}
                  className="gallery__img"
                  loading={i < 2 ? 'eager' : 'lazy'}
                  decoding="async"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  )
}
