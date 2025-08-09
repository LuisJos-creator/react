import React from 'react'
import Navbar from '../components/Navbar'
import Banner from '../components/Banner'
import Card from '../components/Card'


const Inicio = () => {
  return (
    <>
    <Navbar/>
    <Banner/>
    <h1 className="center" >Juegos</h1>
<div className="grid grid-cols-4 grid-rows-4 gap-4 px-20 m-10">
     <Card
            img="asda"
            titulo="starfield"
            desc="adasdad"
        />
        
        <Card
            img="asda"
            titulo="asdasdasd"
            desc="adasdad"
        />
        <Card
            img="asda"
            titulo="asdasdasd"
            desc="adasdad"
        />
        <Card
            img="asda"
            titulo="asdasdasd"
            desc="adasdad"
        />
        <Card
            img="asda"
            titulo="asdasdasd"
            desc="adasdad"
        />
        <Card
            img="asda"
            titulo="asdasdasd"
            desc="adasdad"
        />
        <Card
            img="asda"
            titulo="asdasdasd"
            desc="adasdad"
        />
        <Card
            img="asda"
            titulo="asdasdasd"
            desc="adasdad"
        />
</div>
    
   
    
    
    </>
  )
}

export default Inicio