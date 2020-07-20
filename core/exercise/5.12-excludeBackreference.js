let room = {
  number: 23,
};

let meetup = {
  title: "Conference",
  occupiedBy: [{ name: "John" }, { name: "Alice" }],
  place: room,
};

// circular references
room.occupiedBy = meetup;
meetup.self = meetup;

let json = JSON.stringify(meetup, function (key, value) {
  //  👇think about it
  /* key:value pairs that come to replacer:
:             [object Object]
title:        Conference
participants: [object Object],[object Object]
0:            [object Object]
name:         John
1:            [object Object]
name:         Alice
place:        [object Object]
number:       23
*/
  // console.log(this);
  if (key != "" && value == meetup) {
    return undefined;
  }
  return value;
});

console.log(json);
