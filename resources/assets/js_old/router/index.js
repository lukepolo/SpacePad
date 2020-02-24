import routes from "./routes";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const router = new VueRouter({
  mode: "history",
  routes: routes
});

// router.beforeResolve((to, from, next) => {
//   // if (!store.state.user.user.is_subscribed) {
//   //   if (to.name !== "subscription") {
//   //     next({
//   //       name: "subscription"
//   //     });
//   //   } else {
//   //     next();
//   //   }
//   // } else {
//   //   next();
//   // }
// });

export default router;
