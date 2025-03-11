const routes = [
  { path: "/auth/login", authenticated: false },
  { path: "/auth/signup", authenticated: false },
  { path: "/projects", authenticated: false },
  { path: "/discussion", authenticated: false },
  { path: "/discussion/new", authenticated: true },
  { path: "/user/profile", authenticated: true },
  { path: "/qna", authenticated: false },
];

export default routes;
