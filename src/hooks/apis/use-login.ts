import axios from "axios";
import { useNavigate } from "react-router-dom";
import { LoginPayload, LoggedInUser } from "../../interfaces";
import { storageService } from "../../services/storage.service";

export const useLogin = () => {
  let navigate = useNavigate();
  async function login(payload: LoginPayload) {

    try {
      const { data } = await axios.post<LoggedInUser>(`http://localhost:8100/auth/login`, payload);
      console.log(data);
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
