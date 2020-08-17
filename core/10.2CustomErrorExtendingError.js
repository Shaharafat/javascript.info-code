/**
 * Custom errors, extending Error
When we develop something, we often need our own error classes to reflect specific things that may go wrong in our tasks. For errors in network operations we may need HttpError, for database operations DbError, for searching operations NotFoundError and so on.

  Our errors should support basic error properties like message, name and, preferably, stack. But they also may have other properties of their own, e.g. HttpError objects may have a statusCode property with a value like 404 or 403 or 500.

  JavaScript allows to use throw with any argument, so technically our custom error classes don’t need to inherit from Error. But if we inherit, then it becomes possible to use obj instanceof Error to identify error objects. So it’s better to inherit from it.

  As the application grows, our own errors naturally form a hierarchy. For instance, HttpTimeoutError may inherit from HttpError, and so on.
 */

// 👀 Extending Error
// let json = `{"name: "John","age":30}`;

/**
 * Internally, we’ll use JSON.parse. If it receives malformed json, then it throws SyntaxError. But even if json is syntactically correct, that doesn’t mean that it’s a valid user, right? It may miss the necessary data. For instance, it may not have name and age properties that are essential for our users.

  Our function readUser(json) will not only read JSON, but check (“validate”) the data. If there are no required fields, or the format is wrong, then that’s an error. And that’s not a SyntaxError, because the data is syntactically correct, but another kind of error. We’ll call it ValidationError and create a class for it. An error of that kind should also carry the information about the offending field.

  Our ValidationError class should inherit from the built-in Error class.

  That class is built-in, but here’s its approximate code so we can understand what we’re extending:
 */

class ValidationError extends Error {
  constructor(message) {
    super(message); // 1
    this.name = "ValidationError"; // 2
  }
}

function test() {
  throw new ValidationError("whoops!");
}

try {
  test();
} catch (err) {
  console.log(err.message);
  console.log(err.name);
  console.log(err.stack);
}

// using readUser(json)
// let json = `{"name":'arafat'}`;
function readUser(json) {
  let user = JSON.parse(json);

  if (!user.age) {
    throw new ValidationError('No field: age');
  }

  if (!user.name) {
    throw new ValidationError('No filed: name');
  }

  return user;
}

try {
  let user= readUser('{"age":25}');
} catch (err) {
  if (err instanceof ValidationError) {
    console.log('Invalid data: ' + err.message);
  } else if (err instanceof SyntaxError) {
    console.log('JSON Syntax Error: ' + err.message);
  } else {
    throw err;
  }
}

/**
 * Further inheritance 🔥
 * 
  The ValidationError class is very generic. Many things may go wrong. The property may be absent or it may be in a wrong format (like a string value for age). Let’s make a more concrete class PropertyRequiredError, exactly for absent properties. It will carry additional information about the property that’s missing.
 */
class PropertyRequiredError extends ValidationError{
  constructor(property) {
    super('No property: ' + property);
    this.name = "PropertyRequiredError"; // 👀 this.constructor.name
    this.property = property;
  }
}

function readUser2(json) {
  let user = JSON.parse(json);

  if (!user.age) {
    throw new PropertyRequiredError("age");
  }
  if (!user.name) {
    throw new PropertyRequiredError("name");
  }
  return user;
}

try {
  let user = readUser2('{"age":25}');
} catch (err) {
  if (err instanceof ValidationError) {
    console.log("Invalid data: " + err.message);
    console.log(err.name);
    console.log(err.property);
  }
}