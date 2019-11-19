import App from "../views/Test/App";
import Index from "../views/Index/Index";
import Write from '../views/Write/Write';
import Content from '../views/Content/Content';

const routeLists = [
  {
    path: "/index",
    component: Index
  },
  {
    path: "/content",
    component: Content
  },
  {
    path: "/write",
    component: Write
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
