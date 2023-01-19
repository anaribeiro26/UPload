import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {UPloadService} from "../../../services/UPload.service";
import {VideoDetails} from "../../../services/UPload.model";
import {faThumbsDown, faThumbsUp} from "@fortawesome/free-regular-svg-icons";
import {
  faFlag,
  faThumbsDown as faThumbsDownSolid,
  faThumbsUp as faThumbsUpSolid,
} from "@fortawesome/free-solid-svg-icons";



//@ts-ignore

@Component({
  selector: 'app-video-page',
  templateUrl: './video-details.component.html',
  styleUrls: ['./video-details.component.scss']
})
export class VideoDetailsComponent implements OnInit {

  video: VideoDetails | undefined;
  image_url = "https://dev-project-upskill-grupo05.pantheonsite.io";
  faThumbsUp = faThumbsUp;
  faThumbsDown = faThumbsDown;
  faThumbsDownSolid = faThumbsDownSolid;
  faThumbsUpSolid = faThumbsUpSolid;
  faFlag = faFlag;

  constructor(private route: ActivatedRoute, private UPload: UPloadService) {
  }

  ngOnInit(): void {
    let result = 4 + 5 + "1";
    console.log(result);

    // const id = this.route.snapshot.params["id"];
    this.route.params.subscribe((params) => {
      let id = params['id'];
    this.UPload.getVideoDetails(id).subscribe((video) => {
      this.video = video[0];

        let word = this.video.date.split(" ");
        if(word.length > 2) {
          this.video.date = `${word[0]} ${word[1]} e ${word[2]} ${word[3]}`
        }


      this.UPload.getNumberOfLikes(id).subscribe( (counters) => {
        if (counters.length == 0) {
          video[0].likes = "0"
        } else {
          video[0].likes = counters[0].count;
        }
      })

      this.UPload.getNumberOfDislikes(id).subscribe( (counters) => {
        if (counters.length == 0) {
          video[0].dislikes = "0"
        } else {
          video[0].dislikes = counters[0].count;
        }
      })
    })});

  }

  getYoutubeId(youTubeURL: string) {
    let videoID = youTubeURL.split("https://www.youtube.com/watch?v=");
    return videoID[1];
  }

  handleLike() {
    const isLiked = this.isLiked()

    if (isLiked) {
      const likeId = this.getLikeId();

      if (likeId !== undefined && this.video !== undefined) {
        this.UPload.removeLikeOrDislike(likeId).subscribe();
        localStorage.setItem(`isLiked${this.video.id}`, "false");

        if (this.video.likes !== undefined) {
          this.video.likes = (parseInt(this.video.likes) - 1).toString();
        } else {
          this.video.likes = "0";
        }
      }
    } else {
      const isDisliked = this.isDisliked()

      if (!isDisliked) {
        if (this.video !== undefined) {
          this.UPload.likeVideo(this.video.id).subscribe( (response) => {
            if (this.video !== undefined) {
              localStorage.setItem(`isLiked${this.video.id}`, "true");
              localStorage.setItem(`likeId${this.video.id}`, response.id[0].value)

              if (this.video.likes !== undefined) {
                this.video.likes = (parseInt(this.video.likes) + 1).toString();
              } else {
                this.video.likes = "0";
              }
            }
          })
        }
      }
    }
  }

  handleDislike() {
    const isDisliked = this.isDisliked()

    if (isDisliked) {
      const dislikeId = this.getDislikeId()

      if (dislikeId !== undefined && this.video !== undefined) {
        this.UPload.removeLikeOrDislike(dislikeId).subscribe();
        localStorage.setItem(`isDisliked${this.video.id}`, "false");

        if (this.video.dislikes !== undefined) {
          this.video.dislikes = (parseInt(this.video.dislikes) - 1).toString();
        } else {
          this.video.dislikes = "0";
        }
      }
    } else {
      const isLiked = this.isLiked()

      if (!isLiked) {
        if (this.video !== undefined) {
          this.UPload.dislikeVideo(this.video.id).subscribe( (response) => {
            if (this.video !== undefined) {
              localStorage.setItem(`isDisliked${this.video.id}`, "true");
              localStorage.setItem(`dislikeId${this.video.id}`, response.id[0].value)

              if (this.video.dislikes !== undefined) {
                this.video.dislikes = (parseInt(this.video.dislikes) + 1).toString();
              } else {
                this.video.dislikes = "0";
              }
            }
          })
        }
      }
    }
  }


  isLiked(): boolean {
    if (this.video !== undefined) {
      const value = localStorage.getItem(`isLiked${this.video.id}`) || "false";
      return JSON.parse(value)
    } else {
      return false;
    }
  }

  getLikeId(): number | undefined {
    if (this.video !== undefined) {
      const likeId = localStorage.getItem(`likeId${this.video.id}`)

      if (likeId !== null) {
        return JSON.parse(likeId);
      } else {
        return undefined;
      }
    } else {
      return undefined;
    }
  }

  isDisliked(): boolean {
    if (this.video !== undefined) {
      const value = localStorage.getItem(`isDisliked${this.video.id}`) || "false";
      return JSON.parse(value)
    } else {
      return false;
    }
  }

  getDislikeId(): number {
    if (this.video !== undefined) {
      return JSON.parse(localStorage.getItem(`dislikeId${this.video.id}`) || "-1");
    } else {
      return -1;
    }
  }
}







