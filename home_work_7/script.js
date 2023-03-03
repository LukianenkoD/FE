// ----1-----
var arr1 = {
    'ru':['голубой', 'красный', 'зеленый'],
    'en': ['blue', 'red', 'green']
};
console.log(arr1['ru'][0]);
// -----2-----
const date = [
    {
        name: "Kolia",
        salary: 200,
    },
    {
        name: "Vasia",
        salary: 300,
    },
    {
        name: "Petia",
        salary: 400,
    }
];

console.log(`${date[0].name} - salary is ${date[0].salary} dollars`)
// ------3-------
const date1 = {
    js:['jQuery','Angular'],
    php:'hello',
    css: 'world',
}
console.log(date1.js[0]);
// -------4---------
var arr = {
  'ru':['понедельник', 'вторник', 'среда','четверг','пятница', 'суббота', 'воскресенье'],
  'en':['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday','Sunday'],
};

console.log(arr['ru'][0]+' '+arr['en'][2]);

// ----------5----------
const weekDays = [
    {
        one: "Monday",
        two: "Tuesday",
        three: "Wednesday",
        four: "Thursday",
        five: "Friday",
        six: "Saturday",
        seven: "Sunday",

    }
];
console.log(weekDays[0].five);