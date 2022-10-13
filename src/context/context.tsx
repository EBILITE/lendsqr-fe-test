import React, { useState, useContext, useEffect } from "react";
import axios from "axios";
import { useCallback } from "react";
import { UserApiResponseType } from "../Types/Users";
import paginate from "../Utils/Paginate";

export const url =
  "https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users";

const AppContext = React.createContext<{
  loading: boolean;
  list: UserApiResponseType[][];
}>({ loading: false, list: [] });

const AppProvider = ({ children }: { children: React.ReactNode }) => {
  const [loading, setLoading] = useState(true);
  const [list, setList] = useState<UserApiResponseType[][]>([]);

  const fetchData = useCallback(async () => {
    setLoading(true);

    try {
      const response = await axios.get<any, { data: UserApiResponseType[] }>(
        url
      );
      const data = response.data;
      const newData = paginate(data);
      setList(newData);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }

    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <AppContext.Provider value={{ loading, list }}>
      {children}
    </AppContext.Provider>
  );
};
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
