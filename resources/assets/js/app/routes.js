import Rooms from "./Rooms.vue";
import Room from "./room/Room.vue";
import Dashboard from "./Dashboard.vue";
import AppSpace from "./../components/AppSpace.vue";
import PageNotFound from "../components/PageNotFound.vue";

export default [
  {
    path: "/",
    component: AppSpace,
    children: [
      { path: "/", component: Dashboard, name: "dashboard" },
      {
        path: "/provider/:provider/rooms",
        name: "provider_rooms",
        component: Rooms
      }
    ]
  },
  { path: "/rooms/:room", name: "room", component: Room },
  { path: "*", component: PageNotFound }
];
