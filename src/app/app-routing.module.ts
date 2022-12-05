import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ArticlesComponent} from "./pages/articles/articles.component";
import {ChannelComponent} from "./pages/channel/channel.component";
import {FavouritesComponent} from "./pages/favourites/favourites.component";
import {HomePageComponent} from "./pages/home-page/home-page.component";
import {PlaylistsComponent} from "./pages/playlists/playlists.component";
import {VideoDetailsComponent} from "./pages/video-details/video-details.component";

const routes: Routes = [
  {path: '', redirectTo: '/homepage', pathMatch: 'full'},
  {path: 'homepage', component: HomePageComponent},
  {path: 'videos/:title', component: VideoDetailsComponent},
  {path: 'channels', component: ChannelComponent},
  {path: 'favourites', component: FavouritesComponent},
  {path: 'playlists', component: PlaylistsComponent},
  {path: 'articles', component: ArticlesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
