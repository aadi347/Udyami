import React from 'react'
import FirstBlog from "../assets/magicpattern-blob-1743768837345.png"
import Nitishkumar from "../assets/nitishkumar.png"

const MainPage = () => {
    return (
        <div>
            <section className="font-inter overflow-hidden bg-white w-screen h-screen relative">
                {/* Blob image in the background (smaller size) */}
                <img 
                    src={FirstBlog} 
                    alt="gradient background" 
                    className="absolute right-25 top-20 h-[600px] object-cover translate-x-28 z-10" 
                />

                {/* Nitish Kumar image over the blob */}
                <img 
                    src={Nitishkumar} 
                    alt="Nitish Kumar" 
                    className="absolute right-0 top-40 h-96 object-contain z-20" 
                />

                {/* Bottom cutout hider with heading */}
                <div className="absolute right-6 top-[540px] w-[520px] h-[70px] rounded-tl-full rounded-br-full bg-indigo-500/50 backdrop-blur-3xl z-30 flex items-center justify-center">
                    <h1 className="text-white text-3xl font-semibold">बिहार लघु उद्यमी योजना</h1>
                </div>
            </section>
        </div>
    )
}

export default MainPage
