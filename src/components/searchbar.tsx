import React, { useContext } from "react";
import { FaSearch } from "react-icons/fa";

//Context
import { AppContext } from "../context/app/appContext";
const Searchbar: React.FC = () => {
  const { appState, setFilterProductsList, setHasFilters } =
    useContext(AppContext);

  const handleSearch = (search: string) => {
    if (search === "" || search === null) {
      setHasFilters(false);
    } else {
      setHasFilters(true);
      const productsListFiltred = appState.productsList.filter((product) =>
        product.name.toLowerCase().includes(search.toLowerCase())
      );
      setFilterProductsList(productsListFiltred);
    }
  };
  return (
    <div className="searchbar">
      <FaSearch />
      <input
        type="text"
        placeholder="Search"
        onChange={(e) => handleSearch(e.target.value)}
      />
    </div>
  );
};

export default Searchbar;
