import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ThematicsComponent} from "./pages/thematics/thematics.component";
import {ChannelComponent} from "./pages/channel/details/channel.component";
import {HomepageComponent} from "./pages/homepage/homepage.component";
import {PlaylistsComponent} from "./pages/playlists/playlists.component";
import {VideoDetailsComponent} from "./pages/video-details/video-details.component";
import {ChannelsListComponent} from "./pages/channel/list/channels-list.component";
import {TagsComponent} from "./pages/tags/tags.component";
import {PlaylistDetailsComponent} from "./pages/playlists/playlist-details/playlist-details.component";
import {FavouritesVideosComponent} from "./pages/favourites/favourites-details/favourites-videos.component";
import {ThematicDetailsComponent} from "./pages/thematics/details/thematic-details.component";
import {CategoriesComponent} from "./pages/categories/categories.component";

const routes: Routes = [
  {path: '', redirectTo: '/homepage', pathMatch: 'full'},
  {path: 'thematics', component: ThematicsComponent},
  {path: 'thematic/:title', component: ThematicDetailsComponent},
  {path: 'channels', component: ChannelsListComponent},
  {path: 'channel/:title', component: ChannelComponent},
  {path: 'homepage', component: HomepageComponent},
  {path: 'video/:title', component: VideoDetailsComponent},
  {path: 'playlist/favourites', component: FavouritesVideosComponent},
  {path: 'playlists', component: PlaylistsComponent},
  {path: 'playlist/:title', component: PlaylistDetailsComponent},
  {path: 'tags/:name', component: TagsComponent},
  {path: 'category/:name', component: CategoriesComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
