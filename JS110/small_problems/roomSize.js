const readLineSync = require('readline-sync');

const METER_TO_FOOT_RATIO = 10.7639;

const length = Number(readLineSync.question("Enter the length of the room in meters:\n"));
const width = Number(readLineSync.question("Enter width of the room in meters:\n"));

const areaInMeters = (length * width).toFixed(2);
const areaInFeet = (areaInMeters * METER_TO_FOOT_RATIO).toFixed(2);

console.log(`The are of the room is ${areaInMeters} square meters (${areaInFeet} square feet).`);

