type TechStackItemProps = {
    src: string
    label: string
}
function TechStackItem({ src, label }: TechStackItemProps) {
    return (
        <>
            <div className="grid grid-rows-2 items-center">
                <img src={src} className="w-8 place-self-center" />
                <p className="text-sm text-white text-center">{label}</p>
            </div>
        </>
    )
}

export default TechStackItem
