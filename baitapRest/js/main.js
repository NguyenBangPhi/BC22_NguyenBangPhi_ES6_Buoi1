const getEle = (id) =>{
    return document.getElementById(id);
};

const tb = (...diem) => {
    let kq = 0;
    console.log(diem.length);
    for (let i = 0; i < diem.length; i++) {
        kq += Number.parseFloat(diem[i]);
    }
    kq = kq/(diem.length);
    if(diem.length === 3){
        getEle("tbKhoi1").innerHTML = kq.toFixed(2);
    }else{
        getEle("tbKhoi2").innerHTML = kq.toFixed(2);
    }
    
}

const tinh = (number) => {
    const diemToan = getEle("inpToan").value;
    const diemLy = getEle("inpLy").value;
    const diemHoa = getEle("inpHoa").value;
    const diemVan = getEle("inpVan").value;
    const diemSu = getEle("inpSu").value;
    const diemDia = getEle("inpDia").value;
    const diemEnglish = getEle("inpEnglish").value;
    let flag = true;
    
    //const mangDiem1 = [diemToan,diemLy,diemHoa];
    //const mangDiem2 = [diemVan,diemSu,diemDia,diemEnglish];
    if(number === 1){
        if (diemToan === "") {
            flag &= false;
            console.log(flag);
        }
        if(isNaN(diemToan)){
            flag &= false;
        }
        if (diemLy === "") {
            flag &= false;
        }
        if(isNaN(diemLy)){
            flag &= false;
        }
        if (diemHoa === "") {
            flag &= false;
        }
        if(isNaN(diemHoa)){
            flag &= false;
        }   
        if(flag){
            tb(diemToan,diemLy,diemHoa);
        }else{
            alert("Nhập sai !");
        }
        
    }else{
        if (diemVan === "") {
            flag &= false;
        }
        if(isNaN(diemVan)){
            flag &= false;
        }
        if (diemSu === "") {
            flag &= false;
        }
        if(isNaN(diemSu)){
            flag &= false;
        }
        if (diemDia === "") {
            flag &= false;
        }
        if(isNaN(diemDia)){
            flag &= false;
        }
        if (diemEnglish === "") {
            flag &= false;
        }
        if(isNaN(diemEnglish)){
            flag &= false;
        }
        if(flag){
            tb(diemVan,diemSu,diemDia,diemEnglish);
        }else{
            alert("Nhập sai !");
        }
        
    }
}
    
//JS
// const tinhDTB1 = () =>{
//     const diemToan = getEle("inpToan").value *1;
//     const diemLy = getEle("inpLy").value *1;
//     const diemHoa = getEle("inpHoa").value *1;

//     let flag = true;
//     if (diemToan === "") {
//         flag &= false;
//     }
//     if(isNaN(diemToan)){
//         flag &= false;
//     }
//     if (diemLy === "") {
//         flag &= false;
//     }
//     if(isNaN(diemLy)){
//         flag &= false;
//     }
//     if (diemHoa === "") {
//         flag &= false;
//     }
//     if(isNaN(diemHoa)){
//         flag &= false;
//     }

//     if (flag) {
//         getEle("tbKhoi1").innerHTML = ((Number.parseFloat(diemToan) + Number.parseFloat(diemLy) + Number.parseFloat(diemHoa))/3).toFixed(2);
//     }else{
//         alert("Nhập sai điểm !");
//     }

// }

// const tinhDTB2 = () =>{
//     const diemVan = getEle("inpVan").value;
//     const diemSu = getEle("inpSu").value;
//     const diemDia = getEle("inpDia").value;
//     const diemEnglish = getEle("inpEnglish").value;


//     let flag = true;
//     if (diemVan === "") {
//         flag &= false;
//     }
//     if(isNaN(diemVan)){
//         flag &= false;
//     }
//     if (diemSu === "") {
//         flag &= false;
//     }
//     if(isNaN(diemSu)){
//         flag &= false;
//     }
//     if (diemDia === "") {
//         flag &= false;
//     }
//     if(isNaN(diemDia)){
//         flag &= false;
//     }
//     if (diemEnglish === "") {
//         flag &= false;
//     }
//     if(isNaN(diemEnglish)){
//         flag &= false;
//     }

//     if (flag) {
//         getEle("tbKhoi2").innerHTML = ((Number.parseFloat(diemVan) + Number.parseFloat(diemSu) + Number.parseFloat(diemDia) + Number.parseFloat(diemEnglish))/4).toFixed(2);
//     }else{
//         alert("Nhập sai điểm !");
//     }

// }


