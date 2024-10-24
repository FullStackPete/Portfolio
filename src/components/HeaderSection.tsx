import linkedin from '../assets/linkedin.png'
import github from '../assets/github.svg'
function HeaderSection() {
    return (
        <div className="absolute top-0 mt-2 flex flex-row">
            <img src={linkedin} alt="" className="w-16" />
            <img src={github} alt="" className="w-[3.5rem]" />
        </div>
    )
}

export default HeaderSection
