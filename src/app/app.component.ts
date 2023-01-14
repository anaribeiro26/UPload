import { Component } from '@angular/core';
import {TranslateService} from "@ngx-translate/core";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'UpLoad';
  //favorites: any = [];

  constructor(public translate: TranslateService) {
    translate.addLangs(["en", "pt"]);
    translate.setDefaultLang('pt');
   // translate.use('pt');

    let browserLang = translate.getBrowserLang();
   // translate.use(browserLang.match(/pt|en/) ? browserLang : 'pt');
  }
  changeLang(lang: any){
    this.translate.use(lang);
  }
  getCurrentLang(){
    console.log('browser lang', this.translate.getBrowserLang());
    console.log('browser lang', this.translate.currentLang);
  }
}
