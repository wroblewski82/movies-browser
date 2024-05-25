export const getGenreList = async () => {
  const response = await fetch("/movies-browser/apiResponse/genresData.json");

  if (!response.ok) {
    new Error(response.statusText);
  }

  return await response.json();
};
