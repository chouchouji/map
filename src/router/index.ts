import Home from "@/pages/Home/index";

const routes = [
  {
    path: "/",
    exact: true,
  },
  {
    path: "/home",
    name: "home",
    component: Home,
  },
];

export default routes;
