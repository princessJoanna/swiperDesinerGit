<template>
    <div>
        <swiper :options="swiperOption">

            <swiper-slide>
                <div id="zoom-wrap" class="zoom-wrap">
                    <video-player class="video-player-box vjs-big-play-centered" ref="videoPlayer" :options="playerOptions" :playsinline="false" @play="onPlayerPlay($event)" @pause="onPlayerPause($event)" @ended="onPlayerEnded($event)">
                    </video-player>

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





body {
    font-size: 14px;
    background: #000;
}

.imgWrap img {
    width: 100%;
}

html,
body {
    position: relative;
    height: 100%;
}

.zoom-wrap,
.video-js {
    width: 100%;
}

body {
    background: #eee;
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
    height: 100%；
}

.hasTips {
    position: relative
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
    margin: 0 auto;
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
            
                direction: 'vertical',
                   height:document.body.clientHeight,
                onTransitionStart(swiper) {
                },
                onSlideChangeEnd(swiper, event) {
                    if (swiper.activeIndex == 1) {
                        var id = vm.$route.params.desiner_id;
                        vm.$router.push({ path: '/Self/desiner/' + id });
                    }
               


                },
                onTouchEnd(swiper, event) {
                    // console.log(swiper,event)



                },
            },
            playerOptions: {
                // videojs options
                muted: true,
                "autoplay": true,
                sources: [{
                    type: "video/mp4",
                    src: "http://os5lxzkas.bkt.clouddn.com/hua80.m4v"
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
            var inner = `
                      <div class="zoomBg  hasTips">
                        <div class="wrap">
                            <img src="http://ovfllimsi.bkt.clouddn.com/videoBgHead.png" >
                        </div>
                        <div class="memo">
                            <div class="shadow"></div>
                            <div class="cont">
                                <p class="name">于飞</p>
                                <div class="score">
                                    <img src="../../static/images/score5.png">
                                </div>
                                <p class="price">报价:2500/平米</p>
                                <p class="brief">顾家家居品牌合作伙伴 新周刊杭州具有影响力的室内设计师 作品多次刊登于《瑞丽家居》《家居廊》等时尚家居杂
                                </p>
                            </div>
                        </div>
                    </div>
            `;

            this.player.dispose();

            document.getElementById('zoom-wrap').innerHTML = inner;

        },



    }
}
</script>

