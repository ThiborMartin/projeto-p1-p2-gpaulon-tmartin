import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FormsModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  constructor(private router: Router) {}
  
  title = 'projeto-p1-p2-gpaulon-tmartin';
  public termoBusca: string = "";

  public buscar(){
    if (this.termoBusca.trim()) {
      this.router.navigate(['/busca'], { queryParams: { q: this.termoBusca } });
    }
  }
}
