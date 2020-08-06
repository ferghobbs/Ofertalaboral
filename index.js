class Vehicle {
    
    constructor(brand, model, description, price) 
    {
        this.brand=brand;
        this.model=model;
        this.description=description;
        this.price=price
    }
    toString(){
        return this.brand+' '+this.model
    }
    vehicleDescriptionByConsole(){
        console.log('Marca: '+this.brand+' // Modelo: '+this.model+' // '+this.description+' // Precio: $'+Number.parseFloat(this.price).toFixed(2))
    }
    getPrice(){
        return this.price;
    }
    //Compare two vehicles by price, and return who is more esxpensive
    areYouMoreExpensive(compare){
        if(compare==null||this.price > compare.getPrice()) return this
        return compare;
    }
    //Compare two vehicles by price, and return cheaper        
    areYoucheaper(compare){
        if(compare==null||this.price < compare.getPrice()) return this
        return compare;
    }
    // Return true if the character or string is in the model
    modelContains(char){
        return (this.model.includes(char))
    }
}


function passLine(){
    console.log('=========================== ')
}
function vehicleMaker(){
    return [new Vehicle('Peugeot','206','Puertas: 4',200000),new Vehicle('Honda','Titan','Cilindrada: 125c',60000),new Vehicle('Peugeot','208','Puertas: 5',250000),new Vehicle('Yamaha','YBR','Cilindrada: 160c',80500.50)]
}
//Get the more expensive vehicle from an array of vehicles
function getVehicleMoreExpensive(vehicles){
    let aux;
    vehicles.forEach(function(valor){
        aux=valor.areYouMoreExpensive(aux);
        
    })
    return aux
}
//Get cheapest vehicle from an array of vehicles

function getVehicleCheapest(vehicles){
    let aux;
    vehicles.forEach(function(valor){
        aux=valor.areYoucheaper(aux);
        
    })
    return aux
}
//Sort an array of vehicles by price
function sortVehicles(vehicles){
    vehicles.sort((a,b)=> b.getPrice()-a.getPrice())
}
//Get the last vehicle who contains a char or a string, from an array of vehicles
function getVehicleWhoModelHas(vehicles,char){
    aux='none'
    vehicles.forEach(function(value){
        if (value.modelContains(char)) aux=value
    })
    return aux
}
let cars= vehicleMaker();
cars.forEach(function(value){
    value.vehicleDescriptionByConsole();
})

passLine();
console.log('Vehiculo mas caro:'+ getVehicleMoreExpensive(cars))
console.log('Vehiculo mas barato:'+ getVehicleCheapest(cars))
var vehicleAux=getVehicleWhoModelHas(cars,'Y')
console.log("Vehiculo que contiene en el modelo la letra 'Y': "+vehicleAux+' $'+ Number.parseFloat(vehicleAux.getPrice()).toFixed(2)) //TODO

passLine()
sortVehicles(cars)
cars.forEach(function(value){
    console.log(value.toString());
})