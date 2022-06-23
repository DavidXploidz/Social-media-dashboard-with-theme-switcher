import React from 'react'
import {BsToggleOn, BsToggleOff} from 'react-icons/bs'
import useSocial from '../hooks/useSocial'
import CardSocial from './CardSocial'
import Overview from './Overview'
const AppSocial = () => {

    const {cambiar, setCambiar} = useSocial()


    const cambiarTema = () => {
        console.log('haz cambiado de tema');
        setCambiar(!cambiar)
    }

  return (
    <main className={cambiar ? ' bg-White': ' bg-VeryDarkBlue'}>
        <div className='contenedor grid grid-cols-1 divide-y divide-white md:grid-cols-2 md:divide-y-0  '>
            <div className='py-5 mt-8'>
                <h1 className={cambiar ? 'titulo-principal-light': 'titulo-principal-dark'}>Social Media Dashboard</h1>
                <p className={cambiar ? 'text-DarkGrayishBlue capitalize' : 'capitalize'}>Total followers: 23,004</p>
            </div>
            <div className='flex justify-between items-center my-5 pt-5 md:justify-end gap-x-10'>
                <div>
                {cambiar ? 
                            <p className={ 'text-DarkGrayishBlue'}>Light Mode</p>
                         : 
                            <p>Dark Mode</p>
                }
                </div>
                <div>
                    {cambiar ? (
                        <BsToggleOn size={40} className='btn-light' onClick={cambiarTema}  />
                    ) : (
                        <BsToggleOff size={40} className='btn-dark' onClick={cambiarTema}  />
                    )}

                </div>
              
            </div>
        </div>{/*Fin div de header principal*/}
        <section className='contenedor grid grid-cols-1 md:grid-cols-4 gap-10'>
            <CardSocial
                color={'Facebook'}
                imagen={'icon-facebook'}
                usuario={'@nathanf'}
                seguidores={1987}
                tendencia={'icon-up'}
                numTendencia={12}
                colorTendencia={'bueno'}
            />
        
            <CardSocial
                color={'Twitter'}
                imagen={'icon-twitter'}
                usuario={'@nathanf'}
                seguidores={1044}
                tendencia={'icon-up'}
                numTendencia={99}
                colorTendencia={'bueno'}
            />
            <CardSocial
                color={'Instagram'}
                imagen={'icon-instagram'}
                usuario={'@realnathanf'}
                seguidores={11000}
                tendencia={'icon-up'}
                numTendencia={1099}
                colorTendencia={'bueno'}
            />
            <CardSocial
                color={'Youtube'}
                imagen={'icon-youtube'}
                usuario={'Nathan F.'}
                seguidores={8239}
                tendencia={'icon-down'}
                numTendencia={144}
                colorTendencia={'malo'}
            />
            
        </section>
        <section className='contenedor'>
            <h2 className={cambiar ? 'titulo-principal-light mb-10' : 'titulo-principal-dark mb-10'}>Overview - Today</h2>
            <div className='grid grid-cols-1 md:grid-cols-4 gap-x-10'>
                <Overview
                    titulo={'page views'}
                    imagen={'icon-facebook'}
                    numero={87}
                    tendencia={'icon-up'}
                    porcentaje={3}
                    colorTendencia={'bueno'}
                />
                <Overview
                    titulo={'likes'}
                    imagen={'icon-facebook'}
                    numero={52}
                    tendencia={'icon-down'}
                    porcentaje={2}
                    colorTendencia={'malo'}
                />
                <Overview
                    titulo={'likes'}
                    imagen={'icon-instagram'}
                    numero={5462}
                    tendencia={'icon-up'}
                    porcentaje={2257}
                    colorTendencia={'bueno'}
                />
                <Overview
                    titulo={'profile views'}
                    imagen={'icon-instagram'}
                    numero={52000}
                    tendencia={'icon-up'}
                    porcentaje={1375}
                    colorTendencia={'bueno'}
                />
                <Overview
                    titulo={'retweets'}
                    imagen={'icon-twitter'}
                    numero={117}
                    tendencia={'icon-up'}
                    porcentaje={303}
                    colorTendencia={'bueno'}
                />
                <Overview
                    titulo={'likes'}
                    imagen={'icon-twitter'}
                    numero={507}
                    tendencia={'icon-up'}
                    porcentaje={553}
                    colorTendencia={'bueno'}
                />
                <Overview
                    titulo={'likes'}
                    imagen={'icon-youtube'}
                    numero={107}
                    tendencia={'icon-down'}
                    porcentaje={19}
                    colorTendencia={'malo'}
                />
                <Overview
                    titulo={'total views'}
                    imagen={'icon-youtube'}
                    numero={1407}
                    tendencia={'icon-down'}
                    porcentaje={12}
                    colorTendencia={'malo'}
                />
            </div>
            
        </section>
        
        
    </main>
   
  )
}

export default AppSocial