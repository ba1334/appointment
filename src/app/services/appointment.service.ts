import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {
  private apiUrl = 'http://localhost:3000/appointments';

  constructor(private http: HttpClient) {}

  getAppointments(): Observable<any> {
    return this.http.get(this.apiUrl);
  }

  createAppointment(appointment: any): Observable<any> {
    return this.http.post(this.apiUrl, appointment);
  }

  updateAppointment(id: string, appointment: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/${id}`, appointment);
  }

  deleteAppointment(id: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
