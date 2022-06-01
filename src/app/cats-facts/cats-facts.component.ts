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
  maxFacts: number = 90;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    for (let i = 0; i < 15; i++) {
      this.fetchFact().subscribe(({ data }: any) => {
        if (!this.checkIfAlreadyFetched(data)) this.addFactToFactArr(data);
      });
    }
  }

  onScroll() {
    this.fetchFact().subscribe(({ data }: any) => {
      if (this.checkIfMaxFacts()) return;
      if (!this.checkIfAlreadyFetched(data)) {
        this.addFactToFactArr(data);
        return;
      }
      this.onScroll();
    });
  }

  fetchFact(): Observable<{}> {
    return this.http.get(this.apiUrl);
  }

  checkIfAlreadyFetched(data: any): boolean {
    return this.facts.includes(data[0]);
  }

  addFactToFactArr(data: any) {
    this.facts.push(data[0]);
  }

  checkIfMaxFacts(): boolean {
    return this.facts.length === this.maxFacts;
  }
}
