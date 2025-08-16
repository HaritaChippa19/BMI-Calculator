function Calculate(){
    let height = parseInt(document.querySelector("#height").value);
    document.querySelector("#height-val").textContent = height + " cm";
    
    let weight = parseInt(document.querySelector("#weight").value);
    document.querySelector("#weight-val").textContent = weight + " kg";
    
    let bmi = (weight/(Math.pow(height/100), 2)).toFixed(1);
    document.querySelector("#result").textContent = bmi;

    let category = document.querySelector(".categories");
    if(bmi < 18.5){
        category.textContent = "UNDERWEIGHT";
        document.querySelector("#result").style.color = "white";
    }else if(bmi > 18.5 && bmi < 24.9){
        category.textContent = "NORMAL WEIGHT";
        document.querySelector("#result").style.color = "yellow";
    }else if(bmi > 25.0 && bmi < 29.9){
        category.textContent = "OVERWEIGHT";
        document.querySelector("#result").style.color = "orange";
    }else{
        category.textContent = "OBESITY";
        document.querySelector("#result").style.color = "maroon";
    }
}