export class MeasurementIndex {

  public constructor(public readonly name: string, // TODO enum
                     public readonly value: number,
                     public readonly level: string, // TODO enum
                     public readonly description: string,
                     public readonly advice: string,
                     public readonly color: string) { }

}
