import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {VideoDetailsComponent} from './pages/video-details/video-details.component';
import {VideoCommentsComponent} from './pages/video-details/video-comments/video-comments.component';
import {ChannelCommentsComponent} from './pages/channel/details/channel-comments/channel-comments.component';
import {ChannelComponent} from './pages/channel/details/channel.component';
import {HomepageComponent} from './pages/homepage/homepage.component';
import {PlaylistsComponent} from './pages/playlists/playlists.component';
import {FavouritesComponent} from "./pages/favourites/favourites.component";
import {ThematicsComponent} from './pages/thematics/thematics.component';
import {NavigationComponent} from './components/navigation/navigation.component';
import {ChannelVideosComponent} from './pages/channel/details/channel-videos/channel-videos.component';
import {HttpClientModule, HttpClient} from "@angular/common/http";
import {PlaylistDetailsComponent} from './pages/playlists/playlist-details/playlist-details.component';
import {ChannelsListComponent} from './pages/channel/list/channels-list.component';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {NgxYoutubePlayerModule} from 'ngx-youtube-player';
import {TagsComponent} from './pages/tags/tags.component';
import {TagVideosComponent} from './pages/tags/tag-videos/tag-videos.component';
import {PlaylistVideosComponent} from './pages/playlists/playlist-videos/playlist-videos.component';
import {SuggestedVideosComponent} from "./pages/video-details/suggested-videos/suggested-videos.component";
import {SuggestedThematicsComponent} from "./pages/homepage/suggested-thematics/suggested-thematics.component";
import {FavouritesVideosComponent} from './pages/favourites/favourites-details/favourites-videos.component';
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {ThematicDetailsComponent} from './pages/thematics/details/thematic-details.component';
import {ThematicVideosComponent} from './pages/thematics/details/thematic-videos/thematic-videos.component';
import {FilterPipe} from './pipe/filter.pipe';
import {YoutubePlayerComponent} from "./pages/video-details/youtube-player/youtube-player.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {SuggestedChannelsComponent} from './pages/homepage/suggested-channels/suggested-channels.component';
import {CategoriesComponent} from './pages/categories//categories.component';
import {CategoryVideosComponent} from './pages/categories/category-videos/category-videos.component';

@NgModule({
  declarations: [
    AppComponent,
    VideoDetailsComponent,
    VideoCommentsComponent,
    ChannelCommentsComponent,
    ChannelComponent,
    HomepageComponent,
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
    SuggestedThematicsComponent,
    FavouritesVideosComponent,
    ThematicDetailsComponent,
    ThematicVideosComponent,
    FilterPipe,
    YoutubePlayerComponent,
    SuggestedChannelsComponent,
    CategoriesComponent,
    CategoryVideosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FontAwesomeModule,
    ReactiveFormsModule,
    FormsModule,
    NgxYoutubePlayerModule.forRoot(),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
    FormsModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})

export class AppModule {
}

export function HttpLoaderFactory(http: HttpClient): TranslateHttpLoader {
  return new TranslateHttpLoader(http);
}
