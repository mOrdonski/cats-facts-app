import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-cats-facts',
  templateUrl: './cats-facts.component.html',
  styleUrls: ['./cats-facts.component.scss'],
})
export class CatsFactsComponent implements OnInit {
  facts: string[] = [];
  apiUrl: string = 'https://meowfacts.herokuapp.com/';

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    for (let i = 0; i < 15; i++) {
      this.fetchFact().subscribe(({ data }: any) => {
        if (!this.facts.includes(data[0])) this.facts.push(data[0]);
      });
    }
  }

  onScroll() {
    console.log('scrolled!!');
  }

  fetchFact(): Observable<{}> {
    return this.http.get(this.apiUrl);
  }
}
