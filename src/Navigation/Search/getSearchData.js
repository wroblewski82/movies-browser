export const getSearchData = async (query, page, type) => {
  const response = await fetch(
    `https://api.themoviedb.org/3/search/${type}&query=${query}&api_key=5808b0503fd4aaf8a5636df1649fe0dc&page=${page}`
  );

  if (!response.ok) {
    throw new Error(response.statusText);
  }

  return await response.json();
};