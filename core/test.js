// describe("pow", function () {
// it("raise to n-th power", function () {
//   assert.equal(pow(2, 3), 8);
//   assert.equal(pow(3, 4), 81);
// });

// or 👀 👇
// it("2 raised to power 3 is 8", function () {
//   assert.equal(pow(2, 3), 8);
// });
// it("3 raised to power 4 is 81", function () {
//   assert.equal(pow(3, 4), 81);
// });

// 👀 👇 improving implementation
//   function makeTest(x) {
//     let expected = x * x * x;
//     it(`${x} in the power 3 is ${expected}`, function () {
//       assert.equal(pow(x, 3), expected);
//     });
//   }
//   for (let x = 1; x <= 5; x++) {
//     makeTest(x);
//   }
// });

describe("pow", function () {
  describe("raises x to power 3", function () {
    function makeTest(x) {
      let expected = x * x * x;
      it(`${x} in the power 3 is ${expected}`, function () {
        assert.equal(pow(x, 3), expected);
      });
    }
    for (let x = 1; x <= 5; x++) {
      makeTest(x);
    }


    it ('for negative n the result is NaN', function(){
      assert.isNaN(pow(2,-1))
    })

    it('for non-integer n the result is NaN', function () {
      assert.isNaN(pow(2,1.5))
    })
  });

  // ... more test to follow here. both describe and it can be added.

  // 👀 before/after and beforeEach/afterEach
  // 👉 We can setup before/after functions that execute before/after running tests,
  // and also beforeEach / afterEach functions that execute before / after every it.
  // describe("test", function () {
  //   before(() => alert("Testing started - before all tests"));
  //   after(() => alert("Testing finished - after all tests"));

  //   beforeEach(() => alert("Before a test - enter a test"));
  //   afterEach(() => alert("After a test - exit a test"));

  //   it("test 1", () => alert(1));
  //   it("test 2", () => alert(2));
  // });


});

// 👀

/*
 * describe("title", function() { ... })
 * What functionality we’re describing. In our case we’re describing the function pow. Used to group “workers” – the it blocks.

 * it("use case description", function() { ... })
    In the title of it we in a human-readable way describe the particular use case, and the second argument is a function that tests it.

 * assert.equal(value1, value2)
 * The code inside it block, if the implementation is correct, should execute without errors.

 * Functions assert.* are used to check whether pow works as expected. Right here we’re using one of them – assert.equal, it compares arguments and yields an error if they are not equal. Here it checks that the result of pow(2, 3) equals 8. There are other types of comparisons and checks, that we’ll add later.

 * The specification can be executed, and it will run the test specified in it block. We’ll see that later.
*/

/*
 * The development flow
 * The flow of development usually looks like this:

 *  An initial spec is written, with tests for the most basic functionality.
 * An initial implementation is created.
 * To check whether it works, we run the testing framework Mocha (more details soon) that runs the spec. While the functionality is not complete, errors are displayed. We make corrections until everything works.
 * Now we have a working initial implementation with tests.
 * We add more use cases to the spec, probably not yet supported by the implementations. Tests start to fail.
 * Go to 3, update the implementation till tests give no errors.
 * Repeat steps 3-6 till the functionality is ready.
 * So, the development is iterative. We write the spec, implement it, make sure tests pass, then write more tests, make sure they work etc. At the end we have both a working implementation and tests for it.

 * Let’s see this development flow in our practical case.

 * The first step is already complete: we have an initial spec for pow. Now, before making the implementation, let’s use few JavaScript libraries to run the tests, just to see that they are working (they will all fail).
*/
