import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatCardModule } from '@angular/material/card';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatListModule } from '@angular/material/list';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatDialogModule } from '@angular/material/dialog';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatMenuModule } from '@angular/material/menu';

const MODULES = [
  MatButtonModule,
  MatIconModule,
  MatDialogModule,
  MatToolbarModule,
  MatTooltipModule,
  MatCardModule,
  MatExpansionModule,
  MatListModule,
  MatMenuModule,
  MatProgressSpinnerModule,
  MatSnackBarModule,
  MatInputModule,
  MatTableModule,
  MatAutocompleteModule
]

@NgModule({
  exports: [MODULES],
})
export class MaterialModule { }
