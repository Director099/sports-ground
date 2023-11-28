import {useState, useEffect} from "react";

export const useMediaQuery = (query: string) => {
  const matchQueryList = window.matchMedia(query);
  const [matches, setMatches] = useState(matchQueryList.matches);

  useEffect(() => {
    const handleChange = ({matches}: {matches: boolean}) => setMatches(matches);
    matchQueryList.addEventListener("change", handleChange);
    return () => matchQueryList.removeEventListener("change", handleChange);
  }, [query]);

  return matches;
}
