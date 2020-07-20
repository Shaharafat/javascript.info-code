let list = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: {
        value: 4,
        next: null,
      },
    },
  },
};

// loop variant
function prntList(list) {
  for (; list ; ) {
    console.log(list.value);

    list = list.next;
  }
}
// function prntList(list) {
//   let tmp = list;

//   while (tmp) {
//     console.log(tmp.value);
//     tmp = tmp.next;
//   }

// }

prntList(list);
function printList(list) {
  console.log(list.value);
  if (list.next) {
    printList(list.next);
  }
}

printList(list);
