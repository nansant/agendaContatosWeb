import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private isDarkMode = new BehaviorSubject<boolean>(localStorage.getItem('theme') === 'dark');
  isDarkMode$ = this.isDarkMode.asObservable();

  constructor() {
    this.applyTheme(this.isDarkMode.value);
  }

  toggleTheme(): void {
    const newTheme = !this.isDarkMode.value;
    this.isDarkMode.next(newTheme);
    localStorage.setItem('theme', newTheme ? 'dark' : 'light');
    this.applyTheme(newTheme);
  }

  private applyTheme(isDark: boolean): void {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }
}
