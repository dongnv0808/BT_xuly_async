function printCar(nameCar, money){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(money >= 1000000000){
                resolve(`Du tien mua ${nameCar}`);
            }else{
                reject(`Khong du tien mua ${nameCar}`);
            }
        },1000)
    })
}

function buyCar(){
    let money = document.getElementById('money').value;
    printCar('Mec', money)
    .then((result) => {
        document.getElementById('output').innerHTML = result;
    })
    .catch((err) => {
        document.getElementById('output').innerHTML = err;
    })
}