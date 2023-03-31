export class Inventory{
    id !: string;
    name !: string;
    description !: string;
    cost !: number;
    rating !: number;
    manufacturer !: string;
    discount !: number;
    quantity !: number;

    constructor(
        id: string, 
        name: string,
        description : string,
        cost : number,
        rating : number,
        manufacturer : string,
        discount : number,
        quantity : number
    ){
        this.id = id;
		this.name = name;
		this.description = description;
		this.cost = cost;
		this.rating = rating;
		this.manufacturer = manufacturer;
		this.discount = discount;
		this.quantity = quantity;
    }
}