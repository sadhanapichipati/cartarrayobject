const Employess = [
    { id: 232343, name: "P. T  Ruud", department: "Computer Science", place: "Germany"},
    { id: 232139, name: "Charles Xavier", department: "Mathematics", place: "Germany"},
    { id: 239922, name: "M. S Styris", department: "Computer Science", place: "France"},
    { id: 232348, name: "Mark Cook", department: "Philosophy", place: "Germany"},
    { id: 232888, name: "Howard Pack", department: "Computer Science", place: "France"},
    { id: 232288, name: "Travis Lei", department: "Computer Science", place: "India"},
    { id: 283920, name: "Silver Stone", department: "Philosophy", place: "India"},
    { id: 732873, name: "Carlton Baugh", department: "Mathematics", place: "Austria"},
    { id: 732343, name: "Jade Lee", department: "English", place: "Japan"},
    { id: 742343, name: "Xavi Herrera", department: "English", place: "Spain"}
];

// Q.1     Group employees by department in the given order (computer science, english, maths, philosophy)
const groupedByDepartment = Employess.reduce((acc, employee) => {
    acc[employee.department] = acc[employee.department] || [];
    acc[employee.department].push(employee);
    return acc;
}, {});

            console.log(groupedByDepartment);
// Q.2     Group employees by place (Europe or Asia)cc 
             const employeesByPlace ={
                Europe: Employess.filter(employee =>employee.place === "Germany" || employee.place === "France" || employee.place === "Austria" || employee.place === "Spain"),
                Asia : Employess.filter(employee => employee.place === "India" || employee.place === "Japan")
             };
             console.log(employeesByPlace);

// Q.3     Group employees by departments [enginneering { computer science + mathematics }, linguistic { philosophy + english }]
        //    
        const employeesByDepartments = {
            engineering: Employess.filter(employee => employee.department === "Computer Science" || employee.department === "Mathematics"),
            linguistic: Employess.filter(employee => employee.department === "Philosophy" || employee.department === "English")
        };
        
        console.log(employeesByDepartments);
        
// Q.4     Filter employees from Germany and are from deparment Computer Science
           const employee = Employess.filter(element =>element.place == "Germany" && element.department == "Computer Science");
           
console.log(employee);








const userDetailsArray = [
    {
        "id": "600dc3b5d617e547a0e74cb9",
        "name": "Mitchell Fitzgerald",
        "about": "Proident voluptate veniam voluptate mollit reprehenderit anim officia et ea ex laboris nulla laboris. Nulla ut aliquip fugiat tempor veniam sint aliqua reprehenderit tempor Lorem commodo anim.",
        "address": "48 Flatlands Avenue, Cutter, North Dakota",
        address: {
            streetAddress: '48 Flatlands Avenue',
            neighbour: 'Cutter',
            city: 'North Dakota'
        },
        "company": "Scenty"
    },
    {
        "id": "600dc3b5c4e60ba2ebf06569",
        "name": "Howell Faulkner",
        "about": "Mollit Lorem reprehenderit qui elit id aliqua. Deserunt ipsum ad cupidatat ullamco ut aliqua est do consectetur nostrud sit esse.",
        address: {
            streetAddress: '77 Hemlock Street',
            neighbour: 'Hasty',
            city: 'Florida'
        },
        "company": "Fleetmix"
    }
]

// Q.2 Get all addresses from userDetailsArray using reduce Function and return the result in the following format
   const add = userDetailsArray.reduce((acc,cv)=>{
    acc[cv.id] = cv.address;
    return acc;
   },{});
   console.log("Reaponse:",add);

// Q5. Filter out the person who lives in city "North Dakota" and transform the result to the following structure. 
  const people = userDetailsArray.filter(element => element.address.city == "North Dakota").map(element => ({ id: element.id,name: element.name, city:element.address.city, company:element.company }));

console.log("Response:",people);
//




const products = [{
    shampoo: {
        price: "$50",
        quantity: 4
    },
    "Hair-oil": {
        price: "$40",
        quantity: 2,
        sealed: true
    },
    comb: {
        price: "$12",
        quantity: 1
    },
    utensils: [
        {
            spoons: { quantity: 2, price: "$8" }
        }, {
            glasses: { quantity: 1, price: "$70", type: "fragile" }
        },{
            cooker: { quantity: 4, price: "$900" }
        }
    ],
    watch: {
        price: "$800",
        quantity: 1,
        type: "fragile"
    }
}]
// Q1. Find all the items with price more than $65.

// Q2. Find all the items where quantity ordered is more than 1.

// Q.3 Get all items which are mentioned as fragile.
const items = products.filter(element =>{
    return element.products .includes ("fragile")
})
console.log(items);
// Q.4 Find the least and the most expensive item for a single quantity.
// Q.5 Group items based on their state of matter at room temperature (Solid, Liquid Gas)
