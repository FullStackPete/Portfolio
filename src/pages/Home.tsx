import reactLogo from '../assets/react.svg'
import Tile from '../components/Tile'
function Home() {
    return (
        <div className="flex h-screen w-screen items-center justify-center bg-slate-900">
            <img
                src={reactLogo}
                className="animate-spin-slow left-0 top-0 m-4 w-48"
                alt="React logo"
            />
            <Tile
                width={32}
                height={48}
                radiusX={250}
                radiusY={250}
                speed={0.1}
                initialAngle={70}
            />
            <Tile
                width={80}
                height={48}
                radiusX={320}
                radiusY={280}
                speed={0.1}
                initialAngle={0}
            />
        </div>
    )
}

export default Home
