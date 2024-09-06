import React, { createContext, useState } from "react";

export const SearchContext = createContext();

export const SearchProvider = ({ children }) => {
  const [isSearchBarVisible, setIsSearchBarVisible] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  // Click function to show search bar
  const handleSearchIconClick = () => {
    setIsSearchBarVisible(!isSearchBarVisible);
  };

  const handleSearchQueryChange = (event) => {
    setSearchQuery(event.target.value);
  };

  return (
    <SearchContext.Provider
      value={{
        isSearchBarVisible,
        handleSearchIconClick,
        handleSearchQueryChange,
        searchQuery,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
};
