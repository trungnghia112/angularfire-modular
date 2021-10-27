/*
import { Injectable } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRouteSnapshot } from '@angular/router';
import { environment } from '@env/environment';
import { TranslateService } from '@ngx-translate/core';
import { BehaviorSubject } from 'rxjs';
import { distinctUntilChanged, filter } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TitleService {
  private titleSubject = new BehaviorSubject<any>({} as any);
  public title$ = this.titleSubject.asObservable().pipe(distinctUntilChanged());

  constructor(private translateService: TranslateService,
              private title: Title) {
  }

  setMetaTitle(snapshot: ActivatedRouteSnapshot,
               lazyTranslateService?: TranslateService) {
    let lastChild = snapshot;
    while (lastChild.children.length) {
      lastChild = lastChild.children[0];
    }
    const { title } = lastChild.data;
    const translate = lazyTranslateService || this.translateService;
    if (title) {
      translate
        .get(title)
        .pipe(filter(translatedTitle => translatedTitle !== title))
        .subscribe(translatedTitle => {
            this.title.setTitle(`${translatedTitle} - ${environment.appName}`);
            this.titleSubject.next(translatedTitle);
          }
        );
    } else {
      this.title.setTitle(environment.appName);
      this.titleSubject.next(null);
    }
  }
}
*/
