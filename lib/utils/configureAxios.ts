// import axios, { AxiosError, AxiosResponse } from "axios";
// import { MessageResponse } from "../messageresponse/MessageResponse";
// import { toast } from "react-toastify";
// import { AppRouterInstance } from "next/dist/shared/lib/app-router-context";

// export const configureAxios = (
//   logoutUser: () => void,
//   router: AppRouterInstance
// ) => {
//   axios.defaults.baseURL = "/api/v1";
//   axios.interceptors.response.use(successfullResponseInterceptor, (error) =>
//     errorResponseInterceptor(error, logoutUser, router)
//   );
// };

// const errorResponseInterceptor = (
//   error: AxiosError,
//   logoutUser: () => void,
//   router: AppRouterInstance
// ) => {
//   if (
//     error.response !== undefined &&
//     isResponseEqualsMessageResponse(error?.response.data)
//   ) {
//     if (error?.response.status === 401) {
//       logoutUser();
//       toast.error(error.response.data.message);
//       router.push("/");
//     } else {
//       toast.error(error.response.data.message);
//     }
//   }

//   return Promise.reject(error);
// };

// const successfullResponseInterceptor = (response: AxiosResponse) => {
//   if (
//     isResponseEqualsMessageResponse(response.data) &&
//     response.data.type === "INFO"
//   ) {
//     toast.error(response.data.message);
//   }
//   return response;
// };

// function isResponseEqualsMessageResponse(
//   response: unknown
// ): response is MessageResponse {
//   return (response as MessageResponse).type !== undefined;
// }
