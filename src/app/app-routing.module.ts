import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ThematicsComponent} from "./pages/thematics/list/thematics.component";
import {ChannelComponent} from "./pages/channel/page/details/channel.component";
import {FavouritesComponent} from "./pages/favourites/favourites.component";
import {HomePageComponent} from "./pages/home-page/home-page.component";
import {PlaylistsComponent} from "./pages/playlists/playlists.component";
import {VideoDetailsComponent} from "./pages/home-page/video-details/video-details.component";
import {ChannelsListComponent} from "./pages/channel/list/channels-list.component";
import {TagsComponent} from "./pages/tags/tags.component";
import {PlaylistDetailsComponent} from "./pages/playlists/playlist-details/playlist-details.component";
import {ThematicDetailsComponent} from "./pages/thematics/page/thematic-details/thematic-details.component";

const routes: Routes = [
  {path: '', redirectTo: '/homepage', pathMatch: 'full'},
  {path: 'thematics', component: ThematicsComponent},
  {path: 'thematics/:title'.replace(' ', ''), component: ThematicDetailsComponent},
  {path: 'channels', component: ChannelsListComponent},
  {path: 'channel/:id', component: ChannelComponent},
  {path: 'homepage', component: HomePageComponent},
  {path: 'video/:id', component: VideoDetailsComponent},
  {path: 'favourites', component: FavouritesComponent},
  {path: 'playlists', component: PlaylistsComponent},
  {path: 'playlists/:id', component: PlaylistDetailsComponent},
  {path: 'tags/:name', component: TagsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
