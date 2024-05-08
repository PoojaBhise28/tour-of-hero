import { Input ,Component, OnInit } from '@angular/core';
import {Hero} from '../hero';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {
onSelect(_t6: any) {
throw new Error('Method not implemented.');
}
  @Input() hero?: Hero;
heroes: any;
selectedHero: any;
  constructor() { }

  ngOnInit(): void {
  }

}
