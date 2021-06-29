/* Searching is Applied only on Sorted Array */

let sortedArray = [1,4,24,34,44,54,64.74,84,94,104];

const linearSearch = (searchValue,arr) => {
    for(let i=0; i <= arr.length; i++){
        if(searchValue === arr[i]){
            return searchValue;
        }
    }
    return 'Not Found';
}
console.log('Linear Search',linearSearch(94,sortedArray));
console.log('Linear Search',linearSearch(95,sortedArray));

const binarySearch = (searchValue,arr) => {
    let low = 0;
    let high = arr.length - 1;
    while(low < high){
        let mid = Math.floor((high + low)/2);
        if(searchValue === arr[mid]) return searchValue;

        if(arr[mid] <= searchValue){
            low = mid + 1;
        }else{
            high = mid - 1;
        }
    }
    return 'Not Found';
}
console.log('Binary Search',binarySearch(94,sortedArray));
console.log('Binary Search',binarySearch(95,sortedArray));

module.exports = { binarySearch, linearSearch }