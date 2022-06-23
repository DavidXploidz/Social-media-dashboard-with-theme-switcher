import React from 'react'
import useSocial from '../hooks/useSocial'
const Overview = ({titulo, imagen, numero, porcentaje, tendencia, colorTendencia}) => {


    const {cambiar} = useSocial()


  return (
    <>
        <div className={cambiar ? 'rounded-lg p-10 bg-LightGrayishBlue mb-10 cursor-pointer hover:contrast-75'
                                : 'rounded-lg p-10 bg-DarkDesaturatedBlue mb-10 cursor-pointer hover:contrast-75'
                        }>
            <div className='flex items-center justify-between'>
                <p className={cambiar ? 'text-DarkGrayishBlue capitalize' : 'capitalize'}>{titulo}</p>
                <img 
                    // src={`../assets/images/${ imagen }.svg`} 
                    src={`../images/${ imagen }.svg`} 
                    alt="icono de red social" 
                />
            </div>
            <div className='flex items-end justify-between mt-8 mb-2'>

                {numero > 10000 ? (
                    <span className={cambiar ? 'text-VeryDarkBlue text-6xl font-bold' : 'text-6xl font-bold'}>{numero / 1000}K</span>
                ): (
                    <span className={cambiar ? 'text-VeryDarkBlue text-6xl font-bold' : 'text-6xl font-bold'}>{numero}</span>
                )}
               
                <div className='flex items-center gap-x-2'>
                    <img 
                        // src={`../assets/images/${tendencia}.svg`} 
                        src={`../images/${tendencia}.svg`} 
                        alt="icon up" 
                    />
                    <span className={`${colorTendencia}`}>{porcentaje}%</span>
                </div>
            </div>
        </div>
    </>
  )
}

export default Overview