// Cheeseburgers and Toppings  on those Cheeseburgers
class Topping { 
    constructor(name, position) {
    this.name = name;
    this.position = position;
    }
    
    describe() {
    //console.log(`${this.name} plays ${this.position}`)
    return `${this.name} plays ${this.position}`;
    }
    }
    class Cheeseburger { 
    constructor(name) {
    this.name = name;
    this.Toppings  = [];
    }
    
    addTopping(Topping) {
    if (Topping instanceof Topping) {
    this.Toppings .push(Topping);
    } else {
    throw new Error(`You can only add an instance of Topping. 
    argument is not a Topping: ${Topping}`);
    }
    }
    
    describe() {
    return `${this.name} has ${this.Toppings .length} Toppings .`;
    }
    }
    class Menu { // what drives the application and our choices 
    constructor() {
    this.Cheeseburgers = [];
    this.selectedCheeseburger = null; // manage one cheeseburger at a time
    }
    
    start() { // entry point to application
    let selection = this.showMainMenuOptions(); 
    while (selection != 0) {
    switch(selection) {
    case '1' :
    this.createCheeseburger();
    break;
    case '2' :
    this.viewCheeseburger();
    break;
    case '3' :
    this.deleteCheeseburger();
    break;
    case '4' :
    this.displayCheeseburgers();
    break;
    default:
    selection = 0;
    }
    selection = this.showMainMenuOptions();
    }
    alert('Goodbye! Dont forget the napkins! Enjoy your burger!');
    }
    
    showMainMenuOptions() {
    return prompt(`
    0) exit
    1) create a new cheeseburger
    2) view a cheeseburger
    3) delete a cheeseburger
    4) display all Cheeseburgers
    `);
    }
    
    showCheeseburgerMenuOptions(cheeseburgerInfo) {
    return prompt(`
    0) back
    1) add a new Topping
    2) delete a Topping
    -----------------
    ${cheeseburgerInfo}
    `);
    }
    
    displayCheeseburgers() {
    let Cheeseburgerstring = '';
    for (let i = 0; i < this.Cheeseburgers.length; i++) {
    Cheeseburgerstring += i+ ') ' + this.Cheeseburgers[i].name + '\n';
    }
    alert(Cheeseburgerstring);
    }
    
    createCheeseburger() {
    let name = prompt('Enter name for new cheeseburger: ');
    this.Cheeseburgers.push(new Cheeseburger(name));
    }
    
    viewCheeseburger() {
    let index = prompt("Enter the index of the cheeseburger that you want to view:");
    if (index > -1 && index < this.Cheeseburgers.length) {
    this.selectedCheeseburger = this.Cheeseburgers[index];
    let description = 'Cheeseburger Name: ' + this.selectedCheeseburger.name + '\n';
    description += ' ' + this.selectedCheeseburger.describe() + '\n ';
    for (let i = 0; i < this.selectedCheeseburger.Toppings .length; i++) {
    // description += i + ') ' + this.selectedCheeseburger.Toppings [i].name + ' - '
    // + this.selectedCheeseburger.Toppings [i].position + '\n';
    description += i + ') ' + this.selectedCheeseburger.Toppings [i].describe() + '\n';
    }
    let selection1 = this.showCheeseburgerMenuOptions(description);
    switch (selection1) {
    case '1' :
    this.createTopping();
    break;
    case '2' :
    this.deleteTopping();
    }
    } // validate user input
    }
    
    deleteCheeseburger() {
    let index = prompt('Enter the index of the cheeseburger that you wish to delete: ');
    if (index > -1 && index < this.Cheeseburgers.length) {
    this.Cheeseburgers.splice(index,1);
    }
    }
    
    createTopping() {
    let name = prompt('Enter name for new Topping: ');
    let position = prompt('Enter position for new Topping: ');
    //this.selectedCheeseburger.Toppings .push(new Topping(name, position));
    this.selectedCheeseburger.addTopping(new Topping(name,position));
    }
    
    deleteTopping() {
    let index = prompt('Enter the index of the Topping that you wish to delete: ');
    if (index > -1 && index < this.selectedCheeseburger.Toppings .length) { this.selectedCheeseburger.Toppings .splice(index,1);
    }
    }
    }
    let menu = new Menu();
    menu.start(); 
    
    

