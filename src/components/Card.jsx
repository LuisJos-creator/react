import React from 'react'

const Card = ({
    img, titulo, desc
}) => {
    return (
        <div className="card lg:card-side shadow-sm bg-neutral text-base-100">
            <figure className='w-full h-full object-cover'>
                <img
                    src={img}
                    alt={titulo}
                    
                />
            </figure>
            <div className="card-body">
                <h2 className="card-title text-2xl">{titulo}</h2>
                <p className='text-lg'>{desc}</p>
                <div className="card-actions justify-start">
                    <button className="btn btn-primary">Comprar</button>
                </div>
            </div>
        </div>
    )
}


export default Card