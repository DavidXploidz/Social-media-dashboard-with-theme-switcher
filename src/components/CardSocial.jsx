import React from 'react'
import useSocial from '../hooks/useSocial' 

const CardSocial = ({color, imagen, usuario, seguidores, tendencia, numTendencia, colorTendencia }) => {

    const {cambiar} = useSocial()


  return (
    <div className={cambiar ? `bg-LightGrayishBlue grid grid-cols-1 gap-5 rounded-lg text-center py-10 border-t-4  border-${color} mb-10 md:my-10 cursor-pointer hover:contrast-75 ` 
                            : `bg-DarkDesaturatedBlue grid grid-cols-1 gap-5 rounded-lg text-center py-10 border-t-4  border-${color} mb-10 md:my-10 cursor-pointer hover:contrast-75` }> 
        <div className='flex items-center justify-center gap-x-5'>
            <img 
                // src={`../assets/images/${ imagen }.svg`} 
                // src={`./images/${ imagen }.svg`} 
                src={`../images/${ imagen }.svg`} 
                alt="icono de red social" 
            />
            
            <p className={cambiar ? 'text-DarkGrayishBlue' : ''}>{usuario}</p>
        </div>
        <div>
            {seguidores > 10000 ? (
                <span className={cambiar ? 'text-VeryDarkBlue text-8xl font-bold' : 'text-8xl font-bold'}>{seguidores / 1000}K</span>
            ): (
                <span className={cambiar ? 'text-VeryDarkBlue text-8xl font-bold' : 'text-8xl font-bold'}>{seguidores}</span>
            )}
            <p className={cambiar ? 'text-DarkGrayishBlue font-light tracking-widest uppercase' : 'font-light tracking-widest uppercase'}>Followers</p>
        </div>
        <div className='flex items-center justify-center gap-x-2'>
            <img 
                
                src={`../images/${tendencia}.svg`} 
                alt="icon up" 
            />
            <span className={`${colorTendencia}`}>{numTendencia} Today</span>
        </div>
    </div>
  )
}

export default CardSocial