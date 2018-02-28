import {observable, autorun} from 'mobx';
import Home from '/Users/Mido/tuff/tuffOne/Screens/Home.js'

class store {
    @observable all = [
        {value1: ' ' }
        ];
}
export default new store();
autorun(() => {
    console.log(store.all)
    }
)