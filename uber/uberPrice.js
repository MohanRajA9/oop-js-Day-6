class uberPrice {
    #basicPrice = 50; // basic price created using private property                        
    constructor (name,totalKM) {
        this.basicPrice = 50;
        this.n = name;
        this.t = totalKM;
    };

    price () { // calculate the price corresponding to total Kilometer
        return `Hi ${this.n}
Distance travelled : ${this.t} Kilometers
The price is ${(this.basicPrice)+(this.t - 3)*(15)} Rupees
Thanks for choosing us`;
    }; // 15 Rupees is fixed for price
    
    pricePeakHours (){ // calculate the price corresponding to total Kilometer and peakhour
        return `HI ${this.n}
Distance travelled : ${this.t} Kilometers
Due to peak hours The price is ${(this.basicPrice)+(this.t - 3)*(20)} Rupees
Thanks for choosing us`;
    }; // 20 Rupees is fixed for pricePeakHours
};

const passenger1 = new uberPrice ("raja" ,15);
const passenger2 = new uberPrice ("mohan",15);

console.log (passenger1.price());
console.log(passenger2.pricePeakHours());
