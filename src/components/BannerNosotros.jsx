import React from 'react'
import { Link } from 'react-router-dom'


const BannerNosotros = () => {
  return (
    <>
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage:
            "url(https://images.ctfassets.net/rporu91m20dc/3sxD8wbUY8QyOsKgaIIG4U/95a5b2efc32faeff3c5655f826cdfc14/data.images.event.7.teamphoto_1315x315.jpg?q=70&&&fm=webp)",
        }}
      >
        <div className="hero-overlay"></div>
        <div className="hero-content text-neutral-content text-center">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold font-[trade]"> SOMOS LA FAMILIA BETHESDA</h1>
            <p className="mb-5">
              En Bethesda, creamos mundos y experiencias de juego que inspiran aventura y libertad. Nos apasiona innovar y conectar con jugadores de todo el mundo, ofreciendo títulos que trascienden el entretenimiento. Somos una comunidad dedicada a transformar la forma de jugar.
            </p>
            <button className="btn btn-ghost btn-neutral-content" onClick={() => document.getElementById('my_modal_2').showModal()}>Conocenos mejor</button>
            <Link to="/contacto" className="btn btn-ghost">Contactanos</Link>
            <dialog id="my_modal_2" className="modal">
              <div className="modal-box">
                <h3 className="font-bold text-lg">¿Quiénes Somos?</h3>
                <p className="py-4">
                  En Bethesda, nos apasiona crear mundos inmersivos que inspiran la creatividad, la aventura y la emoción. Desde nuestros inicios, hemos trabajado con dedicación para brindar experiencias de juego inolvidables, que no solo entretienen, sino que también conectan a comunidades globales de jugadores.<br />
                  <br />
                  Nuestro compromiso es desarrollar títulos innovadores que desafían los límites de la narrativa y la jugabilidad, combinando tecnología de vanguardia con un profundo respeto por la artesanía y el detalle. Juegos como The Elder Scrolls, Fallout y muchos otros reflejan nuestra misión de ofrecer libertad, exploración y emoción en cada proyecto.<br />
                  <br />
                  Somos más que una compañía de videojuegos; somos una familia de creadores que comparte una visión común: transformar la forma en que las personas experimentan y se relacionan con el entretenimiento digital. En Bethesda, cada jugador es parte de nuestro viaje, y trabajamos constantemente para superar expectativas y abrir nuevas fronteras en el mundo del gaming.<br />
                  <br />
                  Bienvenidos a Bethesda, donde la aventura comienza.<br />

                </p>
              </div>
              <form method="dialog" className="modal-backdrop">
                <button>close</button>
              </form>
            </dialog>
          </div>
        </div>
      </div>
    </>
  )
}

export default BannerNosotros