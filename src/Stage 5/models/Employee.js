export default class Employee {
  constructor(id, name, phone, title) {
    this.id = id;
    this.name = name;
    this.phone = phone;
    this.title = title;
  }
  updateName(str) {
    this.name = str;
  }
  // updateName
  updatePhone(str) {
    this.phone = str;
  }
  // updatePhone
  updateTitle(str) {
    this.title = str;
  }
  // updateTitle
}
