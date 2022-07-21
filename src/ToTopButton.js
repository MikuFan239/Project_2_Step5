// Referecen: https://stackabuse.com/how-to-scroll-to-top-in-react-with-a-button-component/
import React, { useState, useEffect } from "react";
import { CgArrowUpO } from "react-icons/cg";
import "./ToTopButton.css";

const ToTopButton = () => {
    const [showToTop, setshowToTop] = useState(false);
    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 50) {
                setshowToTop(true);
            } else {
                setshowToTop(false);
            }
        });
    }, []);

    const toTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <div className="toTopButton">
            {/* {" "} */}
            {showToTop && (
                <CgArrowUpO
                    className="icon-position icon-style"
                    onClick={toTop}
                />
            )}
            <div class="tooltipToTop">Scroll to Top</div>
        </div>
    );
};
export default ToTopButton;