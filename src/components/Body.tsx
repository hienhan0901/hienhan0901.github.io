
import About from './section/About'
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