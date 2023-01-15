import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {VideoDetailsComponent} from './pages/home-page/video-details/video-details.component';
import {VideoCommentsComponent} from './pages/home-page/video-details/video-comments/video-comments.component';
import {ChannelCommentsComponent} from './pages/channel/channel-comments/channel-comments.component';
import {ChannelComponent} from './pages/channel/channel.component';
import {HomePageComponent} from './pages/home-page/home-page.component';
import {PlaylistsComponent} from './pages/playlists/playlists.component';
import {FavouritesComponent} from "./pages/favourites/favourites.component";
import {ArticlesComponent} from './pages/articles/articles.component';
import {NavigationComponent} from './components/navigation/navigation.component';
import {ChannelVideosComponent} from './pages/channel/channel-videos/channel-videos.component';
import {HttpClientModule} from "@angular/common/http";
import {PlaylistDetailsComponent} from './pages/playlists/playlist-details/playlist-details.component';
import {ChannelsListComponent} from './pages/channel/channels-list/channels-list.component';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {NgxYoutubePlayerModule} from 'ngx-youtube-player';
import {TagsComponent} from './pages/tags/tags.component';
import {TagsVideosComponent} from './pages/tags/tags-videos/tags-videos.component';
import {PlaylistVideosComponent} from './pages/playlists/playlist-videos/playlist-videos.component';
import {SuggestedVideosComponent} from "./pages/home-page/video-details/suggested-videos/suggested-videos.component";
import {SuggestionsComponent} from "./pages/home-page/suggestions/suggestions.component";
import { FavouritesVideosComponent } from './pages/favourites/favourites-videos/favourites-videos.component';

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
    ArticlesComponent,
    NavigationComponent,
    ChannelVideosComponent,
    PlaylistDetailsComponent,
    ChannelsListComponent,
    TagsComponent,
    TagsVideosComponent,
    PlaylistVideosComponent,
    SuggestedVideosComponent,
    SuggestionsComponent,
    FavouritesVideosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FontAwesomeModule,
    NgxYoutubePlayerModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
