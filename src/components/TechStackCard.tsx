import CardElement from './CardElement'
import SpringBoot from '../assets/spring.png'
import TechStackItem from '../components/TechStackItem'
import TailwindCSS from '../assets/tailwind.png'
import Dotnet from '../assets/NET_Core_Logo.svg.png'
import Java from '../assets/java-svgrepo-com.svg'
import Vue from '../assets/vue.png'
import nuxt from '../assets/nuxt.js.png'
import Typescript from '../assets/Typescript.png'
import reactLogo from '../assets/react.svg'
function TechStackCard() {
    return (
        <CardElement className="tech-stack absolute -left-8 top-[18.5rem] z-10 w-max">
            <div className="flex flex-col">
                <p className="header-text cursor-default text-center font-bold text-pink-300 transition-all duration-1000">
                    Tech Stack
                </p>
                <div className="logos transtion-all mt-4 grid grid-cols-4 opacity-0 duration-1000">
                    <TechStackItem src={SpringBoot} label={'Spring'} />
                    <TechStackItem src={reactLogo} label={'React.js'} />
                    <TechStackItem src={TailwindCSS} label={'TailwindCSS'} />
                    <TechStackItem src={Dotnet} label={'.NET'} />
                    <TechStackItem src={Java} label={'Java'} />
                    <TechStackItem src={Typescript} label={'Typescript'} />
                    <TechStackItem src={Vue} label={'Vue.js'} />
                    <TechStackItem src={nuxt} label={'Nuxt.js'} />
                </div>
            </div>
        </CardElement>
    )
}

export default TechStackCard
