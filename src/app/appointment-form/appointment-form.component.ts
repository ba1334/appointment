import { Component } from '@angular/core';
import { AppointmentService } from '../services/appointment.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-appointment-form',
  templateUrl: './appointment-form.component.html',
  styleUrls: ['./appointment-form.component.css']
})
export class AppointmentFormComponent {
  constructor(private appointmentService: AppointmentService) {}

  createAppointment(form: NgForm): void {
    this.appointmentService.createAppointment(form.value).subscribe(() => {
      form.reset();
    });
  }
}
