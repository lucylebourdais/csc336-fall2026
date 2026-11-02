class myArray {
    constructor() {
        this.arr = [];
    }
    push(item) {
        this.arr.push(item);
    }
    get(index) {
        return this.arr[index];
    }
    forEach(fn) {
        for (let i = 0; i < this.arr.length; i += 1) {
            fn(this.arr[i]);
    }
    }
    //map function expects a function as the argument. 
    //returns new array with results of calling provided function on every element.
    //what happens in map() is determined when map() is called.
    map(fn) {
        let newArr = [];
        for (let element of this.arr) {
            newArr.push(fn(element));
        }
        return newArr;
    }
    //class ver. filter function
    filter(fnToRunOnEachElement) {
        let arrToSatisfyFn = [];
        for (let element of this.arr) {
            if (fnToRunOnEachElement(element)) {
                arrToSatisfyFn.push(element);
            }
        }
        return arrToSatisfyFn;
    }
}


document.addEventListener("DOMContentLoaded", () => {
    
    let arr = new myArray();
    arr.push(4);
    arr.push(-1);
    arr.push(9);
    arr.push(2);
    arr.push(5);

    // let mapExample = arr.map(e => e * 2);
    //Equivalent to ^^
    let mapExample = arr.map((currentElement) => {
        return currentElement * 2;
    });
    console.log(mapExample);

    //method 1
    let i = 0;
    while (i < arr.length) {
        let current = arr.get(i);
        console.log(current);
        i += 1;
    }

    //method 2
    arr.forEach((current) => {
        console.log(current);
    });

    //non-class ver. filter function
    // let greaterThanZero = arr.filter((currentElement) =>{
    //     if (currentElement > 0) {
    //         return true;
    //     }
    //     return false;
    // });


    // startArr = [4, -1, 9, 2, 5];
    // newArr = startArr.map(currentElement =>  { 
    //         return currentElement;
    //     });
    // console.log(startArr);
    // console.log(newArr);

    console.log(arr);
});
