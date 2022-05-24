function changeColor(event) {
    document.getElementById("main").style.backgroundColor = event. value;  
}

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const items = [
    { pen: 21, soda: 12, pencil: 3, eraser: 4 },
    { soda: 37, pen: 12, pencil: 3, eraser: 4 },
    { backpack: 47 },
    { usb: 33 },
    { soda: 12 },
    { backpack: 12 },
    { usb: 20 },
];

const groped = items.reduce((acc, item) => {
    for (let prop in item){
        if (acc.hasOwnProperty(prop)) acc[prop] += item[prop];
        else acc[prop] = item[prop];
    }
    return acc;
}, {});



const promisedFunction = (number) => {
    return new Promise((resolve, reject) => {
        if (number > 10) {
        setTimeout(() => {
            resolve(number + 20);
            resolve(`Succes number:${number}`);
        }, 1000);
    } else {
        reject(`Error el numero ${number} es menor a 10`);
    }
    });
};

async function main () {
    try{
        console.log("Ejecutando Promesa 1");
        const result = await promisedFunction(100);
        console.log("Termina Promesa 1");
        console.log("Ejecutando promesa 2");
        const result2 = await printNewNumberPlus20(result);
        console.log("Termina Promesa 2");
        console.log(result2);
    } catch (error) {
        console.error(error);
    } finally {
        console.log("funcion terminada");
    }
}

main();

const numbersPlusTen = numbers.map((number) => number + 10);
const greaterThanFive = numbers.filter((number) => number > 5);
const numberFive = numbers.find((number)=> number === 5);
const indexOfFive = numbers.findIndex ((number) => number === 5);




console.log(promisedFunction);
