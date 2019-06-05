
const _ = {
    //.clamp() modifies the provided number to be within the two provided bounds
    clamp(number, lowerBound, upperBound) {
        return Math.min(Math.max(number, lowerBound), upperBound);
    },
    //.inRange() checks to see if the provided number falls within the range specified by the start and end values
    inRange(number, start, end){
        if(typeof(end) === 'undefined'){
            end = start;
            start = 0;
        };
        if(start > end){
            temp = end;
            end = start;
            start = temp;
        };
        const isInRange = ((start <= number) && (number < end));
        return isInRange
    },
    //.words() takes one argument: a string
    //.words() splits the string into an array of words
    words(string){
        return string.split(' ');
    },
    //.pad() takes two arguments: a string and a length
    //.pad() adds spaces evenly to both sides of the string to make it reach the desired length
    pad(string, len){
        if(len <= string.length){
            return string
        }
        else{
            startPaddingLength  = Math.floor((len - string.length) / 2);
            endPaddingLength  = len - string.length - startPaddingLength;
            spacing = ' ';
            return spacing.repeat(startPaddingLength)+string+spacing.repeat(endPaddingLength)
        }
    },
    //.has() takes two arguments: an object and a key
    //.has() checks to see if the provided object contains a value at the specified key
    has(object, path){
        hasValue = object[path]
        return typeof(hasValue) !== 'undefined'
    },
    //.invert() takes one argument: an object
    //.invert() iterates through each key / value pair in the provided object and swaps the key and value
    invert(object){
        let invertedObject = {};
        for(let key in object){
            const originalValue = object[key];
            invertedObject = {originalValue: key};
        }
        return invertedObject;
    },
    //.findKey() takes two arguments: an object and a predicate function — a function that returns a boolean value
    //.findKey() iterates through each key / value pair in the provided object and calls the predicate function with the value
    findKey(obj, predicate){
        for (let key in obj){
            value = obj[key];
            let predicateReturnValue = predicate(value)
            if (predicateReturnValue){
                return key
            }
        }
        undefined
        return undefined
    },
    drop(array, n){
        if (n === undefined){
            n = 1;
        }
        let droppedArray = array.slice(n, array.length);
        return droppedArray
    },
    //.dropWhile() takes two arguments: an array and a predicate function
    //The supplied predicate function takes three arguments: the current element, the current element index, and the whole array
    dropWhile(array, predicate){
        const cb = (element, index) => {
            return !predicate(element, index, array);
        };
        let dropNumber = array.findIndex(cb);
        let droppedArray = this.drop(array, dropNumber)
        return droppedArray
    },
    //.chunk() takes two arguments: an array and a size
    //.chunk() breaks up the supplied array into arrays of the specified size
    chunk(array, size = 1){
        let arrayChunks = [];
        for(let i = 0; i < array.length; i+= size){
            let arrayChunk = array.slice(i, i+size);
            arrayChunks.push(arrayChunk)
        }
        return arrayChunks
    }
}



// Do not write or modify code below this line.
module.exports = _;