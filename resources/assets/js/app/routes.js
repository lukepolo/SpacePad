import Room  from "./Room.vue";
import Rooms  from "./Rooms.vue";
import Dashboard  from "./Dashboard.vue";
import PageNotFound from "../components/PageNotFound.vue";

export default [
  { path: "/", name: "dashboard", component: Dashboard },
  { path: "/rooms/:room", name: "room", component: Room },
  { path: "/provider/:provider/rooms", name: "provider_rooms", component: Rooms },
  { path: "*", component: PageNotFound }
];
