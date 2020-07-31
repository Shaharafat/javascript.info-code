let group = {
  title: "our group",
  students: ['John', "pete", "Alice"],
  showList() {
    this.students.forEach(
      student => console.log(`${this.title} : ${student}`)
    )
  },
  left: this,
  anShowList() {
    this.students.forEach(
      function (student) {
        // console.log(`${this.title} : ${student}`);
        // this = group;
        console.log(`${this.title} : ${student}`);
      }.bind(this) // alhamdulillah. ❤️
    )
  }
}

group.showList();
group.anShowList()