import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {NglModule} from 'ng-lightning';
import {HttpClientModule} from "@angular/common/http";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FamilySituationComponent } from './family-situation/family-situation.component';
import { RelationshipTableComponent } from './family-situation/relationship-table/relationship-table.component';
import { MigrationComponent } from './migration/migration.component';
import { LegacyDataComponent } from './legacy-data/legacy-data.component';
import {NgOptimizedImage} from "@angular/common";

@NgModule({
  declarations: [
    AppComponent,
    FamilySituationComponent,
    RelationshipTableComponent,
    MigrationComponent,
    LegacyDataComponent
  ],
    imports: [
        BrowserModule,
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule,
        BrowserAnimationsModule,
        NglModule,
        NgOptimizedImage
    ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
