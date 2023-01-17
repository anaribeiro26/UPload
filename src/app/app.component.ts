import { Component } from '@angular/core';
import {FormsModule} from "@angular/forms";
import {TranslateService} from "@ngx-translate/core";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'UpLoad';
  selectLang: string = "";
  TransLang: string[] = [];

//favorites: any = [];

constructor(public translate: TranslateService, public form: FormsModule) {
  translate.setDefaultLang("pt");
  translate.addLangs(["en", "pt"]);
  translate.use("pt");
}

setTransLanguage(){
  this.translate.use(this.selectLang);
}
getTransLanguage(){
  this.TransLang=this.translate.getLangs();
}
ngOnInit(){
  this.getTransLanguage();
}
    //  let browserLang = translate.getBrowserLang();
    // // translate.use(browserLang.match(/pt|en/) ? browserLang : 'pt');
    //}
    //changeLang(lang: any){
    //  this.translate.use(lang);
    //}
    //getCurrentLang(){
    //  console.log('browser lang', this.translate.getBrowserLang());
    //  console.log('browser lang', this.translate.currentLang);
    //}
}
