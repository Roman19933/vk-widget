export default async function({ store, redirect, route }) {
  if (route.query.vk_platform !== undefined && route.query.vk_platform !== 'desktop_web') {
    redirect({ path: "/mobile"})
  } else if (route.query.vk_group_id !== undefined) {
    await store.commit("server/token/SET_VK_QUERY", route.query)

    let { data } = await validToken(store)

    console.log(route.query.vk_platform)
    console.log(data)

    redirect({ path: "/main"})
    // if (data.check && route.path === "/") {
    //   redirect({ path: "/main" });
    // } else if (!data.check && route.path !== "/") {
    //   redirect({ path: "/" });
    // }
  }
}

async function validToken(store) {
  const groupId = store.getters["server/token/vkQuery"].vk_group_id;
  return await store.dispatch("server/token/checkToken", groupId);
}
