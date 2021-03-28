import React from 'react'
import webb from '../src/images/home4.svg'

import Common from './Common'

const About=()=>{
    return(
        <>
        <Common
            name='Welcome to About Page'
            btn='Contact Now'
            visit='/contact'
            img={webb}
        />
        </>
    )
}
export default About