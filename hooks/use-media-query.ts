"use client";

import { useEffect, useState } from "react";

export function useMediaQuery(query: string): boolean {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    // Create a MediaQueryList object
    const media = window.matchMedia(query);

    // Set the initial value
    setMatches(media.matches);

    // Define a callback function to handle changes
    const listener = () => setMatches(media.matches);

    // Add the callback function as a listener for changes to the media query
    media.addEventListener("change", listener);

    // Remove the listener when the component is unmounted
    return () => {
      media.removeEventListener("change", listener);
    };
  }, [query]);

  return matches;
}