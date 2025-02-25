import { Component, ElementRef, AfterViewInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements AfterViewInit {
  @ViewChild('searchInput') searchInput!: ElementRef<HTMLInputElement>;
  @ViewChild('searchButton') searchButton!: ElementRef<HTMLButtonElement>;

  constructor() {}

  ngAfterViewInit(): void {
    this.addSearchFunctionality();
  }

  private addSearchFunctionality(): void {
    const inputElement = this.searchInput.nativeElement;
    const buttonElement = this.searchButton.nativeElement;

    // Focus automatique sur le champ de recherche lors du clic
    buttonElement.addEventListener('click', () => {
      inputElement.focus();
    });

    // Validation de la recherche
    buttonElement.addEventListener('click', () => {
      const query = inputElement.value.trim();
      if (query) {
        alert(`Vous avez recherché : ${query}`);
      } else {
        alert('Veuillez entrer un terme de recherche.');
      }
    });

    // Écouteur pour la touche "Entrée"
    inputElement.addEventListener('keypress', (event: KeyboardEvent) => {
      if (event.key === 'Enter') {
        buttonElement.click();
      }
    });
  }
}