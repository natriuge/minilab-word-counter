
console.log('JS connected'); // <== just a quick check up to make sure js doc is connected properly



const wordCountButton = document.getElementById('wordCount-button');



function wordCount() {

    const wordCountArea = document.getElementById('wordCount-area').value;
    let count = 0;
    let split = wordCountArea.split(' ');

    for (let i = 0; i < split.length; i++) {
        if (split[i] != "") {
            count ++;
        }
    }
  
    document.getElementById('wordCount-text').innerHTML = count;
}