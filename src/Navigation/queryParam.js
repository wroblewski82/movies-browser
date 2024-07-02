import { useLocation, useNavigate } from "react-router";

export const useQueryParam = (key) => {
  const location = useLocation();
  return new URLSearchParams(location.search).get(key);
};

export const useReplaceQueryParam = () => {
  const location = useLocation();
  const navigation = useNavigate();

  return ({ key, value }) => {
    const searchParam = new URLSearchParams(location.search);
    if (value === undefined) {
      searchParam.delete(key);
    } else {
      searchParam.set(key, value);
    }
    navigation(`${location.pathname}?${searchParam.toString()}`);
  };
};
