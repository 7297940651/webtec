import React from 'react'
import web from '../src/images/home3.svg'

import Common from './Common'

const Home=()=>{
    return(
        <>
        <Common 
            name='Grow your business with'
            btn='Get started'
            visit='/service'
            img={web}
        />
        </>
    )
}
export default Home