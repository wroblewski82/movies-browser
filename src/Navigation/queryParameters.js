import { useLocation } from "react-router";
import {} from "react-router-dom";

export const useQueryParameter = (key) => {
  const location = useLocation();
  return new URLSearchParams(location.search).get(key);
};

export const useReplaceQueryParameter = () => {
  const location = useLocation();

  return ({ key, value }) => {
    const searchParams = new URLSearchParams(location.search);

    if (value === undefined) {
      searchParams.delete(key);
    } else {
      searchParams.set(key, value);
    }
  };
};
