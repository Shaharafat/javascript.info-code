let json = '{"age":30}'; // incomplete data
try {
  let user = JSON.parse(json);
  if (!user.name) {
    throw new ReferenceError('Incomplete data: no name'); // *
  }

  console.log(user.name);
}
catch(e){
  console.log(e.name , e.message);
}

let json2 = '{"age": 30}';
try {
  let user2 = JSON.parse(json2);

  if (!user2.name) {
    throw new SyntaxError('Incomplete data: no name');
  }

  blabla();

  console.log(user2.name);
} catch (e) {
  if (e instanceof SyntaxError) {
    console.log("JSON Error: " + e.message);
  } else {
    throw e; // 👈 rethrow.
  }
}

h:



































function readData() {
  let json = '{ "age": 30 }';

  try {
    // ...
    blabla(); // error!
  } catch (e) {
    // ...
    if (!(e instanceof SyntaxError)) {
      throw e; // rethrow (don't know how to deal with it)
    }
  }
}

try {
  readData();
} catch (e) {
  console.log('External catch got: ' + 1);
}