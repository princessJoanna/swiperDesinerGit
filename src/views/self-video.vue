<template>
    <div>
        <swiper :options="swiperOption">
            <swiper-slide>
            </swiper-slide>
            <swiper-slide>
                <div id="self-wrap" class="slef-wrap">
                    <video-player class="video-player-box vjs-big-play-centered hide" ref="videoPlayer" :options="playerOptions" :playsinline="false" @play="onPlayerPlay($event)" @pause="onPlayerPause($event)" @ended="onPlayerEnded($event)">
                    </video-player>

                    <div class="slef-background hasTips" id="slef-background">
                        <img src="http://ovfllimsi.bkt.clouddn.com/selfBg.png" @click="videoPlay">
                        <div class="playerButton">
                            <div class="playerBtn" @click="videoPlay">
                                <!-- <img src="../../static/images/video.png"> -->
                            </div>

                        </div>

                        <div class="memo">
                            <div class="cont">
                                <p class="name">个人信息</p>

                                <p class="brief">过去的几年里，我从事大量 中小体量的旧体建筑软装设计及相关改造项目 如精品酒店，文创园区，创意办公等 对如何创造性营建具有时代性的“在地空间” 如何将设计与商业、与社会公益结合积累了大量经验
                                </p>
                            </div>
                        </div>
                    </div>

                </div>
            </swiper-slide>
            <swiper-slide>
            </swiper-slide>

            <!-- <div class="swiper-pagination" slot="pagination"></div> -->
        </swiper>
    </div>
</template>
<style>
html {
    font-size: 100px;
}




.hide {
    display: none;
}

body {
    font-size: 14px;
}

.imgWrap img {
    width: 100%;
}

html,
body {
    position: relative;
    height: 100%;
}

.slef-wrap {
    position: relative;
    width: 100%;
}

.zoom-wrap,
.video-js {
    width: 100%;
}

.playerButton {
    position: absolute;
    width: 100%;
    top: 46%;
    left: 0%;
    z-index: 999;
}

.playerButton .playerBtn {

    width: .6rem;
    margin: 0 auto;
    background: url('../../static/images/video.png');
    background-size: 100% 100%;
    height: .6rem;
}

body {

    font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
    font-size: 14px;
    color: #000;
    margin: 0;
    padding: 0;
}

.swiper-container {
    width: 100%;
    height: 100%;
}

.swiper-slide {
    text-align: center;
    font-size: 18px;
    background: #fff;
    /* Center slide text vertically */
    display: -webkit-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    -webkit-justify-content: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    -webkit-align-items: center;
    align-items: center;
}


.slef-background {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 22;
}

.slef-background img {
    width: 100%;
}

.hasTips .memo {
    position: absolute;
    width: 100%;
    height: 2rem;
    bottom: 0;
    color: #fff;
    text-align: left;
}

.hasTips .memo p {
    margin: .1rem 0 0 .2rem;
    line-height: 1.5em;
    font-size: 14px;
}

.hasTips .memo .name {
    font-size: 24px;
}

.hasTips .score {
    width: .6rem;
    padding-left: .2rem;
}

.hasTips .score img {
    width: 100%;
}

.zoomBg .wrap img {
    width: 100%;
}

.swiper-slide {
    background: #000;
}
</style>
<script>
import '../../static/swiper.min.css'
import 'video.js/dist/video-js.css'
var vm = null;
export default {
    data() {

        return {
            swiperOption: {
                pagination: '.swiper-pagination',
                // paginationClickable: true,
                direction: 'vertical',
                height:document.body.clientHeight,
                initialSlide: 1,
                onTransitionStart(swiper) {

                    console.log(swiper)
                },
                onSlideChangeEnd(swiper, event) {
                    var id = vm.$route.params.desiner_id;
                    if (swiper.activeIndex == 0) {

                        vm.$router.push({ path: '/Zoom/desiner/' + id });
                        return
                    } else if (swiper.activeIndex == 2) {
                        vm.$router.push({ path: '/caseSwiper/desiner/' + id });
                    }



                },
         
            },
            playerOptions: {
                // videojs options
                muted: true,

                sources: [{
                    type: "video/mp4",
                    src: "http://os5lxzkas.bkt.clouddn.com/long15.m4v"
                }],
                poster: "http://ovfllimsi.bkt.clouddn.com/videoBgHead.png",
            }



        }
    },

    beforeMount() {
        this.setVm();

    },
    computed: {

        player() {
            return this.$refs.videoPlayer.player
        }
    },
    methods: {
        videoPlay: function(event) {

            $('.slef-background').addClass('hide');
            $('.video-player-box').removeClass('hide');
            this.player.show();
            this.player.play();
        },
        setVm() {
            vm = this;

        },
        // listen event
        onPlayerPlay(player) {
            // console.log('player play!', player)
        },
        onPlayerPause(player) {
            // console.log('player pause!', player)
        },

        // or listen state event
        onPlayerEnded(playerCurrentState) {
            $('.slef-background').removeClass('hide');
            $('.video-player-box').addClass('hide');


        },



    }
}
</script>

