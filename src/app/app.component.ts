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
  //selectLang: string = ""
  //TransLang: any[] = [];
  lang: any;
 // TransLang: string[] = [];
//favorites: any = [];

constructor(public translate: TranslateService, public form: FormsModule) {
  translate.setDefaultLang("pt");
  translate.addLangs(["en", "pt"]);
  translate.use(localStorage.getItem('lang') || 'pt');
}

setTransLanguage(lang: any){
localStorage.setItem('lang', lang);
window.location.reload();

}

//getTransLanguage(){
  //this.TransLang=[...this.translate.getLangs()];
  //this.TransLang=this.translate.getLangs();
//}
ngOnInit(){
 // this.getTransLanguage();
  this.lang = localStorage.getItem('lang') || 'pt';
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
