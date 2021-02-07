const state = () => ({
    users: [],
  });

 const actions ={
    async getAll(context,data){
        const payload = data;
        context.commit('setData',payload);

     }
     
 } 

 const mutations ={
    setMessage(state, payload) {
        state.users = payload.message;
      },
 }
  export default {
    namespaced: true,
    state,
    // getters,
    actions,
    mutations
  }