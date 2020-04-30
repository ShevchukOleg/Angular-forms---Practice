/**
 * клас для описання об'єкта що буде створений у компоненті
 */
export class User {
  constructor(
    public id: number,
    public name: string,
    public position: string,
    public alterEgo?: string
  ) { }
}

export class Post {
  constructor(
    public title: string,
    public text: string
  ) { }
}
