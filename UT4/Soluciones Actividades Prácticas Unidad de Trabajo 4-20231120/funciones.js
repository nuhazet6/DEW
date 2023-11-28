function newArray(n=10,min=100,max=200){
            let arr = [];
            while(n>0){
                    arr.push(parseInt(Math.random()*(max-min+1)+min));
                    n--;
                }
            return arr;
        }

function ordenar(x){
            return x.sort(function(a,b){return a-b});//Comparamos los elementos dos a dos para ordenar números.
        }

function barajar(x) {
  for (i = x.length - 1; i > 0; i--) {
    let j = parseInt(Math.random() * (i + 1));
    [x[i], x[j]] = [x[j], x[i]];
  }
  return x;
}

function raiz(x,n=2){ //establecemos como parámetro el número de decimales.
    let y = [];//array con resultados
    x.forEach(function(i){y.push((Math.sqrt(i)).toFixed(n))});
    return y;
}

function maxYmin(arr){
    let max = arr[0];
    let min = arr[0];
    let indexMax;
    let indexMin;
     arr.forEach(function(i, j) {
        if (i > max) {
            max = i;
            indexMax = j;
        }
         
        if (i < min) {
            min = i;
            indexMin = j;
        }
    }); 
    return [max, indexMax, min, indexMin];
}