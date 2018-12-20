export class DataSource {
  data: any;
  isClicked: boolean;
  dateFormat = {
    year: "numeric",
    month: "long",
    day: "numeric",
    weekday: "long",
    timezone: "UTC",
    hour: "numeric",
    minute: "numeric",
    second: "numeric"
  };

  constructor(data: any, clicked: boolean) {
    this.data = data;
    this.isClicked = clicked;
  }

  getDate(): string {
    let date: Date = new Date(this.data.date);
    date.setDate(date.getDate() - 1);
    return date.toLocaleString("en-US", this.dateFormat);
  }
}
