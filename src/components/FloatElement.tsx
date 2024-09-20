import { ReactNode, useEffect, useState } from 'react'

type FloatElementProps = {
    radiusX: number
    radiusY: number
    speed: number
    initialAngle: number
    children?: ReactNode
    className?: string
    bgColor?: string
}

function FloatElement({
    radiusX,
    radiusY,
    speed,
    initialAngle,
    children,
    className,
    bgColor,
}: FloatElementProps) {
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
            className={`transition-custom absolute rounded-xl duration-1000 ${className ?? ''}`}
            style={{
                transform: `translate(${x}px, ${y}px)`,
                backgroundColor: bgColor ?? '',
            }}
        >
            {children}
        </div>
    )
}

export default FloatElement
