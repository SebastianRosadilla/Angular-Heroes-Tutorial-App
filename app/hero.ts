interface IHero {
  public id: string;
  public name: string;
}

export class Hero {
  public id: number;
  public name: string;

  constructor(id, name) {
    this.id = id;
    this.name = name;
  }
}
