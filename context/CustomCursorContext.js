import React, { createContext, useState } from 'react'

const CustomCursorContext = createContext();

export const CustomCursorProvider = ({ children }) => {
    const [isLinkHover, setIsLinkHover] = useState(false);
    return (
        <CustomCursorContext.Provider value={{
            isLinkHover, setIsLinkHover
        }}>
            {children}
        </CustomCursorContext.Provider>
    )
}

export default CustomCursorContext