import { Component } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css'
})
export class PortfolioComponent {

}


// script.ts

function openLightbox(imageSrc: string): void {
  const lightbox = document.getElementById('lightbox') as HTMLDivElement;
  const lightboxContent = document.getElementById('lightbox-content') as HTMLImageElement;
  
  lightbox.style.display = 'flex';
  lightboxContent.src = imageSrc;
}

function closeLightbox(event: MouseEvent): void {
  const lightbox = document.getElementById('lightbox') as HTMLDivElement;

  // Close the lightbox if the close button is clicked or if the background (lightbox) is clicked
  if (event.target === lightbox || (event.target as HTMLElement).classList.contains('close')) {
      lightbox.style.display = 'none';
  }
}

