// Array of products, each product is an object with different fieldset
// A set of ingredients should be added to products		 

var products = [
	{
		name: "Brocoli",
		vegetarian: true,
		glutenFree: true,
		organic: false,
		price: 1.99
	},
	{
		name: "Bread",
		vegetarian: true,
		glutenFree: false,
		organic: false,
		price: 2.35
	},
	{
		name: "Salmon",
		vegetarian: false,
		glutenFree: true,
		organic: false,
		price: 10.00
	},
	
		{
		name: "Sushi",
		vegetarian: false,
		glutenFree: false,
		organic: false,
		price: 12.99
	},
	
		{
		name: "Organic Honey",
		vegetarian: true,
		glutenFree: true,
		organic: true,
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
		glutenFree: true,
		price: 2.99
	},
	
		{
		name: "Organic Quinoa",
		vegetarian: true,
		glutenFree: false,
		organic: true,
		price: 6.99
	},
	{
		name: "Organic Strawberries",
		vegetarian: true,
		glutenFree: true,
		organic: true,
		price: 3.99
	},
	{
		name: "Chicken",
		vegetarian: false,
		glutenFree: true,
		organic: false,
		price: 10.00
	},
	{
		name: "Spinach",
		vegetarian: true,
		glutenFree: true,
		organic: false,
		price: 3.50
	},
	{
		name: "Spaghetti",
		vegetarian: true,
		glutenFree: false,
		organic: false,
		price: 1.99
	},
  	{
		name: "Hamburgers",
		vegetarian: false,
		glutenFree: true,
		organic: false,
		price: 12.70
	},
	{
		name: "Sunflower Seeds",
		vegetarian: true,
		glutenFree: true,
		organic: false,
		price: 4.75
	}

];

// given restrictions provided, make a reduced list of products
// prices should be included in this list, as well as a sort based on price

function restrictListProducts(prods, restrictions) {
  prods.sort(compare);

  let product_names = [];

  for (let i = 0; i < prods.length; i += 1) {
     if(restrictions.includes("None")){
      product_names.push(prods[i]);
    }

    else if((restrictions.includes("Vegetarian"))&&(!restrictions.includes("GlutenFree"))&&(!restrictions.includes("Organic"))&&(prods[i].vegetarian == true)){
      product_names.push(prods[i]);
    }

    else if((!restrictions.includes("Vegetarian"))&&(restrictions.includes("GlutenFree"))&&(!restrictions.includes("Organic"))&&(prods[i].glutenFree == true)){
      product_names.push(prods[i]);
    }

    else if((!restrictions.includes("Vegetarian"))&&(!restrictions.includes("GlutenFree"))&&(restrictions.includes("Organic"))&&(prods[i].organic == true)){
      product_names.push(prods[i]);
    }

    else if((restrictions.includes("Vegetarian"))&&(restrictions.includes("GlutenFree"))&&(!restrictions.includes("Organic"))&&(prods[i].vegetarian == true)&&(prods[i].glutenFree == true)){
      product_names.push(prods[i]);
    }

    else if((restrictions.includes("Vegetarian"))&&(!restrictions.includes("GlutenFree"))&&(restrictions.includes("Organic"))&&(prods[i].vegetarian == true)&&(prods[i].organic == true)){
      product_names.push(prods[i]);
    }

     else if((!restrictions.includes("Vegetarian"))&&(restrictions.includes("GlutenFree"))&&(restrictions.includes("Organic"))&&(prods[i].organic == true)&&(prods[i].glutenFree == true)){
      product_names.push(prods[i]);
    }

    else if((restrictions.includes("Vegetarian"))&&(restrictions.includes("GlutenFree"))&&(restrictions.includes("Organic"))&&(prods[i].vegetarian == true)&&(prods[i].glutenFree == true)&&(prods[i].organic == true)){
      product_names.push(prods[i]);
    }

  }

  return product_names;
}

// Calculate the total price of items, with received parameter being a list of products

function getTotalPrice(chosenProducts) {
  console.log(chosenProducts);

  totalPrice = 0;
  for (let i = 0; i < products.length; i += 1) {
    if (chosenProducts.indexOf(products[i].name + " - $" + products[i].price) > -1) {
      totalPrice += products[i].price;
    }
  }
  return totalPrice.toFixed(2);
}
// Sort the items by price - Reference https://www.sitepoint.com/sort-an-array-of-objects-in-javascript/
function compare(a, b) {
  if (a.price < b.price) return -1;
  if (a.price > b.price) return 1;
  
  return 0;
}
