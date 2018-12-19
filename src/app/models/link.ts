export class Link {
  path: string;
  title: string;
  isClicked: boolean;
  roles: string[];

  constructor(
    path: string,
    title: string,
    isClicked: boolean,
    roles: string[] = ["admin", "user"]
  ) {
    this.path = path;
    this.title = title;
    this.isClicked = isClicked;
    this.roles = roles;
  }
}
