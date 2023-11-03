//Actividad 1
function random_array(arr_length=10,min_value=100,max_value=200){
    let arr_rnd = new Array(arr_length);
    for (let index = 0; index < arr_rnd.length; index++) {
        arr_rnd[index] = parseInt(Math.random() * (max_value - min_value) + min_value )
    }
        
    return arr_rnd
}
//Actividad 2 y 3
function random_array_sorted(arr_length=20,min_value=20,max_value=100,disorder=false){
    disorder ? disor_func = (a,b) => Math.floor(Math.random()*(arr_length+1)) : disor_func=(a,b) => a-b;
    arr_rnd = random_array(arr_length,min_value,max_value)
    arr_rnd.sort()
    return arr_rnd.sort(disor_func);
}
//Actividad 3