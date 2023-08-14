//======Lesson 32=========Patterns of programming=====================

//=======Singleton=======================

// class RecentPurchases {
//   static #instance = null;

//   constructor() {
//     this.purchases = [];
//   }

//   static create() {
//     if (!this.#instance) {
//       this.#instance = new RecentPurchases();
//     }
//     return this.#instance;
//   }

//   add(item) {
//     this.purchases.push(item);
//   }

//   get() {
//     return this.purchases;
//   }
// }

// const lastPurchaseList = RecentPurchases.create();

// //===

// const lastPurchaseList2 = RecentPurchases.create();

// console.log(lastPurchaseList === lastPurchaseList2);

// lastPurchaseList2.add("Телефон");
// lastPurchaseList2.add("Навушники");

// console.log(lastPurchaseList.get());

//=======Singleton=======================

// class RecentPurchases {
//   static #instance = null;

//   static #purchases = [];

//   static create() {
//     if (!this.#instance) {
//       this.#instance = new RecentPurchases();
//     }
//     return this.#instance;
//   }

//   static add(item) {
//     this.#purchases.push(item);
//   }

//   static get() {
//     return this.#purchases;
//   }
// }

// RecentPurchases.create();

// RecentPurchases.add("Телефон");
// RecentPurchases.add("Навушники");

// console.log(RecentPurchases.get());

//========Factory=============================

// class Button {
//   constructor({ text, color }) {
//     this.text = text;
//     this.color = color;
//   }

//   render() {
//     return `<button class="color:${this.color};">${this.text}</button>`;
//   }
// }

// class IconButton {
//   constructor({ icon, color }) {
//     this.icon = icon;
//     this.color = color;
//   }

//   render() {
//     return `<button class="color:${this.color};"><img src="${this.icon}"/></button>`;
//   }
// }

// class ButtonFactory {
//   static TYPE = {
//     BASIC: "basic",
//     ICON: "icon",
//   };

//   static createButton(type, options) {
//     if (options.icon) {
//       return;
//     }

//     switch (type) {
//       case this.TYPE.BASIC:
//         return new Button(options);
//       case this.TYPE.ICON:
//         return new IconButton(options);
//       default:
//         throw new Error(`Такого типу кнопки не інсує: ${type}`);
//     }
//   }
// }

// const myIconButton = ButtonFactory.createButton(ButtonFactory.TYPE.ICON, {
//   color: "red",
//   icon: "/icon/my-icon.svg",
// });

// console.log(myIconButton);

//===============

// class Button {
//   constructor({ text, color }) {
//     this.text = text;
//     this.color = color;
//   }

//   render() {
//     return `<button class="color:${this.color};">${this.text}</button>`;
//   }
// }

// class IconButton {
//   constructor({ icon, color }) {
//     this.icon = icon;
//     this.color = color;
//   }

//   render() {
//     return `<button class="color:${this.color};"><img src="${this.icon}"/></button>`;
//   }
// }

// class ButtonFactory {
//   static TYPE = {
//     BASIC: "basic",
//     ICON: "icon",
//   };

//   static createButton(type, options) {
//     if (options.icon) {
//       return new IconButton(options);
//     }

//     if (options.text) {
//       return new Button(options);
//     }

//     throw new Error(`Такого типу кнопки не інсує: ${type}`);
//   }
// }

// const myIconButton = ButtonFactory.createButton(ButtonFactory.TYPE.ICON, {
//   color: "red",
//   icon: "/icon/my-icon.svg",
// });

// console.log(myIconButton);

//=============Observer==============================================================

// class User {
//   constructor(email) {
//     this.email = email;
//   }

//   sendEmail(message) {
//     console.log(`Відправки на email ${this.email} повідомлення: ${message}`);
//   }
// }

// class Video {
//   constructor(name) {
//     this.name = name;
//   }
// }

// class Channel {
//   constructor(name) {
//     this.name = name;
//     this.subscribers = [];
//   }

//   subscribe(user) {
//     // Пдіписка на канал
//     this.subscribers.push(user);
//   }

//   unsubscribe(user) {
//     // Відписка від каналу
//     this.subscribers = this.subscribers.filter((sub) => sub != user);
//   }

//   createVieo(name) {
//     // Створення новго відео
//     const video = new Video(name);
//     this.sendNotify(video);
//   }

//   sendNotify(video) {
//     // Відправка повідомлення підписникам про нове відео

//     this.subscribers.forEach((subscriber) => {
//       subscriber.sendEmail(
//         `Нове відео "${video.name}" на Youtube каналі ${this.name}`
//       );
//     });
//   }
// }

// const channel = new Channel("IT Brains");

// const user1 = new User("john@example.com");
// const user2 = new User("john2@example.com");
// const user3 = new User("john3@example.com");

// channel.subscribe(user1);
// channel.subscribe(user2);
// channel.subscribe(user3);

// channel.createVieo("Урок про HTML");

// console.log("======");

// channel.unsubscribe(user1);

// channel.createVieo("Урок про CSS");

//===========Decorator======================================================

// class Coffee {
//   name = "Кава";

//   cost = 10;

//   cook() {
//     console.log(`Приготування ${this.name}`);
//     // Логіка приготування кавового напою
//   }
// }

// class MilkDecorator {
//   constructor(coffee, amount) {
//     this.coffee = coffee;
//     this.amount = amount;
//   }

//   get name() {
//     return `${this.coffee.name}, з ${this.amount} мл молока`;
//   }

//   get cost() {
//     const milkPrice = 0.05;
//     return this.coffee.cost + milkPrice * this.amount;
//   }

//   cook() {
//     console.log(`Приготування ${this.name}`);
//     // Логіка приготування кави з молоком
//   }
// }

// // Створення об'єкту базової кави

// let coffee = new Coffee();
// console.log(coffee.name);
// console.log(coffee.cost);
// coffee.cook();

// // Створення декоратора молока до кави

// let latteCoffee = new MilkDecorator(coffee, 300);
// console.log(latteCoffee.name);
// console.log(latteCoffee.cost);
// latteCoffee.cook();

//===============Memento===================================================

// class TextEditor {
//   #text = "";

//   set text(text) {
//     this.#text = text;
//     this.#save();
//   }

//   get text() {
//     return this.#text;
//   }

//   #save() {
//     Snapshot.create(this.text);
//   }

//   restore() {
//     this.#text = Snapshot.restore().text;
//   }
// }

// class Snapshot {
//   constructor(text) {
//     this.text = text;
//   }

//   static #snapshots = [];

//   static create(text) {
//     console.log(text);
//     this.#snapshots.push(new Snapshot(text));
//   }

//   static restore() {
//     this.#snapshots.pop();
//     return this.#snapshots[this.#snapshots.length - 1];
//   }
// }

// const editor = new TextEditor();

// editor.text = "Це початковий текст";
// editor.text = "Редагований текст";
// editor.text = "Оновлений текст";

// console.log("===================");

// console.log(editor.text);

// console.log("===================");

// editor.restore();

// console.log(editor.text);

// console.log("===================");

// editor.restore();

// console.log(editor.text);

//=========Chain of Responsibility================================================

// class AuthHandler {
//   setNextHandler(handler) {
//     this.nextHandler = handler;
//     return handler;
//   }

//   login(user, password) {
//     if (this.setNextHandler) {
//       return this.nextHandler.login(user, password);
//     }
//   }
// }

// class TwoFactorAuthHandler extends AuthHandler {
//   login(user, password) {
//     if (
//       user === "john" &&
//       password === "password" &&
//       this.isValidTwoFactorCode()
//     ) {
//       console.log("Вхід дозволено з двофакторною автентіцікацією");
//       return true;
//     } else {
//       return super.login(user, password);
//     }
//   }

//   isValidTwoFactorCode() {
//     return true;
//   }
// }

// const handler = new TwoFactorAuthHandler();

// handler.setNextHandler({
//   //   login: (...arg) => {
//   // console.log(arg);
//   login: (login, password) => {
//     const result =
//       login === "login" && password === "password"
//         ? "Користувач увійшов у акаунт"
//         : "Користувач не увійшов у акаунт";

//     console.log(result);
//     return result;
//   },
// });

// handler.login("login", "password");
// handler.login("login", "password3");

// //====

// class AuthHandler {
//   setNextHandler(handler) {
//     this.nextHandler = handler;
//     return handler;
//   }

//   login(user, password) {
//     if (this.nextHandler) {
//       return this.nextHandler.login(user, password);
//     } else {
//       return false;
//     }
//   }
// }

// class TwoFactorAuthHandler extends AuthHandler {
//   login(user, password) {
//     if (
//       user === "john" &&
//       password === "password" &&
//       this.isValidTwoFactorCode()
//     ) {
//       console.log("Вхід дозволено з двофакторною автентіцікацією");
//       return true;
//     } else {
//       return super.login(user, password);
//     }
//   }

//   isValidTwoFactorCode() {
//     return true;
//   }
// }

// class RoleHandler extends AuthHandler {
//   login(user, password) {
//     if (user === "guest") {
//       console.log("Вхід дозволено з ролю гостя");
//       return true;
//     } else {
//       return super.login(user, password);
//     }
//   }
// }

// class CredentialshHandler extends AuthHandler {
//   login(user, password) {
//     if (user === "admin" && password === "admin123") {
//       console.log("Вхід дозволено з логінем та паролем");
//       return true;
//     } else {
//       return super.login(user, password);
//     }
//   }
// }

// // const handler = new TwoFactorAuthHandler();

// // // handler.setNextHandler(new RoleHandler());
// // // handler.login("login", "password");

// // handler.setNextHandler(new CredentialshHandler());
// // handler.login("admin", "admin123");

// //=====================

// const handler = new TwoFactorAuthHandler();
// const handler2 = new CredentialshHandler();

// handler2.setNextHandler(new RoleHandler());

// handler.setNextHandler(handler2);
// handler.login("guest", "admin123");

//====

// class AuthHandler {
//   setNextHandler(handler) {
//     this.nextHandler = handler;
//     return handler;
//   }

//   login(user, password) {
//     if (this.nextHandler) {
//       return this.nextHandler.login(user, password);
//     } else {
//       return false;
//     }
//   }
// }

// class TwoFactorAuthHandler extends AuthHandler {
//   login(user, password) {
//     if (
//       user === "john" &&
//       password === "password" &&
//       this.isValidTwoFactorCode()
//     ) {
//       console.log("Вхід дозволено з двофакторною автентіцікацією");
//       return true;
//     } else {
//       return super.login(user, password);
//     }
//   }

//   isValidTwoFactorCode() {
//     return true;
//   }
// }

// class RoleHandler extends AuthHandler {
//   login(user, password) {
//     if (user === "guest") {
//       console.log("Вхід дозволено з ролю гостя");
//       return true;
//     } else {
//       return super.login(user, password);
//     }
//   }
// }

// class CredentialshHandler extends AuthHandler {
//   login(user, password) {
//     if (user === "admin" && password === "admin123") {
//       console.log("Вхід дозволено з логінем та паролем");
//       return true;
//     } else {
//       return super.login(user, password);
//     }
//   }
// }

// //   const handler = new TwoFactorAuthHandler();
// //   const handler2 = new CredentialshHandler();

// //   handler2.setNextHandler(new RoleHandler());

// //   handler.setNextHandler(handler2);
// //   handler.login("guest", "admin123");

// class HandleBuilder {
//   constructor() {
//     this.firstHandler = null;
//     this.lastHandler = null;
//   }

//   add(handler) {
//     if (!this.firstHandler) {
//       this.firstHandler = handler;
//       this.lastHandler = handler;
//     } else {
//       this.lastHandler.setNextHandler(handler);
//       this.lastHandler = handler;
//     }
//     return this;
//   }

//   create() {
//     return this.firstHandler;
//   }
// }

// const handleBuilder = new HandleBuilder();

// const handler = handleBuilder
//   .add(new CredentialshHandler())
//   .add(new TwoFactorAuthHandler())
//   .add(new RoleHandler())
//   .create();

// handler.login("admin", "admin123"); // Вхід дозволено з логінем та паролем
// handler.login("john", "password"); // Вхід дозволено з двофакторною автентіцікацією
// handler.login("guest", "guest123"); // Вхід дозволено з ролю гостя
// handler.login("login", "password"); // Вхід заборонено

//==========Bridge===================================================================

// class User {
//   constructor(name, messenger) {
//     this.name = name;
//     this.messenger = messenger;
//   }

//   sendMessage(message) {
//     const formattedMessage = this.formatMessage(message);
//     this.messenger.sendMessage(formattedMessage);
//     // return formattedMessage;
//   }

//   formatMessage(message) {
//     return `[${this.name}]: ${message}`;
//   }
// }

// // через СМС
// // через емайл
// // через телеграм бот

// class SMSMessenger {
//   static sendMessage(message) {
//     console.log(`Відправлено SMS: ${message}`);
//   }
// }

// class EmailLMessenger {
//   static sendMessage(message) {
//     console.log(`Відправлено Email: ${message}`);
//   }
// }

// const john = new User("John", SMSMessenger);
// const jane = new User("Jane", SMSMessenger);

// john.sendMessage("Привіт!"); // Відправлено SMS: [John]: Привіт!
// jane.sendMessage("Привіт!"); // Відправлено SMS: [Jane]: Привіт!

//======Lesson 33=========Patterns of programming===Part 2==================

//=======Composite=======================

// class Comment {
//   constructor(text) {
//     this.text = text;
//   }

//   display() {
//     console.log(`- Коментар: ${this.text}`);
//   }
// }

// class Video {
//   comment = null;

//   constructor(title) {
//     this.title = title;
//   }

//   display() {
//     console.log(`Відео: ${this.title}`);
//     if (this.comment) {
//       this.comment.display();
//     }
//   }
// }

// const video = new Video("Навчальне відео");

// video.comment = new Comment("Дуже корисне відео");

// video.display();

// //===========

// class Comment {
//   constructor(text) {
//     this.text = text;
//   }

//   display() {
//     console.log(`- Коментар: ${this.text}`);
//   }
// }

// class Video {
//   comments = [];

//   constructor(title) {
//     this.title = title;
//   }

//   addComment(comment) {
//     this.comments.push(comment);
//   }

//   removeComment(comment) {
//     const index = this.comments.indexOf(comment);
//     if (index !== -1) {
//       this.comments.splice(index, 1);
//     }
//   }

//   display() {
//     console.log(`Відео: ${this.title}`);

//     for (const comment of this.comments) {
//       comment.display();
//     }
//   }
// }

// const video = new Video("Навчальне відео");

// video.addComment(new Comment("Дуже корисне відео"));
// video.addComment(new Comment("Дякую за чудовий матеріал"));

// console.log(video.comments);

// video.display();

// //===========

// class Comment {
//   comments = [];

//   constructor(text) {
//     this.text = text;
//   }

//   addComment(comment) {
//     this.comments.push(comment);
//   }

//   removeComment(comment) {
//     const index = this.comments.indexOf(comment);
//     if (index !== -1) {
//       this.comments.splice(index, 1);
//     }
//   }

//   display() {
//     console.log(`- Коментар: ${this.text}`);

//     for (const comment of this.comments) {
//       comment.display();
//     }
//   }
// }

// class Video {
//   comments = [];

//   constructor(title) {
//     this.title = title;
//   }

//   addComment(comment) {
//     this.comments.push(comment);
//   }

//   removeComment(comment) {
//     const index = this.comments.indexOf(comment);
//     if (index !== -1) {
//       this.comments.splice(index, 1);
//     }
//   }

//   display() {
//     console.log(`Відео: ${this.title}`);

//     for (const comment of this.comments) {
//       comment.display();
//     }
//   }
// }

// const video = new Video("Навчальне відео");

// video.addComment(new Comment("Дуже корисне відео"));
// video.addComment(new Comment("Дякую за чудовий матеріал"));

// video.comments[0].addComment(new Comment("Відповідь: Згоден"));

// video.display();

// console.log(video.comments);

//===========

// class Composite {
//   comments = [];

//   addComment(comment) {
//     this.comments.push(comment);
//   }

//   removeComment(comment) {
//     const index = this.comments.indexOf(comment);
//     if (index !== -1) {
//       this.comments.splice(index, 1);
//     }
//   }
// }

// class Comment extends Composite {
//   constructor(text) {
//     super();
//     this.text = text;
//   }

//   display() {
//     console.log(`- Коментар: ${this.text}`);

//     for (const comment of this.comments) {
//       comment.display();
//     }
//   }
// }

// class Video extends Composite {
//   constructor(title) {
//     super();
//     this.title = title;
//   }

//   display() {
//     console.log(`Відео: ${this.title}`);

//     for (const comment of this.comments) {
//       comment.display();
//     }
//   }
// }

// const video = new Video("Навчальне відео");

// video.addComment(new Comment("Дуже корисне відео"));
// video.addComment(new Comment("Дякую за чудовий матеріал"));

// video.comments[0].addComment(new Comment("Відповідь: Згоден"));

// video.display();

// console.log(video.comments);

//============Flyweight=========================

// class Category {
//   static #categories = {};

//   constructor(name) {
//     this.name = name;
//   }

//   static create(name) {
//     if (!this.#categories[name]) {
//       this.#categories[name] = new Category(name);
//     }
//     return this.#categories[name];
//   }
// }

// class Product {
//   constructor(name, category) {
//     this.name = name;
//     this.category = category;
//   }

//   display() {
//     console.log(`Product: ${this.name}, Category: ${this.category.name}`);
//   }
// }

// const electronics = Category.create("Electronics");
// const books = Category.create("Books");
// const electronics2 = Category.create("Electronics");

// console.log(electronics, books, electronics2);
// console.log(electronics === electronics2);

// const product1 = new Product("Laptop", electronics);
// const product2 = new Product("Headphones", electronics);
// const product3 = new Product("Book Title", books);
// const product4 = new Product("Smartphone", electronics2);
// const product5 = new Product("Mouse", new Category("Electronics"));

// product1.display();
// product2.display();
// product3.display();
// product4.display();

// console.log(product1.category === product4.category);

// const list = [product1, product2, product3, product4].filter(
//   (product) => product.category === Category.create("Electronics")
// );

// console.log(list);

//===================Template Method======================================

// class CoffeeMachine {
//   prepareCoffee() {
//     this.boilWater();
//     this.grindCoffeeBeans();
//     this.brewCoffee();
//     this.pourIntoCup();
//     this.addIngridients();
//     this.serveCoffee();
//   }

//   boilWater() {
//     console.log("Boiling water..");
//   }

//   grindCoffeeBeans() {
//     console.log("Grinding coffee beans..");
//   }

//   brewCoffee() {
//     console.log("Brew coffee..");
//   }

//   pourIntoCup() {
//     console.log("Pour coffee into cup..");
//   }

//   addIngridients() {
//     // цей метод залишається пустим і може бути перевизначеним у підкласах
//   }

//   serveCoffee() {
//     console.log("Coffee served!");
//   }
// }

// class LatteMachine extends CoffeeMachine {
//   addIngridients() {
//     console.log("Adding milk to make a latte...");
//   }
// }

// class CapuccinoMachine extends CoffeeMachine {
//   addIngridients() {
//     console.log(
//       "Adding frothed milk and sprinkle of cocoa to make a capuccino..."
//     );
//   }
// }

// const latteMachine = new LatteMachine();
// latteMachine.prepareCoffee();

// const capuccinoMachine = new CapuccinoMachine();
// capuccinoMachine.prepareCoffee();

// //===============Visitor=================================================

// class TextFile {
//   constructor(name, content) {
//     this.name = name;
//     this.content = content;
//   }
// }

// class ImageFile {
//   constructor(name, size) {
//     this.name = name;
//     this.size = size;
//   }
// }

// class VideoFile {
//   constructor(name, duration) {
//     this.name = name;
//     this.duration = duration;
//   }
// }

// class TextEditor {
//   files = [];

//   addFile(file) {
//     this.files.push(file);
//   }

//   readTextFile(file) {
//     console.log(
//       `Text file: ${file.name}, Size: ${file.content.length} characters`
//     );
//   }

//   readImageFile(file) {
//     console.log(`Image file: ${file.name}, Size: ${file.size} KB`);
//   }

//   readVideoFile(file) {
//     console.log(`Video file: ${file.name}, Duration: ${file.duration} minutes`);
//   }

//   readFiles() {
//     for (const file of this.files) {
//       if (file instanceof TextFile) {
//         this.readTextFile(file);
//       } else if (file instanceof ImageFile) {
//         this.readImageFile(file);
//       } else if (file instanceof VideoFile) {
//         this.readVideoFile(file);
//       }
//     }
//   }
// }

// const textEditor = new TextEditor();

// const textFile = new TextFile("document.txt", "Lorem ipsum dolor sit amet.");
// const imageFile = new ImageFile("image.jpg", 1024);
// const videoFile = new VideoFile("video.mp4", 60);

// textEditor.addFile(textFile);
// textEditor.addFile(imageFile);
// textEditor.addFile(videoFile);

// console.log(textEditor);

// textEditor.readFiles();

///==================Adapter===========================================

// Система електронних платжеів з власним API

// class ElectronicPaymentSystem {
//   makePayment(amount) {
//     const convertedAmount = this.convertAmount(amount);
//     console.log(`Making electronic payment: $${convertedAmount}`);
//   }

//   convertAmount(amount) {
//     // Логіка конвертації платежу
//     return amount * 1.2; // припустимо шо необхідна конвертація у відсотках
//   }
// }

// class OtherPaymentSystem {
//   submit(amount) {
//     console.log(`Submitting payment request: ${amount}`);
//   }
// }

// class PaymentAdapter {
//   constructor(paymentSystem) {
//     this.paymentSystem = paymentSystem;
//   }

//   makePayment(amount) {
//     const convertedAmount = this.convertAmount(amount);
//     this.paymentSystem.submit(convertedAmount);
//   }

//   convertAmount(amount) {
//     // Логіка конвертації платежу
//     return amount * 1.2; // припустимо шо необхідна конвертація у відсотках
//   }
// }

// class Order {
//   constructor(amount) {
//     this.amount = amount;

//     if (amount < 100) {
//       this.paymentSystem = new PaymentAdapter(new OtherPaymentSystem());
//     } else {
//       this.paymentSystem = new ElectronicPaymentSystem();
//     }
//   }

//   makePayment() {
//     return this.paymentSystem.makePayment(this.amount);
//   }
// }

// // class Order {
// //   constructor(amount) {
// //     this.amount = amount;

// //     if (amount < 100) {
// //       this.paymentSystem = new OtherPaymentSystem();
// //     } else {
// //       this.paymentSystem = new ElectronicPaymentSystem();
// //     }
// //   }

// //   makePayment() {
// //     return this.paymentSystem.makePayment(this.amount);

// //     // if (this.paymentSystem.makePayment) {
// //     //   return this.paymentSystem.makePayment(this.amount);
// //     // }

// //     // if (this.paymentSystem.submit) {
// //     //   return this.paymentSystem.submit(this.amount);
// //     // }
// //   }
// // }

// const electronicPaymentsystem = new ElectronicPaymentSystem();

// // electronicPaymentsystem.makePayment(100);

// const order1 = new Order(1000);
// order1.makePayment();

// const order2 = new Order(10);
// order2.makePayment();

//===============Strategy==================================================

// class ShoppingCart {
//   items = [];
//   // constructor() {
//   //   this.items = [];
//   // }

//   addItem(item) {
//     this.items.push(item);
//   }

//   discountStrategy(price) {
//     return price > 100 ? price * 0.9 : price;
//   }

//   calculateTotalPrice() {
//     // let totalPrice = 0;
//     // for (const item of this.items) {
//     //   totalPrice += item.Price;
//     // }
//     // const finalPrice = totalPrice;
//     // return finalPrice;

//     // const totalPrice = this.items.reduce((acc, item) => acc + item.price, 0);
//     // return totalPrice;

//     // return this.items.reduce((acc, item) => acc + item.price, 0);

//     const price = this.items.reduce((acc, item) => acc + item.price, 0);
//     return this.discountStrategy(price);
//   }
// }

// const shoppingCart1 = new ShoppingCart();

// shoppingCart1.addItem({ name: "Product 1", price: 100 });
// shoppingCart1.addItem({ name: "Product 2", price: 50 });

// console.log(shoppingCart1.calculateTotalPrice());

//====================

// class ShoppingCart {
//   constructor(discountStrategy) {
//     this.discountStrategy = discountStrategy;
//     this.items = [];
//   }

//   addItem(item) {
//     this.items.push(item);
//   }

//   calculateTotalPrice() {
//     const price = this.items.reduce((acc, item) => acc + item.price, 0);
//     return this.discountStrategy.calculateDiscount(price);
//   }
// }

// class DiscountStrategy {
//   calculateDiscount(price) {
//     return price;
//   }
// }

// // Стратегія знижки для звичайних клієнтів

// class ReularDiscountStrategy extends DiscountStrategy {
//   calculateDiscount(price) {
//     return price * 1.1; // 10% знижка
//   }
// }

// // Стратегія знижки для преміум клієнтів

// class PremiumDiscountStrategy extends DiscountStrategy {
//   calculateDiscount(price) {
//     return price * 1.2; // 20% знижка
//   }
// }

// // Стратегія знижки для нових клієнтів

// class NewCustomerDiscountStrategy extends DiscountStrategy {
//   calculateDiscount(price) {
//     return price * 1.05; // 5% знижка
//   }
// }

// const shoppingCart1 = new ShoppingCart();

// shoppingCart1.addItem({ name: "Product 1", price: 100 });
// shoppingCart1.addItem({ name: "Product 2", price: 50 });

// console.log(shoppingCart1.calculateTotalPrice());

//==

// const shoppingCart1 = new ShoppingCart(new ReularDiscountStrategy());

// shoppingCart1.addItem({ name: "Product 1", price: 100 });
// shoppingCart1.addItem({ name: "Product 2", price: 50 });

// console.log(shoppingCart1.calculateTotalPrice());

//==

// const shoppingCart1 = new ShoppingCart(new PremiumDiscountStrategy());

// shoppingCart1.addItem({ name: "Product 1", price: 100 });
// shoppingCart1.addItem({ name: "Product 2", price: 50 });

// console.log(shoppingCart1.calculateTotalPrice());

//==

// const shoppingCart1 = new ShoppingCart(new NewCustomerDiscountStrategy());

// shoppingCart1.addItem({ name: "Product 1", price: 100 });
// shoppingCart1.addItem({ name: "Product 2", price: 50 });

// console.log(shoppingCart1.calculateTotalPrice());

//=================Iterator===========================

// class User {
//   constructor(name, email, password) {
//     this.name = name;
//     this.email = email;
//     this.password = password;
//   }
// }

// class UserGroup {
//   users = [];

//   addUser(user) {
//     this.users.push(user);
//   }
// }

// class UserGroup {
//   static users = [];

//   static addUser(user) {
//     this.users.push(user);
//   }
// }

// const group1 = new UserGroup();

// group1.addUser(new User("John Doe", "john@example.com", "password1"));

// const group2 = new UserGroup();

// group2.addUser(new User("Jane Smith", "jane@example.com", "password2"));

// console.log(group1, group2);

//==

// const group = new UserGroup();

// group.addUser(new User("John Doe", "john@example.com", "password1"));

// group.addUser(new User("Jane Smith", "jane@example.com", "password2"));

// console.log(group);

// console.log(group.users.map((user) => user.name).join(", "));
// console.log(group.users.map((user) => user.password).join(", "));

//====================================

// class User {
//   constructor(name, email, password) {
//     this.name = name;
//     this.email = email;
//     this.password = password;
//   }
// }

// class UserGroup {
//   users = [];

//   addUser(user) {
//     this.users.push(user);
//   }
// }

// class UserIterator {
//   constructor(names) {
//     this.names = names;
//     this.currentIndex = 0;
//   }

//   hasNext() {
//     return this.currentIndex < this.names.length;
//   }

//   next() {
//     if (this.hasNext) {
//       const name = this.names[this.currentIndex];
//       this.currentIndex++;
//       return name;
//     }
//     return null;
//   }
// }

// class UserIterator {
//   #name = null;
//   #currentIndex = null;

//   constructor(userGroup) {
//     this.#names = userGroup.map((user) => user.name);
//     this.#currentIndex = 0;
//   }

//   #hasNext() {
//     return this.#currentIndex < this.#names.length;
//   }

//   next() {
//     if (this.#hasNext) {
//       const name = this.names[this.#currentIndex];
//       this.#currentIndex++;
//       return name;
//     }
//     return null;
//   }
// }

// //====

// class User {
//   constructor(name, email, password) {
//     this.name = name;
//     this.email = email;
//     this.password = password;
//   }
// }

// class UserGroup {
//   users = [];

//   addUser(user) {
//     this.users.push(user);
//   }
// }

// class UserIterator {
//   #users = null;
//   #currentIndex = 0;

//   constructor(userGroup) {
//     this.#users = userGroup.users;
//   }

//   #hasNext() {
//     return this.#currentIndex < this.#users.length;
//   }

//   next() {
//     if (this.#hasNext()) {
//       const name = this.#users[this.#currentIndex].name;
//       this.#currentIndex++;
//       return name;
//     }
//     return null;
//   }
// }

// const group = new UserGroup();

// group.addUser(new User("John Doe", "john@example.com", "password1"));
// group.addUser(new User("Jane Smith", "jane@example.com", "password2"));

// const iterator = new UserIterator(group);

// // console.log(group);

// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());

//====

// class User {
//   constructor(name, email, password) {
//     this.name = name;
//     this.email = email;
//     this.password = password;
//   }
// }

// class UserGroup {
//   users = [];

//   addUser(user) {
//     this.users.push(user);
//   }
// }

// class UserIterator {
//   #users = null;
//   #currentIndex = 0;

//   constructor(userGroup) {
//     this.#users = userGroup.users;
//   }

//   #hasNext() {
//     return this.#currentIndex < this.#users.length;
//   }

//   next() {
//     if (this.#hasNext()) {
//       const name = this.#users[this.#currentIndex].name;
//       this.#currentIndex++;
//       return name;
//     }
//     return null;
//   }

//   list() {
//     return this.#users.map((user) => user.name).join(", ");
//   }
// }

// const group = new UserGroup();

// group.addUser(new User("John Doe", "john@example.com", "password1"));
// group.addUser(new User("Jane Smith", "jane@example.com", "password2"));

// const iterator = new UserIterator(group);

// // console.log(group);

// console.log(group.users.map((user) => user.name).join(", "));

// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());

// console.log(iterator.list());

//=================Mediator==============================

class User {
  // constructor(name, mediator) {
  //   this.name = name;
  //   this.mediator = mediator;
  // }

  constructor(name, chat) {
    this.name = name;
    this.chat = chat;
  }

  sendMessage(message) {
    console.log(`${this.name} відправив повідомлення ${message}`);
    // return message;
    return this.chat.sendMessage(this, message);
  }

  receiveMessage(user, message) {
    console.log(
      `${this.name} отримав повідомлення від ${user.name}: ${message}`
    );
  }
}

class Chat {
  constructor() {
    this.users = [];
  }

  //Додавання користувача до чату
  addUser(user) {
    this.users.push(user);
  }

  //Відправлення повідомлення в чат
  sendMessage(sender, message) {
    for (const user of this.users) {
      if (user !== sender) {
        //Відправка повідомлення в message
        user.receiveMessage(sender, message);
      }
    }
  }
}

const chatMediator = new Chat();
const user1 = new User("John Doe", chatMediator);
const user2 = new User("Jane Smith", chatMediator);
const user3 = new User("Mike Dallas", chatMediator);

chatMediator.addUser(user1);
chatMediator.addUser(user2);
chatMediator.addUser(user3);

user1.sendMessage("Привіт, всім!");
