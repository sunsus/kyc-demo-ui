import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import { Relationship } from '../kyc-result';

@Component({
  selector: 'app-relationship-table',
  templateUrl: './relationship-table.component.html',
  styleUrls: ['./relationship-table.component.css'],
})
export class RelationshipTableComponent implements OnInit, OnChanges {

  @Input() relationships: Relationship[] = []

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['relationships']) {
    }
  }
}
