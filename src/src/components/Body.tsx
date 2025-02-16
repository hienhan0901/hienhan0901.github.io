import React, { useEffect, useState } from 'react'
import About from './section/About'
import Work from './section/Work'
import Contact from './section/Contact'

const Body = () => {

    return (
        <div className=''>
            <div className='mx-auto max-w-7xl px-6 sm:px-8 lg:px-10'>
                <About />
                {/* <Work /> */}
                <Contact />
            </div>
        </div>

    )
}

export default Body