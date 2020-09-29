
export default {
    CHUN(state, val) {
        state.kslist.push(val);
    },
    CJI(state,vals){
        console.log(vals.val);
        state.cj=vals.name;
        state.tmlist=vals.val;
    }
}