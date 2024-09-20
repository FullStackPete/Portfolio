import { useEffect, useState } from 'react'

type TileProps = {
    width: number
    height: number
    radiusX: number
    radiusY: number
    speed: number
    initialAngle: number
}

function Tile({
    width,
    height,
    radiusX,
    radiusY,
    speed,
    initialAngle,
}: TileProps) {
    const [angle, setAngle] = useState(initialAngle)

    useEffect(() => {
        const intervalId = setInterval(() => {
            setAngle((prevAngle) => prevAngle + speed)
        }, 16)

        return () => clearInterval(intervalId)
    }, [speed])

    const x = radiusX * Math.cos(angle * (Math.PI / 180))
    const y = radiusY * Math.sin(angle * (Math.PI / 180))

    return (
        <div
            className={`transition-custom absolute rounded-xl bg-[#4D595C] duration-1000`}
            style={{
                width: width / 4 + 'rem',
                height: height / 4 + 'rem',
                transform: `translate(${x}px, ${y}px)`,
            }}
        ></div>
    )
}

export default Tile
