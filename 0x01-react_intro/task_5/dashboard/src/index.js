import './styles.css';

const greeting = 'Hello, Webpack!';
console.log(greeting);

const element = document.createElement('h2');
element.textContent = greeting;
document.body.appendChild(element);
