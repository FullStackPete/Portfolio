import reactLogo from '../assets/react.svg'
import FloatElement from '../components/FloatElement'
import SpringBoot from '../assets/spring.png'
import TechStackItem from '../components/TechStackItem'
import TailwindCSS from '../assets/tailwind.png'
import Dotnet from '../assets/NET_Core_Logo.svg.png'
import Java from '../assets/java-svgrepo-com.svg'
import Vue from '../assets/vue.png'
import nuxt from '../assets/nuxt.js.png'
import Typescript from '../assets/Typescript.png'
import Ekodoniczka from '../assets/screenshot-20240920-152311.png'
function Home() {
    return (
        <div className="flex h-screen w-screen items-center justify-center bg-slate-900">
            <img
                src={reactLogo}
                className="animate-spin-slow left-0 top-0 m-4 w-48"
                alt="React logo"
            />
            <FloatElement
                bgColor="#4D595C"
                className="p-4 hover:shadow-xl hover:shadow-violet-300"
                radiusX={250}
                radiusY={250}
                speed={0.1}
                initialAngle={0}
            >
                <div className="flex animate-pulse flex-col gap-4 transition-all duration-1000 hover:scale-125">
                    <div className="flex flex-row items-center">
                        <div className="h-12 w-12 rounded-full bg-gray-400"></div>

                        <div className="ml-4 h-6 w-32 rounded-2xl bg-gray-400"></div>
                    </div>
                    <div className="w-70 h-10 rounded-2xl bg-gray-400"></div>
                    <div className="w-70 h-10 rounded-2xl bg-gray-400"></div>
                </div>
            </FloatElement>
            <FloatElement
            className='tech-stack'
                radiusX={250}
                radiusY={250}
                speed={0.1}
                initialAngle={60}
            >
                <p className="header-text cursor-default text-center font-bold text-cyan-300 transition-all duration-1000">
                    Fullstack developer
                </p>
                <div className="flex flex-col ">
                    <p className="header-text  cursor-default text-center font-bold text-pink-300 transition-all duration-1000">
                        Tech Stack
                    </p>
                    <div className="logos transtion-all mt-4 grid grid-cols-4 opacity-0 duration-1000">
                        <TechStackItem src={SpringBoot} label={'Spring'} />
                        <TechStackItem src={reactLogo} label={'React.js'} />
                        <TechStackItem
                            src={TailwindCSS}
                            label={'TailwindCSS'}
                        />
                        <TechStackItem src={Dotnet} label={'.NET'} />
                        <TechStackItem src={Java} label={'Java'} />
                        <TechStackItem src={Typescript} label={'Typescript'} />
                        <TechStackItem src={Vue} label={'Vue.js'} />
                        <TechStackItem src={nuxt} label={'Nuxt.js'} />
                    </div>
                </div>
            </FloatElement>
            <FloatElement
                radiusX={160}
                radiusY={160}
                speed={0.1}
                initialAngle={100}
            ></FloatElement>

            <FloatElement
                className="p-4"
                radiusX={250}
                radiusY={250}
                speed={0.1}
                initialAngle={-80}
            ></FloatElement>

            <FloatElement
                className="p-4"
                radiusX={250}
                radiusY={250}
                speed={0.1}
                initialAngle={-130}
                bgColor="#4D595C"
            >
                <p className="text-center text-2xl mb-2 font-semibold text-white">
                    Ecodoniczka.pl
                </p>
                <img src={Ekodoniczka} className="w-64 rounded-lg object-cover h-36 object-top" alt="" />
            </FloatElement>
        </div>
    )
}

export default Home
