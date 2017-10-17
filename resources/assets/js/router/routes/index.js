import Rooms from "@views/Rooms.vue";
import Room from "@views/room/Room.vue";
import Dashboard from "@views/Dashboard.vue";
import AppSpace from "@components/AppSpace.vue";
import PageNotFound from "@components/PageNotFound.vue";

const routes = [
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

export default routes;
