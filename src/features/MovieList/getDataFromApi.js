export const getDataFromApi = async (api) => {
  const response = await fetch(api);

  if (!response.ok) {
    new Error(response.statusText);
  }

  return await response.json();
};
