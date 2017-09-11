<template>
    <div>
        <swiper :options="swiperOptionPage" class="swiper-Page">
            <swiper-slide> </swiper-slide>
            <swiper-slide>
                <swiper :options="swiperOptionCase" class="swiper-picList">

                    <swiper-slide>
                        <img src="http://pic1.to8to.com/case/1503/25/20150325_3d847ee42f667755e5f4htaxosl1k8fu_sp.jpg" alt="">
                        <div class="explain">
                            <p class="tit">郁金香意1</p>
                            <p>150平米：3室内两厅</p>
                            <div>
                                <span>客户满意度</span>
                                <div class="score">

                                </div>
                            </div>

                        </div>
                    </swiper-slide>
                    <swiper-slide>
                        <img src="http://ovfllimsi.bkt.clouddn.com/caselist02.png" alt="">
                        <div class="explain">
                            <p class="tit">郁金香意2</p>
                            <p>150平米：3室内两厅</p>
                            <div>
                                <span>客户满意度</span>
                                <div class="score">

                                </div>
                            </div>

                        </div>
                    </swiper-slide>
                    <swiper-slide>
                        <img src="http://ovfllimsi.bkt.clouddn.com/caselist03.jpg" alt="">
                        <div class="explain">
                            <p class="tit">郁金香意3</p>
                            <p>150平米：3室内两厅</p>
                            <div>
                                <span>客户满意度</span>
                                <div class="score">

                                </div>
                            </div>

                        </div>
                    </swiper-slide>
                    <div class="swiper-button-prev" slot="button-prev"></div>
                    <div class="swiper-button-next" slot="button-next"></div>
                </swiper>
            </swiper-slide>
            <swiper-slide> </swiper-slide>
        </swiper>

    </div>
</template>
<style>
.swiper-picList {
    position: relative;
}

.swiper-picList .swiper-slide img {
    width: 100%;
}

.swiper-picList .explain {
    position: absolute;
    width: 80%;
    bottom: 2rem;
    background: #fff;
    border-radius: .1rem;
    left: 10%;
}

.swiper-container {
    width: 100%;
}

.swiper-slide {
    background-position: center;
    background-size: cover;
}
</style>
<script>
var vm = null;
export default {
    data() {

        return {
            swiperOptionPage: {
                initialSlide: 1,
                height: window.innerHeight,
                direction: 'vertical',
                coverflow: {
                    rotate: 2,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: true
                },
                onTransitionStart(swiper) {


                },
                onSlideChangeEnd(swiper) {
                    var id = vm.$route.params.desiner_id;
                    if (swiper.activeIndex == 0) {

                        vm.$router.push({ path: '/Self/desiner/' + id });
                        return
                    }else if(swiper.activeIndex == 2){
                        vm.$router.push({ path: '/details/desiner/' + id });
                    }

                    



                },
            },
            swiperOptionCase: {
                prevButton: '.swiper-button-prev',
                nextButton: '.swiper-button-next',
                initialSlide: 1,
                height: window.innerHeight,
                coverflow: {
                    rotate: 2,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: true
                },
                onTransitionStart(swiper) {


                },
                onSlideChangeEnd(swiper, event) {




                },
                // onTouchEnd(swiper) {
                //     var id = vm.$route.params.desiner_id;
                // },
            }
        }
    },
    beforeMount() {
        this.setVm();

    },
    methods: {
        setVm() {
            vm = this;

        }
    }
}
</script>


