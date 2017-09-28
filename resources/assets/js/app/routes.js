import { Dashboard } from "./Dashboard.vue";
import PageNotFound from "../components/PageNotFound.vue";

export default [
  { path: "/", name: "dashboard", component: Dashboard },
  { path: "*", component: PageNotFound }
];
