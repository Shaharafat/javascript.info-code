// We can also assign a method to the class function itself, not to its "prototype". Such methods are called static.
class User {
  static staticMethod() {
    console.log(this == User);
  }
}
console.log(User.staticMethod());

/**
 * Usually, static methods are used to implement functions that belong to the class, but not to any particular object of it.

  For instance, we have Article objects and need a function to compare them. A natural solution would be to add Article.compare method, like this:
 */

class Article {
  constructor(title, date) {
    this.title = title;
    this.date = date;
  }

  static compare(articleA, articleB) {
    return articleA.date - articleB.date;
  }
}

let articles = [
  new Article("HTML", new Date(2019, 1, 1)),
  new Article("CSS", new Date(2019, 0, 1)),
  new Article("JavaScript", new Date(2019, 11, 1)),
];

articles.sort(Article.compare);
console.log(articles[0].title);

/**
 * Here Article.compare stands “above” articles, as a means to compare them. It’s not a method of an article, but rather of the whole class.

  Another example would be a so-called “factory” method. Imagine, we need few ways to create an article:

 * Create by given parameters (title, date etc).
 * Create an empty article with today’s date.
 * …or else somehow.
 */

class Article2 {
  constructor(title, date) {
    this.title = title;
    this.date = date;
  }

  // 🔥 static properties
  // this is a recent addition 👀
  // static publisher = "Gyankosh"; // 👈 new addition.
  static createTodays() {
    // remember, this = Article
    return new this("Today's digest", new Date());
  }
}

let article = Article2.createTodays();
console.log(article.title);
console.log(Article2.publisher);
