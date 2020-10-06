function Grid(rows, columns, tableName, backgroundColor) {
  this.rows = rows;
  this.columns = columns;
  this.tableName = tableName;
  this.backgroundColor = backgroundColor;
}

Grid.prototype.getTable = function getTable() {
  return `Rows:${this.rows} columns:${this.columns}`;
}

Grid.prototype.getCells = function getCells() {
  return (this.rows * this.columns);
}

Grid.prototype.getTableName = function getTableName() {
  return `Table Name: ${this.tableName}`;
}

Grid.prototype.changeBackgroundColor = function changeBackgroundColor() {
  return `Background Color is ${this.backgroundColor}`
}

function User(rows, columns, tableName, backgroundColor, password, email, role, rating) {
  Grid.call(this, rows, columns, tableName, backgroundColor);
  this.password = password;
  this.email = email;
  this.role = role;
  this.rating = rating;
}

User.prototype = Object.create(Grid.prototype);
User.prototype.constructor = User;
User.prototype.changeBackgroundColor = function changeBackgroundColor() {
  if (this.backgroundColor.trim().toLowerCase() == "default") {
    return "Color set as default";
  }
  return `Your color ${this.backgroundColor}`;
}

User.prototype.validatePassword = function validatePassword() {
  return (this.password > 8) ? true : false;
}

User.prototype.checkRole = function checkRole() {
  if (this.role === "admin") {
    return "You are King(admin)";
  }
  return "You are peasant(user)"
}

User.prototype.getUserInformation = function getUserInformation() {
  return `Email: ${this.email} Password: ${this.password}`;
}

User.prototype.getCoupon = function getCoupon() {
  coupon = Math.floor(this.rating / 100);
  if (coupon == 1) {
    return "10%";
  }
  if (coupon === 2 && coupon > 2) {
    return "20"
  }
  return "No coupon";
}

User.prototype.initUser = function initUser () {
  return {
          rowsAmount: this.rows, 
          columnsAmount: this.columns, 
          tableName: this.tableName, 
          backgroundColor: this.backgroundColor, 
          password: this.password, 
          email: this.email,validatePassword: User.prototype.validatePassword(), 
          role: User.prototype.checkRole(), 
          coupon: User.prototype.getCoupon()
        }
  }

function Order(rows, columns, tableName, backgroundColor, isCheckbox, price) {
  Grid.call(this, rows, columns, tableName, backgroundColor);
  this.isCheckbox = isCheckbox;
  this.price = price;
}

Order.prototype = Object.create(Grid.prototype);
Order.prototype.constructor = Order;

Order.prototype.validateCheckbox = function validateCheckbox() {
  let arrayRows = [];
  for (let i = 0; i < this.rows; i++){
    if (this.isCheckbox == i) {
      arrayRows[i] = {id: i, isCheckboxe: true};
    }
    else {arrayRows[i] = {id: i, isCheckboxe: false};}
  }
  console.log(arrayRows);
  return arrayRows;
  }

Order.prototype.getRefund = function getRefund() {
  if (this.price < 200) {
    return "No refund";
  }
  if (this.price >= 200 && this.price < 500) {
    return "50% refund";
  }
  return "Full refund";
}

Order.prototype.checkId = function checkId() {
  if (this.tableName == "buyer") {
    return "Show Id"
  }
  return "You have root "
}
Order.prototype.getCredit = function getCredit() {
  if (this.price > 500 || this.tableName == "buyer"){
    return "Credit available"
  }
  return "Credit is not available"
}

Order.prototype.initOrder = function initOrder() {
  return {
          rowsAmount: this.rows, 
          columnsAmount: this.columns, 
          tableName: this.tableName, 
          backgroundColor: this.backgroundColor, 
          price: this.price, 
          refund: Order.prototype.getRefund(), 
          credit: Order.prototype.getCredit(), 
          isCheckbox: Order.prototype.validateCheckbox()
        }
}

const user1 = new User(4,6,'fsdf', 'red', 2, 600, 5000, 800);
user1.initUser();

const order1 = new Order(4,6,'fsdf', 'red', 2, 600);
order1.initOrder();
