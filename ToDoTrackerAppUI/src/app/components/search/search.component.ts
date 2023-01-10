import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  searchText:string = "";
  
  constructor() { }

  ngOnInit(): void {
  }
  @Output()
   searchs:EventEmitter<string> = new EventEmitter<string>();


   search(){
    this.searchs.emit(this.searchText)
   }
}
