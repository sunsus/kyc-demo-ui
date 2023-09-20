import {Component, Input, OnInit} from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Relationship } from '../kyc-result';

@Component({
  selector: 'app-relationship-table',
  templateUrl: './relationship-table.component.html',
  styleUrls: ['./relationship-table.component.css'],
})
export class RelationshipTableComponent implements OnInit {
  displayedColumns: string[] = ['relation', 'fullName', 'dateOfBirth']
  dataSource = new MatTableDataSource<Relationship>()

  @Input() relationships: Relationship[] = []

  ngOnInit(): void {
    this.dataSource.data = this.relationships
  }
}
