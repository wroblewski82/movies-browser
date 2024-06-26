export const getGenresFromApi = async (api) => {
  const response = await fetch(api);

  if (!response.ok) {
    new Error(response.statusText);
  }

  return await response.json();
};
