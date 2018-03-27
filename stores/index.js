import store from './store';


const stores = {
    store,
};

export default stores;

var sum =0;
var sum1 = 0;
for(let i=0; i <= items.length-1 ; i++){
    if (i % 2 === 0){
        sum = sum +i ;
    } else {
        sum1 = sum +i;
    }
}
console.log(items);
console.log(sum);
console.log(sum1);