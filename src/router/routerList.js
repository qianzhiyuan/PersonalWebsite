import App from "../views/Test/App";
import Index from "../views/Index/Index";

const routeLists = [
  {
    path: "/index",
    component: Index
  },
  {
    path: "/tacos",
    component: App,
    routes: [
      {
        path: "/tacos/bus",
        component: App
      },
      {
        path: "/tacos/cart",
        component: App
      }
    ]
  }
];

export default routeLists;
