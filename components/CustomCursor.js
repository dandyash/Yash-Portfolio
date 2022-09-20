import useMousePosition from "../hooks/useMousePosition"
import { useContext } from 'react';
import CustomCursorContext from "../context/CustomCursorContext";

const CustomCursor = () => {
    const { x, y } = useMousePosition();
    const { isLinkHover } = useContext(CustomCursorContext);
    return (
        <div className={`pointer-events-none z-[99] fixed rounded-full aspect-square -translate-x-1/2 -translate-y-1/2  transition-[width,background-color] bg-primary ${isLinkHover ? "w-[75px] bg-transparent border-primary border-[3px]" : "w-[25px]"}`} style={{
            top: `${y}px`,
            left: `${x}px`
        }}></div>
    )
}

export default CustomCursor