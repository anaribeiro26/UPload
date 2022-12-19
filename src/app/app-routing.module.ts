import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ArticlesComponent} from "./pages/articles/articles.component";
import {ChannelComponent} from "./pages/channel/channel.component";
import {FavouritesComponent} from "./pages/favourites/favourites.component";
import {HomePageComponent} from "./pages/home-page/home-page.component";
import {PlaylistsComponent} from "./pages/playlists/playlists.component";
import {VideoDetailsComponent} from "./pages/home-page/video-details/video-details.component";
import {ChannelsListComponent} from "./pages/channel/channels-list/channels-list.component";
import {TagsComponent} from "./pages/articles/tags/tags.component";

const routes: Routes = [
  {path: '', redirectTo: '/homepage', pathMatch: 'full'},
  {path: 'homepage', component: HomePageComponent},
  {path: 'video/:id', component: VideoDetailsComponent},
  {path: 'channels', component: ChannelsListComponent},
  {path: 'channels/:id', component: ChannelComponent},
  {path: 'favourites', component: FavouritesComponent},
  {path: 'playlists', component: PlaylistsComponent},
  {path: 'articles', component: ArticlesComponent},
  {path: 'tags/:id', component: TagsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
