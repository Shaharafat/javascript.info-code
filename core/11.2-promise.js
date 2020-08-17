// 🔥 Promise
/**
 * The function passed to new Promise is called the executor. When new Promise is created, the executor runs automatically. It contains the producing code which should eventually produce the result. In terms of the analogy above: the executor is the “singer”.

  Its arguments resolve and reject are callbacks provided by JavaScript itself. Our code is only inside the executor.

  When the executor obtains the result, be it soon or late, doesn’t matter, it should call one of these callbacks:

  resolve(value) — if the job finished successfully, with result value.
  reject(error) — if an error occurred, error is the error object.
  So to summarize: the executor runs automatically and attempts to perform a job. When it is finished with the attempt it calls resolve if it was successful or reject if there was an error.

  The promise object returned by the new Promise constructor has these internal properties:

  state — initially "pending", then changes to either "fulfilled" when resolve is called or "rejected" when reject is called.
  result — initially undefined, then changes to value when resolve(value) called or error when reject(error) is called.
 */
let promise = new Promise(function (resolve, reject) {
  // the function is executed automatically
  // when the promise is constructed

  // after 1 second signal that the job
  // is done with the result
  setTimeout(() => {
    resolve("done");
  }, 1000);
});
console.log(promise);

// 👀 There can be only a single result or an error
/**
 * The executor should call only one resolve or one reject. Any state change is final.
 */

// 👀 Reject with Error objects
/**
 * In case something goes wrong, the executor should call reject. That can be done with any type of argument (just like resolve). But it is recommended to use Error objects (or objects that inherit from Error). The reasoning for that will soon become apparent.
 */

/**
  * 🔥 The state and result are internal
  The properties state and result of the Promise object are internal. We can’t directly access them. We can use the methods .then/.catch/.finally for that. They are described below.
  */

promise.then(
  (result) => console.log(result),
  (error) => console.log(error)
);
// 🔥 catch
/**
 * If we’re interested only in errors, then we can use null as the first argument: .then(null, errorHandlingFunction). Or we can use .catch(errorHandlingFunction), which is exactly the same:
 */
promise.catch(error => console.log(error))

