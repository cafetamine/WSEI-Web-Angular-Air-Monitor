import {Component, Input, OnInit} from '@angular/core';
import {MeasurementIndex} from '../../../../../core/domain/measurement/MeasurementIndex';

@Component({
  selector: 'app-measurement-index',
  templateUrl: './measurement-index.component.html',
  styleUrls: ['./measurement-index.component.css']
})
export class MeasurementIndexComponent implements OnInit {

  @Input()
  public index: MeasurementIndex;

  public constructor() { }

  public ngOnInit(): void { }

}
