import {useEffect} from "react";
import {useLocation} from "react-router-dom";

/**
 * Client-side navigation keeps the current scroll offset, so a new page would
 * otherwise open half way down. Reset it whenever the route changes.
 */
function ScrollToTop() {
    const {pathname} = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return null;
}

export default ScrollToTop;
