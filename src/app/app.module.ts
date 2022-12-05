import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VideoDetailsComponent } from './pages/video-details/video-details.component';
import { CommentsComponent } from './pages/video-details/comments/comments.component';
import { ChannelComponent } from './pages/channel/channel.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { PlaylistsComponent } from './pages/playlists/playlists.component';
import { FavouritesComponent } from './pages/favourites/favourites.component';
import { ThemesComponent } from './pages/themes/themes.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { ChannelVideosComponent } from './pages/channel/channel-videos/channel-videos.component';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome'

@NgModule({
  declarations: [
    AppComponent,
    VideoDetailsComponent,
    CommentsComponent,
    ChannelComponent,
    HomePageComponent,
    PlaylistsComponent,
    FavouritesComponent,
    ThemesComponent,
    NavigationComponent,
    ChannelVideosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
