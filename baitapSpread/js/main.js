const theH2 = document.getElementsByTagName("h2")[0];

const valueH2 = theH2.innerText + "";
console.log(valueH2);
const chars = [...valueH2];
console.log(chars);
console.log(chars[0]);
for (let index = 0; index < chars.length; index++) {
    if(index === 0){
        theH2.innerHTML = `<span>${chars[index]}</span>`;
        continue;
    }
    theH2.innerHTML += `<span>${chars[index]}</span>`;
}