import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { TranslocoPipe } from '@ngneat/transloco';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ReactiveFormsModule, TranslocoPipe],
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
})
export class Contact {
  readonly toEmail = 'shop@reimii.com';
}
