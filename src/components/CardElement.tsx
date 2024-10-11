import { ReactNode } from 'react'

type CardElementProps = {
    children?: ReactNode
    className?: string
    bgColor?: string
}

function CardElement({ children, className, bgColor }: CardElementProps) {
    return (
        <div
            className={`transition-custom rounded-xl absolute duration-1000 ${className ?? ''}`}
            style={{
                backgroundColor: bgColor ?? '',
            }}
        >
            {children}
        </div>
    )
}

export default CardElement
