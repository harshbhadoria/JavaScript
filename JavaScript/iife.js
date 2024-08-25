// Immediately Invoked Function Expressions (IIFE)
// () ()
// (function body) (calling)

(function chai(){
    console.log(`DB CONNECTED`);
}) ();


( (name) =>{
    console.log(`DB CONNECTED TWO BY ${name}`);
}) ('HARSH')












