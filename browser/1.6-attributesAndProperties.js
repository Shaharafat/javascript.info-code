/*
* 👁 For element nodes, most standard HTML attributes automatically 
* become properties of DOM objects.

* We’ve already seen built-in DOM properties. There are a lot. But technically no one limits us, and if there aren’t enough, we can add our own.

* DOM nodes are regular JavaScript objects. We can alter them.
*/

document.body.myData = {
  name: "caesar",
  title: "Imperator"
}

console.log(document.body.myData.title);

// ✅ We can add a method as well:

document.body.sayTagName = function() {
  alert(this.tagName);
};

document.body.sayTagName();

// ✅ We can also modify built-in prototypes like Element.prototype and add new methods to all elements:

Element.prototype.sayHi = function() {
  alert(`Hello, I'm ${this.tagName}`);
};

document.documentElement.sayHi(); // Hello, I'm HTML
document.body.sayHi(); // Hello, I'm BODY