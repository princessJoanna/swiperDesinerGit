<template>
<div>

    <swiper :options="swiperOption">
         <swiper-slide>
             <video-player  class="video-player-box vjs-big-play-centered"
                ref="videoPlayer"
                :options="playerOptionsPrev"
             
           
              >
            </video-player>
         </swiper-slide>
        <swiper-slide>
            <video-player  class="video-player-box vjs-big-play-centered"
                ref="videoPlayer"
                :options="playerOptions"
                :playsinline="true"
                @play="onPlayerPlay($event)"
                @pause="onPlayerPause($event)"
                @ended="onPlayerEnded($event)"
                @playing="onPlayerPlaying($event)">
            </video-player>
        </swiper-slide>
        <swiper-slide>
             <!-- <video-player  class="video-player-box vjs-big-play-centered"
                ref="videoPlayer"
                :options="playerOptionsNext"
                :playsinline="true"
                @play="onPlayerPlay($event)"
              >
            </video-player> -->
            
         </swiper-slide>
        
       
        <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
</div>
 
</template>

<script>
import '../../static/swiper.min.css'
import 'video.js/dist/video-js.css'
var vm=null;
export default {
    data() {
      
        return {
            swiperOption: {
                pagination: '.swiper-pagination',
                paginationClickable: true,
                initialSlide :1,
                onTransitionStart(swiper) {
                    debugger
                    console.log(swiper)
                },
                 onTouchEnd(swiper) {
                     var id=vm.$route.params.id;
                     if(swiper.activeIndex==1){
                          vm.$router.push({path:id+1});
                    
                     }
                       vm.$router.push({path:id-1});
                   
                   
                     
                },
            },
            playerOptions: {
                // videojs options
                muted: true,
                "autoplay":true,
                sources: [{
                    type: "video/mp4",
                    src: "http://os5lxzkas.bkt.clouddn.com/hua80.m4v"
                }],
                poster: "http://ovfllimsi.bkt.clouddn.com/videoBgHead.png",
            },
             playerOptionsNext: {
                // videojs options
                muted: true,
                sources: [{
                    type: "video/mp4",
                    src: "http://os5lxzkas.bkt.clouddn.com/hua80.m4v"
                }],
                poster: "http://ovfllimsi.bkt.clouddn.com/videoBgHead.png",
            },
            playerOptionsPrev: {
                // videojs options
                muted: true,

                sources: [{
                    type: "video/mp4",
                    src: "http://os5lxzkas.bkt.clouddn.com/hua80.m4v"
                }],
                poster: "http://ovfllimsi.bkt.clouddn.com/videoBgHead.png",
            },
            
        }
    },

    mounted() {
         this.setVm();

    },
    computed: {
       
        player() {
            return this.$refs.videoPlayer.player
        }
    },
    methods: {
        setVm(){
           vm=this;

        },
      // listen event
      onPlayerPlay(player) {
        // console.log('player play!', player)
      },
      onPlayerPause(player) {
        // console.log('player pause!', player)
      },
      // ...player event

      // or listen state event
      onPlayerEnded(playerCurrentState) {
        // console.log('player current update state', playerCurrentState)
      },
       onPlayerPlaying(playerCurrentState) {
        // console.log('player current update state', playerCurrentState)
      },

   
    }
}
</script>
<style>
.video-js {
    width:100%;
}
.imgWrap img {
    width:100%;
}
</style>
