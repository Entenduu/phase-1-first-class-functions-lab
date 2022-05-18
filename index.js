// Code your solution in this file!
const returnFirstTwoDrivers = (arr) => arr.slice(0, 2);

const returnLastTwoDrivers = (arr) => {
    return arr.slice(-2);
};

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

const createFareMultiplier = (fare) => {
    return function(n){
        return (n * fare);
    }
};

const fareDoubler = (fare) => {
    return (fare * 2);
};

const fareTripler = (fare) => {
    return (fare * 3);
};

const selectDifferentDrivers = (arrayOfDrivers, aFn) =>  {
    return aFn(arrayOfDrivers);
};