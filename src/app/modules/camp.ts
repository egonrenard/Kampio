import { Location } from './location';

export class Camp {
  constructor(
    public id: number,
    public name: string,
    public sport: string,
    public organisator: string,
    public location: Location, // nu een object
    public startDate: string,
    public endDate: string,
    public startHour: string,
    public endHour: string,
    public capacity: number,
    public price: number,
    public ageMin: number,
    public ageMax: number
  ) {}

  campDuration(): number {
    const start = new Date(this.startDate);
    const end = new Date(this.endDate);
    return Math.ceil((end.getTime() - start.getTime()) / (1000 * 60 * 60 * 24)) + 1;
  }
}
