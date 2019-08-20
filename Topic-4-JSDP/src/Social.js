import {pulpFiction} from './index'

const social = {
    share: function(friendName){
        console.log(friendName + " share " + pulpFiction.title);
    },
    like: function(friendName){
        console.log(friendName + " likes " + pulpFiction.title);
    }
}

export default social;