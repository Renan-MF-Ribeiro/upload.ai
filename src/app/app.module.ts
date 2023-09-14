import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LucideAngularModule, Github, Wand2, FileVideo } from 'lucide-angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { VideoInputFormComponent } from './modules/video-input-form/video-input-form.component';
import { MatDividerModule } from '@angular/material/divider';
import { PromptSelectComponent } from './modules/prompt-select/prompt-select.component';
import { MatSelectModule } from '@angular/material/select';
import { MatSliderModule } from '@angular/material/slider';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    LucideAngularModule.pick({ Github, Wand2, FileVideo }),
    BrowserAnimationsModule,
    VideoInputFormComponent,
    MatDividerModule,
    PromptSelectComponent,
    MatSelectModule,
    MatSliderModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
