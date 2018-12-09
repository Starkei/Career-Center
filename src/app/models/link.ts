export class Link {
  path: string;
  title: string;
  isClicked: boolean;

  constructor(path: string, title: string, isClicked: boolean) {
    this.path = path;
    this.title = title;
    this.isClicked = isClicked;
  }

}
