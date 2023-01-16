import { LoginPayload, LoggedInUser } from "../../interfaces";
import { axiosInterceptorInstance } from "../../services/interceptor.service";
import { storageService } from "../../services/storage.service";

const { VITE_BACKEND_URL } = import.meta.env;

export const useLogin = () => {
  // let navigate = useNavigate();

  async function login(payload: LoginPayload) {
    try {
      const { data } = await axiosInterceptorInstance.post<LoggedInUser>(`${VITE_BACKEND_URL}/auth/login`, payload);
      storageService.storeCurrentUser(data);
      // navigate("/");
      return true;
    } catch (error) {
      console.log(error, "login user error");
      return false;
    } finally {
      // hide();
    }
  }

  return { login };
};
