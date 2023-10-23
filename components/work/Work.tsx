import {FC, useState} from 'react';

const infoWorkOne = [
    
    {
        title: 'E-Commerce',
        description: 'Esta aplicación Web la desarrolle con Next JS, Material UI, Next Auth, MongoDB.',
        link: 'https://aspiazu-shop.vercel.app/'
    },
    {
        title: 'Rosari Construction',
        description: 'Desarrollado con NextJS, uso de hooks, css, manipulación del DOM, funciones en backend para el formulario, encuesta y almaceno los datos en mysql.',
        link: 'https://rosari-construction-inc.vercel.app/'
    }
]

const infoWorkTwo = [
    {
        title: 'Proyecto de Solutions AJS',
        description: 'Este sitio web lo construí con elementor',
        link: 'https://www.solutions-as.com/'
    },
    {
        title: 'Proyecto para EJC',
        description: 'Este sitio web lo realice con NextJS, TypeScript y Material UI',
        link: 'https://www.ejc-home.com/'
    }
]

// const infoWorkThree = [
//     {
//         title: 'Mi Sitio Web',
//         description: 'Este sitio web lo realice con NextJS, TypeScript y CSS3',
//         link: 'https://aspiazu-technology.vercel.app/'
//     },
//     {
//         title: 'Proyecto de TodoApp',
//         description: 'Esta aplicación web la realice con NextJS, TypeScript y css',
//         link: 'https://aspiazu-todo-app.vercel.app/'
//     },
// ]


export const Work: FC = () => {

    const [ work, setWork ] = useState(infoWorkOne);

    const handleClickWorkOne = () => {
        setWork(infoWorkOne)
    }

    const handleClickWorkTwo = () => {
        setWork(infoWorkTwo)
    }

    // const handleClickWorkThree = () => {
    //     setWork(infoWorkThree)
    // }

  return (
    <div className='work'>
        <div className='work-container'>
            <div className='work-title'>Trabajos realizados</div>

            <div className='work-done-container'>
                {
                    work.map( (w, index) => (
                        <div className='work-container-done' key={index}>
                            <div className='work-container-title'>{w.title}</div>
                            <div className='work-container-description'>{w.description}</div>
                            <a href={w.link} target='_blank' className='work-container-box'>
                                <div className='work-container-box-info'>
                                    <div>ver proyecto</div>
                                    <svg xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 96 960 960" width="48"><path d="m702 755-43-42 106-106H120v-60h646L660 441l42-42 178 178-178 178Z"/></svg>
                                </div>
                            </a>
                        </div>
                    ))
                }
            </div>
            <div className='wrok-container-state'>
                <button onClick={handleClickWorkOne} className={work === infoWorkOne ? 'work-container-btn-active' : 'work-container-btn'}>1</button>
                <button onClick={handleClickWorkTwo} className={work === infoWorkTwo ? 'work-container-btn-active' : 'work-container-btn'}>2</button>
                {/* <button onClick={handleClickWorkThree} className={work === infoWorkThree ? 'work-container-btn-active' : 'work-container-btn'}>3</button> */}
            </div>
        </div>
    </div>
  )
}
