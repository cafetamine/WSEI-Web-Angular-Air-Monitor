import {MeasurementValue} from './MeasurementValue';
import {MeasurementIndex} from './MeasurementIndex';
import {MeasurementStandard} from './MeasurementStandard';

export class MeasurementItem {

  public constructor(public readonly fromDateTime: Date,
                     public readonly tillDateTime: Date,
                     public readonly values: MeasurementValue[],
                     public readonly indexes: MeasurementIndex[],
                     public readonly standards: MeasurementStandard[]) {
  }

}
