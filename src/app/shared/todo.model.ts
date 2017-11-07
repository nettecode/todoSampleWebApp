export class Todo {
  public name: string;
  public done: boolean;

  constructor(name: string, done: boolean = false) {
    this.name = name;
    this.done = done;
  }
}
