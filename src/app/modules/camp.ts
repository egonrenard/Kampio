import { Location } from './location';

export class Camp {
  public rating: number | null;
  public numberOfInscriptions: number | 0 ;
  public location: Location 
  // ik gebruik null en niet undefined omdat als ik een object van een kamp ophaal en ik zie dat de rating undefined is,
  // dan weet ik dat er een probleem is met het ophalen van de data. Als het null is, weet ik dat er gewoon nog geen rating is.
  constructor(
    public id: number,
    public name: string,
    public sports: string[],
    public organisation: string,
    public locationId: number,
    public startDate: string,
    public endDate: string,
    public startHour: string,
    public endHour: string,
    public capacity: number,
    public price: number,
    public ageMin: number,
    public ageMax: number,
    location: Location,
    rating?: number | null,
    numberOfInscriptions?: number
  ) {
    this.rating = rating ?? null;
    this.numberOfInscriptions = numberOfInscriptions ?? 0;
    this.location = location;
  }

  campDuration(): number {
    const start = new Date(this.startDate);
    const end = new Date(this.endDate);
    return Math.ceil((end.getTime() - start.getTime()) / (1000 * 60 * 60 * 24)) + 1;
  }

  campMonth(): string {
    const startMonth = new Date(this.startDate).getMonth();
    const endMonth = new Date(this.endDate).getMonth();

    const monthNames=[
      "Januari", "Februari", "Maart", "April", "Mei", "Juni",
      "Juli", "Augustus", "September", "Oktober", "November", "December"
    ]

    if(startMonth == endMonth){
      return monthNames[startMonth]
    }else{
      return `${monthNames[startMonth]} - ${monthNames[endMonth]}`
    }
  }

  campAgeRange(): string {
    return `${this.ageMin} - ${this.ageMax} jaar`;
  }

  campTimeRange(): string {
    return `${this.startHour} - ${this.endHour}`;
  }

  campPlaceLeft():number{
    return this.capacity - this.numberOfInscriptions;
  }

}
