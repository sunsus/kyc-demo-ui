import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Relationship } from '../kyc-result';

@Component({
  selector: 'app-relationship-table',
  templateUrl: './relationship-table.component.html',
  styleUrls: ['./relationship-table.component.css'],
})
export class RelationshipTableComponent implements OnInit, OnChanges {
  displayedColumns: string[] = ['relation', 'fullName', 'dateOfBirth', 'dateOfDeath']
  dataSource = new MatTableDataSource<Relationship>()

  @Input() relationships: Relationship[] = []

  ngOnInit(): void {
    this.dataSource.data = this.relationships
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['relationships']) {
      this.dataSource.data = changes['relationships'].currentValue
    }
  }
}
