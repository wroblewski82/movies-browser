import { SearchBox, SearchForm, SearchIcon } from "./styled";

export const Search = ({ placeholder }) => {
  return (
    <SearchBox>
      <SearchIcon />
      <SearchForm placeholder={placeholder} />
    </SearchBox>
  );
};
