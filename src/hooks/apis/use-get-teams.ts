import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Person } from "../../interfaces/person.interface";

export const useGetTeams = () => {
  async function fetchTeams() {
    const teams = await axios("http://localhost:8100/teams");
    return teams.data;
  }

  return useQuery<Person[]>(
    ["teams"], fetchTeams,
    {
      staleTime: Infinity,
    }
  );
};
