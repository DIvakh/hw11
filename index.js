const toDoList = {
  tasks: [],
  // ======== Add New Task ========

  add(title, text) {
    const isUnique = this.isUnique({ title, text });
    const note = {
      title,
      text,
      isComplete: false,
    };
    this.tasks.push(note);
  },
  // ======== Delete Task ========

  delete(value) {
    this.tasks = this.tasks.filter((task) => task.title != value);
  },
  // ======== Unique Check ========

  isUnique({ title, text }) {
    const note = this.tasks.some(
      (note) => note.title === title || note.text === text
    );
    if (note) {
      throw new Error("Task already Exists");
    }
  },
};

toDoList.add("Do a hw", "Need to do the last hw in time");
toDoList.add("Go to the grocery", "Need to buy a milk");
console.log(toDoList.tasks);
toDoList.delete("Go to the grocery");
console.log(toDoList.tasks);
