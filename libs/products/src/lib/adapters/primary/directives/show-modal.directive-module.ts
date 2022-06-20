import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShowModalDirective } from './show-modal.directive';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  imports: [CommonModule, MatDialogModule],
  declarations: [ShowModalDirective],
  providers: [],
  exports: [ShowModalDirective],
})
export class ShowModalDirectiveModule {}
