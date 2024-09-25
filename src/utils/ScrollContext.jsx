import React, { createContext, useRef, useContext } from "react";

const ScrollContext = createContext();

export const ScrollProvider = ({ children }) => {
  // Store refs for multiple components
  const sectionRefs = useRef({});

  // Function to scroll to a specific component by key/click
  const scrollToSection = (key) => {
    sectionRefs.current[key]?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  // Register a ref for a specific key
  const registerRef = (key, ref) => {
    sectionRefs.current[key] = ref;
  };

  return (
    <ScrollContext.Provider value={{ scrollToSection, registerRef }}>
      {children}
    </ScrollContext.Provider>
  );
};

export const useScroll = () => useContext(ScrollContext);
