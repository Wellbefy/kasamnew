/* @flow */
import {observable, autorun, action } from 'mobx';

class store {
    @observable all = {
        valueArray: [1 , 2 , 3, 4 ,5 ,6]
        };

}

export default new store();
autorun(() => {
    console.log(store.all)
    }
)