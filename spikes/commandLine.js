// get command line arguments
// for (let i = 0; i < process.argv.length; i++) {
//     console.log(`argument[${i}] is ${process.argv[i]} `);
// }

// input  args start at 2 ....
let input = {};
if(process.argv.length > 4) {
    input.type = process.argv[2];
    input.name = process.argv[3];
    input.content = process.argv[4];
} else {
    console.log("Usage: ...  <type>  <title> <content body> <parentID>");    
}
