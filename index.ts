// Import stylesheets
import './style.css';

// Typescript Generics, mixing anything
let play_one = "There are";
let play_two = 4567;
let play_three = "";

let appDiv: HTMLElement = document.getElementById('app');

function loggingIdentity<T, V, U> (arg0: T, arg1: V, arg2: U): [T, V, U] {  
    return [arg0, arg1, arg2];
}

appDiv.innerText = loggingIdentity (play_one, play_two, play_three).join(" ");

