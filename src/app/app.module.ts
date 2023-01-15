import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {VideoDetailsComponent} from './pages/home-page/video-details/video-details.component';
import {VideoCommentsComponent} from './pages/home-page/video-details/video-comments/video-comments.component';
import {ChannelCommentsComponent} from './pages/channel/page/channel-comments/channel-comments.component';
import {ChannelComponent} from './pages/channel/page/details/channel.component';
import {HomePageComponent} from './pages/home-page/home-page.component';
import {PlaylistsComponent} from './pages/playlists/playlists.component';
import {FavouritesComponent} from "./pages/favourites/favourites.component";
import {ThematicsComponent} from './pages/thematics/thematics-list/thematics.component';
import {NavigationComponent} from './components/navigation/navigation.component';
import {ChannelVideosComponent} from './pages/channel/page/channel-videos/channel-videos.component';
import {HttpClientModule, HttpClient} from "@angular/common/http";
import {PlaylistDetailsComponent} from './pages/playlists/playlist-details/playlist-details.component';
import {ChannelsListComponent} from './pages/channel/list/channels-list.component';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {NgxYoutubePlayerModule} from 'ngx-youtube-player';
import {TagsComponent} from './pages/tags/tags.component';
import {TagVideosComponent} from './pages/tags/tag-videos/tag-videos.component';
import {PlaylistVideosComponent} from './pages/playlists/playlist-videos/playlist-videos.component';
import {SuggestedVideosComponent} from "./pages/home-page/video-details/suggested-videos/suggested-videos.component";
import {SuggestionsComponent} from "./pages/home-page/suggestions/suggestions.component";
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import { ThematicDetailsComponent } from './pages/thematics/thematic-details/thematic-details/thematic-details.component';


@NgModule({
  declarations: [
    AppComponent,
    VideoDetailsComponent,
    VideoCommentsComponent,
    ChannelCommentsComponent,
    ChannelComponent,
    HomePageComponent,
    PlaylistsComponent,
    FavouritesComponent,
    ThematicsComponent,
    NavigationComponent,
    ChannelVideosComponent,
    PlaylistDetailsComponent,
    ChannelsListComponent,
    TagsComponent,
    TagVideosComponent,
    PlaylistVideosComponent,
    SuggestedVideosComponent,
    SuggestionsComponent,
    ThematicDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FontAwesomeModule,
    NgxYoutubePlayerModule.forRoot(),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}

// required for AOT compilation
export function HttpLoaderFactory(http: HttpClient): TranslateHttpLoader {
  return new TranslateHttpLoader(http);
}
