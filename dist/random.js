"use strict";
// Given a list of items, return a random item from the list
function randItem(myList) {
    if (myList.length === 0) {
        return '';
    }
    const value = myList[Math.floor(seededRandom() * myList.length)];
    return value;
}
// Given a list of items, shuffle the list and return the list
function shuffleList(myList) {
    for (let i = myList.length - 1; i > 0; i--) {
        const j = randItem([...Array(i + 1).keys()]);
        [myList[i], myList[j]] = [myList[j], myList[i]];
    }
    return myList;
}
// Given a list of items, return {amount} unique items from the list
function randUniqueItems(myList, amount) {
    myList = shuffleList(myList);
    if (amount >= myList.length) {
        return myList;
    }
    myList = myList.slice(0, amount);
    return myList;
}
// Given a list of ditionaries where each dictionary has a 'weight' property return a look up table from 0 to slices (scd) that points to one of the dictonaries based on the 'weight' property
function weightedRandomTable(myList) {
    const slices = smallestCommonDenominator(myList.map((x) => x.weight));
    const table = {};
    let j = 0;
    for (let i = 0; i < myList.length; i++) {
        const sliceSize = myList[i].weight * slices;
        for (let k = 0; k < sliceSize; k++) {
            table[j] = myList[i];
            j += 1;
        }
    }
    return table;
}
// Given a look up table created by weightedRandomTable return a random item from the table
function weightedRandom(tableData) {
    const i = Math.floor(seededRandom() * Object.keys(tableData).length);
    return tableData[i];
}
