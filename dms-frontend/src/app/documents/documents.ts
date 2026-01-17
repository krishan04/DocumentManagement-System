import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-documents',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './documents.html'
})
export class Documents implements OnInit {
  docs: any[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get<any[]>('http://localhost:5001/api/documents')
      .subscribe({
        next: (data) => {
          console.log('Documents from backend:', data);
          this.docs = data;
        },
        error: (err) => {
          console.error('Error fetching documents', err);
        }
      });
  }
}