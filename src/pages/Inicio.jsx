import React from 'react'
import Navbar from '../components/Navbar'
import Banner from '../components/Banner'
import Card from '../components/Card'


const Inicio = () => {
  return (
    <>
    
    <Banner/>
    <h1 className="flex justify-center font-mono  decoration-wavy text-2xl" >Juegos</h1>
<div className="grid grid-cols-2 grid-rows-4 gap-4 px-10 m-10">
     <Card
            img="/img/portadas/xbox_series_x.starfield_US.17052118541212334574 (1).jpg"
            titulo="Starfield"
            desc="Embárcate en una aventura épica más allá de las estrellas. Starfield te ofrece un universo vasto y vivo para explorar, lleno de planetas, misiones emocionantes y libertad para definir tu destino. Con gráficos de última generación y narrativa profunda, Starfield es la experiencia espacial definitiva que te atrapará desde el primer momento."
        />
        
        <Card
            img="/img/portadas/playstation_4.elderscrollsvskyrimspecialeditionthe_AU.1627292041932419902 (1).jpg"
            titulo="The Elder Scrolls V: Skyrim"
            desc="Sumérgete en el reino de Skyrim, un mundo abierto lleno de dragones, magia y héroes legendarios. Personaliza tu personaje, elige tu camino y vive una aventura épica en un universo de fantasía que ha cautivado a millones de jugadores por su libertad y posibilidades infinitas."
        />
        <Card
            img="/img/portadas/ps4_fallout4 (1).jpg"
            titulo="Fallout 4"
            desc="Explora un mundo post-apocalíptico lleno de peligros y decisiones morales difíciles. Construye tu asentamiento, enfréntate a enemigos implacables y descubre los secretos de la Commonwealth en una historia que solo tú puedes definir. La aventura y la supervivencia nunca habían sido tan emocionantes."
        />
        <Card
            img="/img/portadas/xbox_360.falloutnewvegas_US.16488821731779842052 (1).jpg"
            titulo="Fallout: New Vega"
            desc="Adéntrate en la desértica y despiadada ciudad de New Vegas donde cada elección tiene consecuencias. Con un sistema de RPG profundo y una historia envolvente, prepárate para una experiencia que redefine el género post-apocalíptico."
        />
        <Card
            img="/img/portadas/playstation_4.doometernal_AU.16271091022142791684 (1).jpg"
            titulo="Doom Eternal"
            desc="Prepárate para la acción más frenética y brutal mientras te enfrentas a hordas infernales en combates de alta velocidad. Doom Eternal lleva la saga a nuevos niveles con gráficos espectaculares y jugabilidad imparable que desafiará tu destreza y reflejos."
        />
        <Card
            img="/img/portadas/xbox_one.dishonored2_US.17230835152109632980 (1).jpg"
            titulo="Dishonored 2"
            desc="Conviértete en un maestro del sigilo y los poderes sobrenaturales en una ciudad oscura y llena de intrigas. Cada misión es una oportunidad para usar tu astucia y habilidades únicas, eligiendo entre la violencia o la sutileza para cumplir tu objetivo."
        />
        <Card
            img="/img/portadas/x360_elderscrollsivoblivion (1).jpg"
            titulo="The Elder Scrolls IV: Oblivion"
            desc="Revive la magia de Tamriel en uno de los mundos abiertos más revolucionarios de su tiempo. Desde la lucha contra invasores demoníacos hasta la exploración de vastos territorios, Oblivion ofrece una aventura inolvidable."
        />
        <Card
            img="/img/portadas/xbox_one.wolfensteiniithenewcolossus_AU.1707034699271777473 (1).jpg"
            titulo="Wolfenstein II: The New Colossus"
            desc="Lucha contra el régimen nazi en una historia alternativa cargada de acción intensa y personajes memorables. Este shooter en primera persona combina narrativa apasionante con combates explosivos para una experiencia que te dejará sin aliento."
        />
</div>
    
   
    
    
    </>
  )
}

export default Inicio