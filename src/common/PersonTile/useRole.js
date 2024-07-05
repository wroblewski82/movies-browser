import { useState, useEffect } from "react";
import { getDataFromApi } from "../../utils/getDataFromApi";

export const useRole = (creditId) => {
    const [role, setRole] = useState("");

    useEffect(() => {
      const getRole = async (creditId) => {
        try {
          const fetchRoleData = await getDataFromApi(
            `https://api.themoviedb.org/3/credit/${creditId}?api_key=ac5371c0e378529d6face3e2fab3b7c1`
          );
          setRole(fetchRoleData.job);
        } catch (error) {
          console.error("Can't get data");
        }
      };

      getRole(creditId);
    }, [creditId]);

    return { role };
  };