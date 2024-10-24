import reactLogo from '../assets/react.svg'
import CardElement from '../components/CardElement'
import Ekodoniczka from '../assets/screenshot-20240920-152311.png'
import { useState } from 'react'
import TechStackCard from '../components/TechStackCard'
import HeaderSection from '../components/HeaderSection'
function Home() {
    const [spin, setSpin] = useState<boolean>(true)
    return (
        <div className="flex h-screen w-screen items-center justify-center bg-slate-900">
            <HeaderSection />
            <div className="relative flex items-center justify-center">
                <img
                    src={reactLogo}
                    className={`m-4 w-32 ${spin ? 'animate-spin-slow' : ''}`}
                    alt="React logo"
                />
                <p className="header-text absolute right-40 top-14 w-max cursor-default text-center font-bold text-cyan-300 transition-all duration-1000">
                    Fullstack developer
                </p>
                <p className="header-text absolute right-40 top-4 w-max cursor-default text-center font-bold text-cyan-300 transition-all duration-1000"></p>
                <CardElement
                    bgColor="#000000"
                    className="bottom-40 right-40 p-4 hover:shadow-xl hover:shadow-violet-300"
                >
                    <p className="text-white">Download CV</p>
                    <div className="flex animate-pulse cursor-pointer flex-col gap-4 transition-all duration-1000 hover:scale-[110%]">
                        <div className="flex flex-row items-center">
                            <div className="h-12 w-12 rounded-full bg-gray-400"></div>

                            <div className="ml-4 h-6 w-32 rounded-2xl bg-gray-400"></div>
                        </div>
                        <div className="w-70 h-10 rounded-2xl bg-gray-400"></div>
                        <div className="w-70 h-10 rounded-2xl bg-gray-400"></div>
                    </div>
                </CardElement>
                <TechStackCard />
                <CardElement
                    className="right-36 top-32 w-72 p-4 hover:cursor-pointer hover:shadow-xl hover:shadow-violet-300"
                    bgColor="#000000"
                >
                    <p className="mb-2 text-center text-2xl font-semibold text-white">
                        Ecodoniczka.pl
                    </p>
                    <img
                        src={Ekodoniczka}
                        className="h-36 w-64 rounded-lg object-cover object-top"
                        alt=""
                    />
                </CardElement>
            </div>
        </div>
    )
}

export default Home
