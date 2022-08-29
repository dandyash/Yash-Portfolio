import useMousePosition from "../hooks/useMousePosition"

const CustomCursor = () => {
    const { x, y } = useMousePosition();
    return (
        <div className="cursor pointer-events-none z-[99]" >
            <div className="follow_cursor fixed w-[48px] rounded-full aspect-square -translate-x-1/2 -translate-y-1/2 bg-primary bg-opacity-50 ease-in duration-100" style={{
                top: `${y}px`,
                left: `${x}px`
            }}></div>
            <div className="fixed w-[22px] rounded-full aspect-square -translate-x-1/2 -translate-y-1/2 bg-primary" style={{
                top: `${y}px`,
                left: `${x}px`
            }}></div>
        </div>
    )
}

export default CustomCursor