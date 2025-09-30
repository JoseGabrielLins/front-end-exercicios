let usodias=[1,2,2.4,5,1.2,0.5,12];

const indicadordeuso = (numerodehoras) =>{
    if(numerodehoras <= 1 ){
        return'🟢'

    }else if(numerodehoras<=3){
        return'🟡'
    }else{
        return'🔴'
    }
}

console.log(indicadordeuso(usodias[0]))
