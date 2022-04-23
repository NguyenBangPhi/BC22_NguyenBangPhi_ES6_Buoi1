const colorList = ["pallet","viridian","pewter","cerulean","vermillion","lavender","celadon","saffron","fuschia","cinnabar"];

const forButton = (list) =>{
    const div = document.getElementById("colorContainer");
    for (let i = 0; i <= 9; i++) {
        // div.innerHTML += `<button class="color-button ${colorList[i]}" onclick="clickColor(${colorList[i]})" ></button>`;
        div.innerHTML += "<button class='color-button " + list[i]+ "' onclick='clickColor("+i+")'></button>";
    }
};
forButton(colorList);

const clickColor = (index) =>{
    const div = document.getElementById("house");
    div.className = '';
    div.classList.add("house");
    div.classList.add(colorList[index]);
    console.log(colorList[index]);

    const divAfter = document.getElementsByTagName("button");
    console.log(divAfter);
    for (let i = 0; i < divAfter.length; i++) {
        console.log(divAfter.length);
        if(i === index){
            divAfter[i].classList.add("active");
        }else{
            divAfter[i].className = '';
            divAfter[i].classList.add("color-button");
            divAfter[i].classList.add(colorList[i]);
        }
        
    }
};