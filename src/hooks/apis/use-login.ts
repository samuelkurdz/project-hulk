import axios from "axios";
import { useNavigate } from "react-router-dom";
import { LoginPayload, LoggedInUser } from "../../interfaces";
import { storageService } from "../../services/storage.service";

export const useLogin = () => {
  let navigate = useNavigate();
  const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;
  async function login(payload: LoginPayload) {

    try {
      const { data } = await axios.post<LoggedInUser>(`${BACKEND_URL}/auth/login`, payload);
      storageService.storeCurrentUser(data);
      navigate("/");
    } catch (error) {
      console.log(error, "login user error");
    } finally {
      // hide();
    }
  }

  return { login };
};
