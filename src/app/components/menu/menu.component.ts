import { Component, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';

declare var AOS: any;

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent implements AfterViewInit {
  currentFilter: string = 'all';

  menuItems = [
    { category: 'starters', name: 'Truffle Scallops', desc: 'Pan-seared scallops with black truffle puree and gold leaf garnish.', price: 28, img: 'https://images.unsplash.com/photo-1467003909585-2f8a72700288?auto=format&fit=crop&q=80&w=800', delay: 0 },
    { category: 'mains', name: 'A5 Wagyu Steak', desc: 'Imported Japanese Wagyu, served with roasted root vegetables and red wine reduction.', price: 120, img: 'https://images.unsplash.com/photo-1600891964092-4316c288032e?auto=format&fit=crop&q=80&w=800', delay: 100 },
    { category: 'desserts', name: 'Gold Lava Cake', desc: 'Dark chocolate molten cake dusted with 24k edible gold flakes.', price: 22, img: 'https://images.unsplash.com/photo-1624353365286-3f8d62daad51?auto=format&fit=crop&q=80&w=800', delay: 200 },
    { category: 'starters', name: 'Seared Foie Gras', desc: 'Served with fig jam and toasted brioche.', price: 35, img: 'https://images.unsplash.com/photo-1514326640560-7d063ef2aed5?auto=format&fit=crop&q=80&w=800', delay: 0 },
    { category: 'mains', name: 'Lobster Thermidor', desc: 'Whole lobster baked with a rich cream and brandy sauce.', price: 95, img: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&q=80&w=800', delay: 100 },
    { category: 'drinks', name: 'The Lumière Elixir', desc: 'Gin, elderflower, champagne, and a touch of gold dust.', price: 25, img: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&q=80&w=800', delay: 200 }
  ];

  setFilter(filter: string) {
    this.currentFilter = filter;
    
    // Retrigger AOS animations manually if possible, or reset classes
    setTimeout(() => {
        if (typeof AOS !== 'undefined') {
            AOS.refreshHard();
        }
    }, 50);
  }

  ngAfterViewInit() {
    if (typeof AOS !== 'undefined') {
      AOS.refreshHard();
    }
  }
}
