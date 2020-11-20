let Henry = ['yes'];
let name = prompt('Hello, What is your name?')
let search = prompt('Do you make over $100,000 a year?')

// let name = What is your name?;

if (Henry.includes(search.toLowerCase())) {
    message = `Hello, ${name}, How may we serve you? `;
} else {
    message =  `This service may not be for you ${name}, sorry!`;
}


document.querySelector('main').innerHTML = `<p>${message}</p>`;