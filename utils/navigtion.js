import { useRouter } from "next/router";
import routes from "./routes";

const UseNavigateToRoute = () => {
  const router = useRouter();

  const navigateToRoute = (path) => {
    const route = routes.find((r) => r.path === path);
    if (route) {
      if (route.authenticated && !isAuthenticated()) {
        router.push("/auth/login");
      } else {
        router.push(route.path);
      }
    } else {
      console.error(`Route not found: ${path}`);
    }
  };

  return navigateToRoute;
};

const isAuthenticated = () => {
  return localStorage.getItem("token") !== null;
};

export default UseNavigateToRoute;
