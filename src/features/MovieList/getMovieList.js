export const getMovieList = async () => {
  const response = await fetch(
    "/movies-browser/apiResponse/popularMoviesData.json"
  );

  if (!response.ok) {
    new Error(response.statusText);
  }

  return await response.json();
};
