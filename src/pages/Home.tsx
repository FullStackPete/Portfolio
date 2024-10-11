import reactLogo from '../assets/react.svg'
import CardElement from '../components/CardElement'
import Ekodoniczka from '../assets/screenshot-20240920-152311.png'
import { useState } from 'react'
import TechStackCard from '../components/TechStackCard'
function Home() {
    const [spin, setSpin] = useState<boolean>(true)
    // const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    //     setSpin(e.target.checked)
    // }
    return (
        <div className="flex h-screen w-screen items-center justify-center bg-slate-900">
            {/* <div className="absolute top-10">
                <input
                    checked={spin}
                    type="checkbox"
                    onChange={(e) => handleChange(e)}
                    name="no-spin"
                    id=""
                />
                <label htmlFor="no-spin" className="text-white">
                    Spin enabled
                </label>
            </div> */}
            <div className="relative flex items-center justify-center">
                <img
                    src={reactLogo}
                    className={`m-4 w-32 ${spin ? 'animate-spin-slow' : ''}`}
                    alt="React logo"
                />
                <p className="header-text w-max absolute top-14 right-40 cursor-default text-center font-bold text-cyan-300 transition-all duration-1000">
                    Fullstack developer
                </p>
                <CardElement
                    bgColor="#4D595C"
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
                    bgColor="#4D595C"
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
