class Grid {
  constructor(rows, columns, tableName, backgroundColor){
    this.rows = rows;
    this.columns = columns;
    this.tableName = tableName;
    this.backgroundColor = backgroundColor;
  }

  getTable() {
    return `Rows:${this.rows} columns:${this.columns}`;
  }

  getCells() {
    return (this.rows * this.columns);
  }

  getTableName() {
    return `Table Name: ${this.tableName}`;
  }

  changeBackgroundColor() {
    return `Background Color is ${this.backgroundColor}`
  }
}

class User extends Grid {
  constructor(rows, columns, tableName, backgroundColor, password, email, role, rating) {
    super(rows, columns, tableName, backgroundColor);
    this.password = password;
    this.email = email;
    this.role = role;
    this.rating = rating;
  }

  changeBackgroundColor() {
    if (this.backgroundColor == "default") {
      return "Color set as default";
    }
    if (this.backgroundColor == super.backgroundColor) {
      return "You already have this color";
    }
  }

  validatePassword() {
    return (this.password > 8) ? true : false;
  }

  checkRole() {
    if (this.role === "admin") {
      return "You are King(admin)";
    }
    return "You are peasant(user)"
  }

  getUserInformation() {
    return `Email: ${this.email} Password: ${this.password}`;
  }

  getCoupon() {
    let coupon = Math.floor(this.rating / 100);
    if (coupon == 1) {
      return "10%";
    }
    if (coupon === 2 && coupon > 2) {
      return "20"
    }
    return "No coupon";
  }

  initUser() {
    return {rowsAmount: this.rows, 
            columnsAmount: this.columns,
            tableName: this.tableName,
            backgroundColor: this.backgroundColor,
            password: this.password,
            email: this.email,
            validatePassword: this.validatePassword(),
            role: this.checkRole(),
            coupon: this.getCoupon()}
  }
}

class Order extends Grid {
  constructor(rows, columns, tableName, backgroundColor, isCheckbox, price) {
    super(rows, columns, tableName, backgroundColor);
    this.isCheckbox = isCheckbox;
    this.price = price;
  }

  validateCheckbox() {
    let arrayRows = [];
    for (let i = 0; i < this.rows; i++){
      if (this.isCheckbox == i) {
        arrayRows[i] = {id: i, isCheckbox: true};
      }
      else {arrayRows[i] = {id: i, isCheckbox: false};}
    }
    return arrayRows;
  }

  getRefund() {
    if (this.price < 200) {
      return "No refund";
    }
    if (this.price >= 200 && this.price < 500) {
      return "50% refund";
    }
    return "Full refund";
  }

  checkId() {
    if (this.tableName == "buyer") {
      return "Show Id"
    }
    return "You have root "
  }
  
  getCredit() {
    if (this.price > 500 || this.tableName == "buyer"){
      return "Credit available"
    }
    return "Credit is not available"
  }

  initOrder () {
    return {rowsAmount: this.rows, 
            columnsAmount: this.columns, 
            tableName: this.tableName,
            backgroundColor: this.backgroundColor, 
            price: this.price,
            refund: this.getRefund(), 
            credit: this.getCredit(), 
            isCheckbox: this.validateCheckbox()
          }
  }
  
}

const user1 = new User(4,6,'fsdf', 'red', 2, 600, 5000, 800);
user1.initUser();

const order1 = new Order(4,6,'fsdf', 'red', 2, 600);
order1.initOrder();
