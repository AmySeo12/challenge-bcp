import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {
  @Input() title: string = '';
  @Input() searchVisible: boolean = true;
  @Output() onSearch: EventEmitter<string> = new EventEmitter();
  search = new FormControl('');
  private destroy: Subject<void> = new Subject();
  showCabecera = true;

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
    this.search.valueChanges.pipe(
      debounceTime(500),
      takeUntil(this.destroy),
      distinctUntilChanged()
    ).subscribe((value: string) => {
      this.onSearch.emit(value);
    });
  }

  ngOnDestroy(): void {
    this.destroy.next();
    this.destroy.complete();
  }

  close() {
    this.router.navigate([`/`]);
  }

  closeSearch() {
    this.onSearch.emit('');
    this.showCabecera = true;
  }

}
