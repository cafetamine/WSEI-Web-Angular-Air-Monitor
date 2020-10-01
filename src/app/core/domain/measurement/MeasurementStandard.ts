export class MeasurementStandard {

  public constructor(public readonly name: string, // TODO enum
                     public readonly pollutant: string, // TODO enum
                     public readonly limit: number,
                     public readonly percent: number,
                     public readonly averaging: string) {
  }

}
