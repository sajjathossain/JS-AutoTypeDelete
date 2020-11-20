const text = document.getElementById("text");

const timoutTime = 120;
let listIndex = 0;
let now = 0;
let isIncreasing = true;
let textOut = "";
let output = [  "Life is not about planing!",
                "It is just abot doing the right thing",
                "At the right time!",
                "Designed And Developed By Sajjat Hossain!"];

function startTyping(handle){

        if (textOut.length <= output[listIndex].length && isIncreasing) {

            textOut = output[listIndex].substring(0, now + 2);
            text.innerText = output[listIndex].substr(0, now + 2);
            now += 1;

        } else if (isIncreasing === false) {

            textOut = output[listIndex].substring(0, now - 2);
            text.innerText = output[listIndex].substr(0, now - 2);
            now -= 1;

        }

        if (now === output[listIndex].length+2) {
            isIncreasing = false;
        }

        if(isIncreasing===false && textOut.length === 0){
            textOut="";
            isIncreasing = true;
            listIndex+=1;

            if(listIndex >= output.length){
                listIndex = 0;
            }

        }

    setTimeout(startTyping, timoutTime);

}


document.addEventListener("DOMContentLoaded", () => {
    startTyping();
});
