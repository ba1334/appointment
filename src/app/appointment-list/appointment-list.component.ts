import { Component, OnInit } from '@angular/core';
import { AppointmentService } from '../services/appointment.service';

@Component({
  selector: 'app-appointment-list',
  templateUrl: './appointment-list.component.html',
  styleUrls: ['./appointment-list.component.css']
})
export class AppointmentListComponent implements OnInit {
  appointments: any[] = [];

  constructor(private appointmentService: AppointmentService) {}

  ngOnInit(): void {
    this.appointmentService.getAppointments().subscribe(data => {
      this.appointments = data;
    });
  }

  deleteAppointment(id: string): void {
    this.appointmentService.deleteAppointment(id).subscribe(() => {
      this.appointments = this.appointments.filter(appointment => appointment._id !== id);
    });
  }
}
