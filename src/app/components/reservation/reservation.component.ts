import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import emailjs from '@emailjs/browser';

@Component({
  selector: 'app-reservation',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './reservation.component.html',
  styleUrl: './reservation.component.css'
})
export class ReservationComponent {
  isSubmitting = false;
  submitted = false;
  errorMessage = '';
  minDate: string;

  constructor() {
    const today = new Date();
    this.minDate = today.getFullYear() + '-' + String(today.getMonth() + 1).padStart(2, '0') + '-' + String(today.getDate()).padStart(2, '0');
  }

  async onSubmit(event: Event) {
    event.preventDefault();
    const form = event.target as HTMLFormElement;
    this.errorMessage = '';
    
    if (!form.checkValidity()) {
      form.classList.add('was-validated');
      return;
    }

    const dateInput = (form.querySelector('#date') as HTMLInputElement).value;
    const timeInput = (form.querySelector('#time') as HTMLInputElement).value;
    
    if (dateInput && timeInput) {
      const selectedDateTime = new Date(`${dateInput}T${timeInput}`);
      if (selectedDateTime <= new Date()) {
        this.errorMessage = 'Please select a future date and time for your reservation.';
        return;
      }
    }

    this.isSubmitting = true;

    this.isSubmitting = true;

    try {
      // Simulate network request for now
      await new Promise(resolve => setTimeout(resolve, 1500));
      this.submitted = true;
      form.reset();
      form.classList.remove('was-validated');

      // Auto-close success message after 2 seconds
      setTimeout(() => {
        this.submitted = false;
      }, 2000);

    } catch (error) {
      console.error('FAILED...', error);
      this.errorMessage = 'Failed to send reservation request. Please try again later.';
    } finally {
      this.isSubmitting = false;
    }
  }
}
