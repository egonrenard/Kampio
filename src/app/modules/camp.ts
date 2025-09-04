import { Location } from './location';

export class Camp {
  public rating: number | null;
  public numberOfInscriptions: number | 0 ;
  // ik gebruik null en niet undefined omdat als ik een object van een kamp ophaal en ik zie dat de rating undefined is,
  // dan weet ik dat er een probleem is met het ophalen van de data. Als het null is, weet ik dat er gewoon nog geen rating is.
  
  constructor(
    public id: number,
    public name: string,
    public sport: string,
    public organisation: string,
    public location: Location, // Location is een object
    public startDate: string,
    public endDate: string,
    public startHour: string,
    public endHour: string,
    public capacity: number,
    public price: number,
    public ageMin: number,
    public ageMax: number,
    numberOfInscriptions?: number | 0,
    // rating kan optioneel zijn en kan een nummer of null zijn.
    // ik geef dit mee aan de constructor omdat als er data van de database wordt opgehaald, en we willen hier een camp object van maken dat dit gaat.
    // als je hier geen rating zet, dan wordt de rating van een object dat opgehaald word altijd op null gezet.
    rating?: number | null,
  ) {
    // en hier kijken we dan of er een rating word meegegeven aan de constructor, als dit het geval is dan is de rating = de rating dat word mee gegeven in de constructor,
    // als dit niet zo is dan word de rating op null gezet. (bv. bij het aanmaken van een nieuw kamp)
    this.rating = rating ?? null;
    this.numberOfInscriptions = numberOfInscriptions ?? 0;
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
