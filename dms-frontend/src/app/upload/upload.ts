import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-upload',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './upload.html'
})
export class Upload {
  title = '';
  tags = '';
  file: File | null = null;

  constructor(private http: HttpClient) {}

  onFile(event: any) {
    this.file = event.target.files[0];
  }

  upload() {
    if (!this.file) {
      alert('Select a file');
      return;
    }

    const formData = new FormData();
    formData.append('title', this.title);
    formData.append('tags', this.tags);
    formData.append('owner', 'krishan');
    formData.append('file', this.file);

    this.http.post('http://localhost:5001/api/documents/upload', formData)
      .subscribe(() => alert('Document uploaded'));
  }
}