import {useEffect} from "react";
import {useLocation} from "react-router-dom";

// Решение IOS скролл вверх
// https://v5.reactrouter.com/web/guides/scroll-restoration

export const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}
