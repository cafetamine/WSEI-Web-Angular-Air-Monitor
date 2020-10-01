import {Injectable} from '@angular/core';
import {MeasurementFacade} from '../../../core/application/measurement/MeasurementFacade';
import {GetMeasurementByInstallationIdCommand} from '../../../core/application/measurement/command/GetMeasurementByInstallationIdCommand';
import {Observable, of} from 'rxjs';
import {GetMeasurementByInstallationIdResult} from '../../../core/application/measurement/result/GetMeasurementByInstallationIdResult';
import {Measurement} from '../../../core/domain/measurement/Measurement';
import {MeasurementItem} from '../../../core/domain/measurement/MeasurementItem';
import {MeasurementValue} from '../../../core/domain/measurement/MeasurementValue';
import {MeasurementIndex} from '../../../core/domain/measurement/MeasurementIndex';
import {MeasurementStandard} from '../../../core/domain/measurement/MeasurementStandard';

@Injectable({providedIn: 'root'})
export class MockedMeasurementService implements MeasurementFacade {

  public getMeasurementByInstallationId(command: GetMeasurementByInstallationIdCommand): Observable<GetMeasurementByInstallationIdResult> {
    return of(GetMeasurementByInstallationIdResult.Success(new Measurement(new MeasurementItem(
          new Date(),
          new Date(),
          [
            new MeasurementValue('PM1', 3.6),
            new MeasurementValue('PM25', 5.51),
            new MeasurementValue('PM10', 10.33),
            new MeasurementValue('PRESSURE', 1004.05),
            new MeasurementValue('HUMIDITY', 88.24),
            new MeasurementValue('TEMPERATURE', 11.66)
          ],
          [
            new MeasurementIndex(
              'AIRLY_CAQI',
              10.33,
              'VERY_LOW',
              'Great air here today!',
              'Breathe as much as you can!',
              '#6BC926')
          ],
          [
            new MeasurementStandard(
              'WHO',
              'PM25',
              25,
              22.03,
              '24h'),
            new MeasurementStandard(
              'WHO',
              'PM10',
              50,
              20.67,
              '24h')
          ]))));
  }
}
