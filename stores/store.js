import {observable, autorun} from 'mobx';
import Home from '/Users/Mido/tuff/tuffOne/Screens/Home.js'

class store {
    @observable all = [
        {value1: ' ' },
        {value: 2, label: '2'},
        {value: 3, label: '3'},
        {value: 4, label: '4'},
        {value: 5, label: '5'},
        {value: 6, label: '6',}
        ];
}
export default new store();
autorun(() => {
    console.log(store.all)
    }
)