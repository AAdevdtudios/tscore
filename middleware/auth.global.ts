export default defineNuxtRouteMiddleware((to, from) => {
  const loggedIn = false;
  if (to.path === "/dashboard" && !loggedIn) {
    return navigateTo("/auth/login");
  }
});
