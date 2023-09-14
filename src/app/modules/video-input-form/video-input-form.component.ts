import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';

type Status = 'waiting' | 'converting' | 'uploading' | 'generating' | 'success';

@Component({
  selector: 'VideoInputForm',
  standalone: true,
  imports: [CommonModule, MatDividerModule, MatIconModule],
  templateUrl: './video-input-form.component.html',
  styleUrls: ['./video-input-form.component.scss'],
})
export class VideoInputFormComponent {
  previewURL: Boolean = false;
  status: Status = 'waiting';

  statusMessages: { [x: string]: string } = {
    converting: 'Convertendo...',
    generating: 'Transcrevendo...',
    uploading: 'Carregando...',
    success: 'Sucesso!',
  };

  handleFileSelected(event: any) {}
}
