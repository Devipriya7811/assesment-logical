// 1.Write a JavaScript function to find the index of a given element in an array
const array = [10, 20, 30, 40, 50];
const elementToFind = 30;

let index = -1;
for (let i = 0; i < array.length; i++) {
if (array[i] === elementToFind) {
    index = i;
    break;
}
}

console.log(index); 


// 3.Write a function that removes all false values from an array
function removeFalseValuesFromArray(arr) {
    return arr.filter(item => Boolean(item));
}
const originalArray = [0, 1, false, 2, '', 3, null, 4, undefined, 5];
const filteredArray = removeFalseValuesFromArray(originalArray);

console.log(filteredArray);


// 4.Create a program that generates a random password of a given length.
function generateRandomPassword(length) {
    const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+~`-=[]{}|;:,.<>?";
    let password = "";

    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * charset.length);
    password += charset.charAt(randomIndex);
    }

    return password;
}
const passwordLength = 12;
const randomPassword = generateRandomPassword(passwordLength);
console.log("Random Password:", randomPassword);

// 5.Write a JavaScript function to find the intersection of two arrays.
function findIntersection(arr1, arr2) {
    const set1 = new Set(arr1);
    const intersection = arr2.filter((item) => set1.has(item));

    return intersection;
}
const array1 = [1, 2, 3, 4, 5];
const array2 = [4, 5, 6, 7, 8];

const intersection = findIntersection(array1, array2);
console.log(intersection);

// 6.Create a program that capitalizes the first letter of each word in a sentence
function capitalizeFirstLetter(sentence) {
    
    const words = sentence.split(' ');
    const capitalizedWords = words.map((word) => {
        if (!word.trim()) return word;
    return word.charAt(0).toUpperCase() + word.slice(1);
    });
    return capitalizedWords.join(' ');
}

const sentence = "hello world, how are you today?";
const capitalizedSentence = capitalizeFirstLetter(sentence);
console.log(capitalizedSentence);

// 8.Create a program that calculates the area of a triangle given its base and height.

function calculateTriangleArea(base, height) {
    if (base <= 0 || height <= 0) {
    return "Both base and height must be positive numbers.";
    }

    const area = (base * height) / 2;
    return area;
}

const base = 5;
const height = 10;
const triangleArea = calculateTriangleArea(base, height);
console.log("The area of the triangle is: " + triangleArea);

// 10.Write a JavaScript function to convert a string to title case.

function toTitleCase(str) {
    if (!str) return ""; 

    const words = str.toLowerCase().split(" ");
    const titleCaseWords = words.map((word) => {

    return word.charAt(0).toUpperCase() + word.slice(1);

    });
    const titleCaseString = titleCaseWords.join(" ");

    return titleCaseString;
}

const inputString = "hello world";
const titleCaseString = toTitleCase(inputString);
console.log(titleCaseString);
