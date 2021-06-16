const toDoList = {
  tasks: [],

  // ======== Add New Task ========

  add(title, text) {
    const isUnique = this.isUnique({ title, text });
    const task = {
      title,
      text,
      isComplete: false,
    };
    this.tasks.push(task);
  },
  // ======== Delete Task ========

  delete(value) {
    this.tasks = this.tasks.filter((task) => task.title != value);
  },

  // ======== Edit Task ========

  edit(value, edited) {
    const task = this.tasks.find(
      (task) => task.title === value || task.text === value
    );
    if (!task) {
      throw new Error("Can't find a task!");
    }
    const isUnique = this.isUnique(edited);
    task.title = edited.title || task.title;
    task.text = edited.text || task.text;
  },

  // ======== Statistics ========

  stats() {
    const statistics = { inProgress: 0, completed: 0 };
    statistics.total = this.tasks.length;
    for (i of this.tasks) {
      if (!i.isComplete) {
        statistics.inProgress++;
      } else {
        statistics.completed++;
      }
    }
    return statistics;
  },

  // ======== Unique Check ========

  isUnique({ title, text }) {
    const task = this.tasks.some(
      (task) => task.title === title || task.text === text
    );
    if (task) {
      throw new Error("Task already exists");
    }
  },
};

toDoList.add("Do a hw", "Need to do the last hw in time");

toDoList.add("Go to the grocery", "Need to buy some milk");
toDoList.add("Go to work", "You have to do some work");

toDoList.delete("Go to work");

toDoList.edit("Do a hw", {
  title: "Read about ES6",
  text: "Read about Spread and Rest",
});

console.log(toDoList.tasks);
console.log(toDoList.stats());
