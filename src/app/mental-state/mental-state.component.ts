import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { MentalStateResponse } from 'core/models/MentalStateResponse';

@Component({
  selector: 'app-mental-state',
  templateUrl: './mental-state.component.html',
  styleUrls: ['./mental-state.component.css']
})
export class MentalStateComponent {
  etudiant: string = '';
  emotion: string = '';
  sommeil: string = '';
  concentration: string = '';

  constructor(private http: HttpClient) {}

  envoyer() {
    const data: MentalStateResponse = {
      etudiant: this.etudiant,
      emotion: this.emotion,
      sommeil: this.sommeil,
      concentration: this.concentration
    };

    this.http.post('http://localhost:8080/api/mental-state', data).subscribe({
      next: res => alert('Réponse enregistrée avec succès !'),
      error: err => console.error('Erreur d\'envoi', err)
    });
  }
}
