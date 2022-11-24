import { useEffect, useRef } from 'react';

function BackTop() {
    const backTopRef = useRef(null);

    useEffect(() => {
        const handleShowBackTop = () => {
            if (
                document.body.scrollTop > 20 ||
                document.documentElement.scrollTop > 20
            ) {
                if (backTopRef) (backTopRef as any).current.style.display = "block";
            } else {
                if (backTopRef) (backTopRef as any).current.style.display = "none";
            }
        };
        window.addEventListener("scroll", handleShowBackTop);
        return () => window.removeEventListener("scroll", handleShowBackTop);
    }, []);

    function handleScrollTop() {
        window && window.scrollTo({ top: 0, behavior: "smooth" });
    }

    return (
        <button
            ref={backTopRef}
            onClick={handleScrollTop}
            className="p-3 bg-light-blue text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-red hover:shadow-lg focus:bg-red focus:shadow-lg focus:outline-none focus:ring-0 active:bg-light-green active:shadow-lg transition duration-150 ease-in-out hidden bottom-5 right-5 fixed"
        >
            <svg className="w-4 h-4" aria-hidden="true" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
                <path d="M9.39 265.4l127.1-128C143.6 131.1 151.8 128 160 128s16.38 3.125 22.63 9.375l127.1 128c9.156 9.156 11.9 22.91 6.943 34.88S300.9 320 287.1 320H32.01c-12.94 0-24.62-7.781-29.58-19.75S.2333 274.5 9.39 265.4z" />
            </svg>
        </button>
    )
}

export default BackTop