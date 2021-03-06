export default async function ({ store, redirect, route }) {
  if (route.query.vk_platform !== undefined && route.query.vk_platform !== 'desktop_web') {
    redirect({ path: "/mobile" })
  } else if (route.query.vk_group_id !== undefined) {
    await store.commit("server/token/SET_VK_QUERY", route.query)
    await validToken(store)
    redirect({ path: "/main" })
  }
}

async function validToken(store) {
  const groupId = store.getters["server/token/vkQuery"].vk_group_id;
  return await store.dispatch("server/token/checkToken", groupId);
}

