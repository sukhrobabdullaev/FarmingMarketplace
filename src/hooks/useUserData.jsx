import { useQuery } from "react-query";
import { API } from "../react-query/query";

export const useUserData = () => {
  return useQuery("userData", async () => {
    const response = await API.getUserProfile();
    // console.log(response.data);
    return response.data;
  });
};
