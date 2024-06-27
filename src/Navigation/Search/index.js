import { useRef } from "react";
import { useQueryParam, useReplaceQueryParam } from "../queryParam";
import searchQueryName from "../searchQueryName";
import { SearchBox, SearchForm, SearchIcon } from "./styled";
import { useLocation, useNavigate } from "react-router";
import { usePageButton } from "../../Pagination/usePageButton";
import paginationParamName from "../../Pagination/paginationParamName";

export const Search = ({ placeholder }) => {
  const query = useQueryParam(searchQueryName);
  const replaceQueryParameter = useReplaceQueryParam();
  const searchBarRef = useRef();
  const location = useLocation();
  const history = useNavigate();
  const { page, setFirstPage } = usePageButton();

  const onInputChange = ({ target }) => {
    replaceQueryParameter({
      key: searchQueryName,
      value: target.value.trim() !== "" ? target.value : undefined,
    });
  };

  const setPageToFirst = () => {
    setFirstPage();
    replaceQueryParameter({
      key: paginationParamName,
      value: page,
    });
  };

  const onFocus = () => {
    if (location.pathname.startsWith("/movies/")) {
      history("/movies");
    } else if (location.pathname.startsWith("/people/")) {
      history("/people");
    } else {
      setFirstPage();
    }
  };

  return (
    <SearchBox>
      <SearchIcon />
      <SearchForm
        ref={searchBarRef}
        placeholder={placeholder}
        value={query || ""}
        onChange={onInputChange}
        onFocus={onFocus}
      />
    </SearchBox>
  );
};
