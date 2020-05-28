// Array of products, each product is an object with different fieldset
// A set of ingredients should be added to products		 

var products = [
	{
		name: "Brocoli",
		vegetarian: true,
		glutenFree: true,
		price: 1.99
	},
	{
		name: "Bread",
		vegetarian: true,
		glutenFree: false,
		price: 2.35
	},
	{
		name: "Salmon",
		vegetarian: false,
		glutenFree: true,
		price: 10.00
	},
	
		{
		name: "Sushi",
		vegetarian: false,
		glutenFree: false,
		price: 12.99
	},
	
		{
		name: "Honey",
		vegetarian: true,
		glutenFree: false,
		price: 5.65
	},
		{
		name: "Cookies",
		vegetarian: true,
		glutenFree: false,
		price: 3.65
	},
		{
		name: "Asparagus",
		vegetarian: true,
		glutenFree: false,
		price: 2.99
	},
	
		{
		name: "Quinoa",
		vegetarian: true,
		glutenFree: false,
		price: 6.99
	},
	{
		name: "Strawberries",
		vegetarian: true,
		glutenFree: false,
		price: 3.99
	},
	{
		name: "Chicken",
		vegetarian: false,
		glutenFree: false,
		price: 10.00
	},
	{
		name: "Spinach",
		vegetarian: true,
		glutenFree: false,
		price: 3.50
	},
	{
		name: "Sunflower Seeds",
		vegetarian: true,
		glutenFree: false,
		price: 4.75
	}

];
	


// given restrictions provided, make a reduced list of products
// prices should be included in this list, as well as a sort based on price

function restrictListProducts(prods, restriction) {
	let product_names = [];
	for (let i=0; i<prods.length; i+=1) {
		if ((restriction == "Vegetarian") && (prods[i].vegetarian == true)){
			product_names.push(prods[i].name);
		}
		else if ((restriction == "GlutenFree") && (prods[i].glutenFree == true)){
			product_names.push(prods[i].name);
		}
		else if (restriction == "None"){
			product_names.push(prods[i].name);
		}
	}
	return product_names;
}

// Calculate the total price of items, with received parameter being a list of products
function getTotalPrice(chosenProducts) {
	totalPrice = 0;
	for (let i=0; i<products.length; i+=1) {
		if (chosenProducts.indexOf(products[i].name) > -1){
			totalPrice += products[i].price;
		}
	}
	return totalPrice;
}
