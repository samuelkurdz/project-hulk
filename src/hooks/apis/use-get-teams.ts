import { createQuery } from "@tanstack/solid-query";
import { Person } from "../../interfaces";
import { axiosInterceptorInstance } from "../../services/interceptor.service";

const { VITE_BACKEND_URL } = import.meta.env;

export const useGetTeams = () => {
  return createQuery<Person[]>(
    () => ["teams"],
    () => axiosInterceptorInstance.get(`${VITE_BACKEND_URL}/teams`).then(res => res.data),
    {
      staleTime: Infinity,
    }
  )

};

// cool too, just lacks the caching parts
// export const getTeamsResource = () => {
//   const [teams, { refetch,  }] = createResource(
//     () => axiosInterceptorInstance.get<Person[]>(`${VITE_BACKEND_URL}/teams`).then(res => res.data)
//   );
//   return { teams, refetch }
// }
