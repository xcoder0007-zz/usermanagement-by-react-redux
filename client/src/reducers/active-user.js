export default function (state=null,action){
    switch(action.type){
        case 'USER-SELECTED':
        return action.payload;
    }

    return state;
}