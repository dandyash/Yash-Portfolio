import { useEffect, useState } from "react";

const useTheme = () => {
    const [theme, setTheme] = useState("light");

    return [
        () => {
            const html = document.querySelector("html")

            const sysTheme = window.matchMedia("(prefers-color-scheme: dark)");
            const checkTheme = (sysTheme) => {
                if (sysTheme.matches) {
                    html.classList.add("dark");
                } else {
                    html.classList.remove("dark");
                }
            }
            sysTheme.addEventListener("change", checkTheme);
            checkTheme(sysTheme);
        }
    ];

}

export default useTheme;