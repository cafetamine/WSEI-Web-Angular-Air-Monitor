import {MeasurementItem} from './MeasurementItem';

export class Measurement {

  public constructor(public readonly current: MeasurementItem) { }
                     // ignored public readonly history: MeasurementItem[],
                     // ignored public readonly forecast: MeasurementItem[]) { }

}
