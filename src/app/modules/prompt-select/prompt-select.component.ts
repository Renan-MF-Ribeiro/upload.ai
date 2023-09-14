import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatSelectModule } from '@angular/material/select';
interface Prompt {
  id: string;
  title: string;
  template: string;
}
@Component({
  selector: 'PromptSelect',
  standalone: true,
  imports: [CommonModule, MatSelectModule],
  templateUrl: './prompt-select.component.html',
  styleUrls: ['./prompt-select.component.scss'],
})
export class PromptSelectComponent {
  prompts: Prompt[] = [];
}
