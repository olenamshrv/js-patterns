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
