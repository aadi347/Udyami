import React from 'react'
import FirstBlog from "../assets/magicpattern-blob-1743768837345.png"
import Nitishkumar from "../assets/nitishkumar.png"

const MainPage = () => {
    return (
        <div>
            <section className="font-inter overflow-hidden bg-white w-screen h-screen relative">
                {/* Blob image in the background */}
                <img 
                    src={FirstBlog} 
                    alt="gradient background image" 
                    className="absolute right-0 top-10 h-full object-cover translate-x-28 z-10" 
                />

                {/* Nitish Kumar image on top of the blob */}
                <img 
                    src={Nitishkumar} 
                    alt="Nitish Kumar" 
                    className="absolute right-10 top-20 w-72 z-20" 
                />
            </section>
        </div>
    )
}

export default MainPage
