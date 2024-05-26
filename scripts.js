// A list of provinces:
const provinces = ['Western Cape', 'Gauteng', 'Northern Cape', 'Eastern Cape', 'KwaZulu-Natal', 'Free State']

// A list of names:
const names = ['Ashwin', 'Sibongile', 'Jan-Hendrik', 'Sifso', 'Shailen', 'Frikkie']

// A list of products with prices:
const products = [
  { product: 'banana', price: "2" },
  { product: 'mango', price: 6 },
  { product: 'potato', price: ' ' },
  { product: 'avocado', price: "8" },
  { product: 'coffee', price: 10 },
  { product: 'tea', price: '' },
]

//Log each name and each province to the console.
names.forEach(name => console.log(name));
provinces.forEach(province => console.log(province));
//
names.forEach((name, index) => console.log(`${name} (${provinces[index]})`));

//Log each name with a matching province.
const upperCaseProvinces = provinces.map(province => province.toUpperCase());
console.log(upperCaseProvinces);

//Create a new array using map that contains the length of each name.
const nameLengths = names.map(name => name.length);
console.log(nameLengths);

//Use sort to alphabetically sort the provinces.
const sortedProvinces = [...provinces].sort();
console.log(sortedProvinces);

//Use filter to remove provinces containing "Cape". Log the count of remaining provinces.
const nonCapeProvinces = provinces.filter(province => !province.includes('Cape'));
console.log(nonCapeProvinces.length);

//Create a boolean array using map and some to determine if a name contains the letter 'S'.
const containsS = names.map(name => name.includes('S'));
console.log(containsS);

//Use reduce to transform the names array into an object mapping names to their respective provinces.
const namesToProvinces = names.reduce((obj, name, index) => {
  obj[name] = provinces[index];
  return obj;
}, {});
console.log(namesToProvinces);

//Iterate over the products array, logging each product name
console.log(products.map(product => product.product));