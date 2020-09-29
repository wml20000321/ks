
export default {
    save(context, payload) {
        context.commit('CHUN', payload);
    },
    cjind(context,payload){
        context.commit('CJI', payload);
    }
}