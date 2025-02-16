import React from 'react'
import { NavLink } from 'react-router-dom'
const Navigation = () => {
    // const
    const linkClass = () => ' text-sky-400 hover:bg-sky-700 hover:text-white rounded-md px-3 py-2'

    return (
        <nav className='bg-white'>
            <div className='mx-auto max-w-7xl px-6 sm:px-8 lg:px-10'>
                <div className='flex flex-row flex-1 items-center justify-between'>
                    <button className='flex flex-col flex-shrink-0 items-center justify-center my-5 mr-4 md:items-start md:py-0 ' >
                        {/* <img className='h-10 w-auto' alt='React Jobs' /> */}
                        <span className='text-sky-700 md:block ml-2 text-2xl font-bold'>
                            HÀN VĂN GIA HIÊN
                        </span>
                    </button>
                    <div className='md:ml-auto'>
                        <div className='flex space-x-2'>
                            <button className={linkClass()}>
                                About
                            </button>
                            <button className={linkClass()}>
                                Work
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navigation