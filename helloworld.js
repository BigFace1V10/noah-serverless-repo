// code your `hello` function here!

function hello() 
{
    return "Hello World";
}

exports.hello = hello;


let hello = require('helloworld.js')
let output = hello.hello()
