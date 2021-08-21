import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  public searchText: string = '';

  public filteredArr: string[] = [];

  public vege(newVege: string[]): void {
    this.arr = newVege;
  }
  public filter(p: any): void {
    console.log(p);
    if (this.searchText.length == 1) {
      for (let e of this.arr) {
        if (e.startsWith(this.searchText)) {
          this.filteredArr.push(e);
        }
      }
    }
  }
  public arr: string[] = [
    'artichoke',
    'aubergine',
    'amrud',
    'asparagus',
    'legumes',
    'alfalfa sprouts',
    'azuki beans',
    'bean sprouts',
    'black beans',
    'black-eyed peas',
    'borlotti bean',
    'broad beans',
    'chickpeas',
    'green beans',
    'kidney beans',
    'lentils',
    'lima beans',
    'mung beans',
    'navy beans',
    'pinto beans',
    'runner beans',
    'split peas',
    'soy beans',
    'peas',
    'mangetout',
    'broccoflower',
    'broccoli',
    'brussels',
    'cabbage',
    'kohlrabi',
    'cauliflower',
    'celery',
    'endive',
    'fiddleheads',
    'frisee',
    'fennel',
    'greens',
    'beet greens',
    'bok choy',
    'chard',
    'collard greens',
    'kale',
    'mustard greens',
    'spinach',
    'herbs',
    'anise',
    'basil',
    'caraway',
    'cilantro',
    'coriander',
    'chamomile',
    'dill',
    'fennel',
    'lavender',
    'lemon Grass',
    'marjoram',
  ];
}
