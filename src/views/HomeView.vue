<template>
  <div class="home">
   <IntroSection/>
  <div class="section s_cart">
    <p class="cart_p">어떤 인재를<i>주문하셨나요?</i> <span> 메뉴에서 골라</span><span>테이크 아웃하세요 !</span> </p>
    <figure><img src="../assets/cart.png" alt="움직이는 gif"></figure>
  </div>
  <div class="section s_service">
    <div class="text-wrap">
      <h5>원하시는 인재가 있으신가요?</h5>
      <h3>WHAT YOUR CHOICE</h3>
    </div>
    <ul>
      <li class="scrolling-text" >
        <div><span>#성실함</span><span class="icon icon_h"><img src="../assets/harmony.gif" alt="융화 움직이는 아이콘">#융화</span><span>#자기개발</span><span>#지구력</span><span class="icon icon_e"><img src="../assets/effort.gif" alt="노력 움직이는 아이콘">#노력파</span><span>#창의력</span></div>
        <div><span>#성실함</span><span class="icon icon_h"><img src="../assets/harmony.gif" alt="융화 움직이는 아이콘">#융화</span><span>#자기개발</span><span>#지구력</span><span class="icon icon_e"><img src="../assets/effort.gif" alt="노력 움직이는 아이콘">#노력파</span><span>#창의력</span></div>  
        <div><span>#성실함</span><span class="icon icon_h"><img src="../assets/harmony.gif" alt="융화 움직이는 아이콘">#융화</span><span>#자기개발</span><span>#지구력</span><span class="icon icon_e"><img src="../assets/effort.gif" alt="노력 움직이는 아이콘">#노력파</span><span>#창의력</span></div>  
      </li>
      <li class="scrolling-text">
        <div><span class="icon icon_j"><img src="../assets/database.gif" alt="자바 움직이는 아이콘">#JAVASCRIPT</span><span>#REACT, VUE</span><span>#전역상태관리</span><span class="icon icon_f"><img src="../assets/folder.gif" alt="자바 움직이는 아이콘">#폴더구조</span><span>#TYPESCRIPT</span><span>#NEXT</span></div>
        <div><span class="icon icon_j"><img src="../assets/database.gif" alt="자바 움직이는 아이콘">#JAVASCRIPT</span><span>#REACT, VUE</span><span>#전역상태관리</span><span class="icon icon_f"><img src="../assets/folder.gif" alt="자바 움직이는 아이콘">#폴더구조</span><span>#TYPESCRIPT</span><span>#NEXT</span></div>
        <div><span class="icon icon_j"><img src="../assets/database.gif" alt="자바 움직이는 아이콘">#JAVASCRIPT</span><span>#REACT, VUE</span><span>#전역상태관리</span><span class="icon icon_f"><img src="../assets/folder.gif" alt="자바 움직이는 아이콘">#폴더구조</span><span>#TYPESCRIPT</span><span>#NEXT</span></div>
      </li>
      <li class="scrolling-text">
        <div><span>#REST API</span><span class="icon icon_c"><img src="../assets/crud.gif" alt="crud 움직이는 아이콘">#CRUD 구현</span><span>#UI,UX 개선</span><span>#데이터 베이스</span><span class="icon icon_d"><img src="../assets/datalaptop.gif" alt="데이터 움직이는 아이콘">#데이터 분석</span><span>#JSON</span></div>
        <div><span>#REST API</span><span class="icon icon_c"><img src="../assets/crud.gif" alt="crud 움직이는 아이콘">#CRUD 구현</span><span>#UI,UX 개선</span><span>#데이터 베이스</span><span class="icon icon_d"><img src="../assets/datalaptop.gif" alt="데이터 움직이는 아이콘">#데이터 분석</span><span>#JSON</span></div>
        <div><span>#REST API</span><span class="icon icon_c"><img src="../assets/crud.gif" alt="crud 움직이는 아이콘">#CRUD 구현</span><span>#UI,UX 개선</span><span>#데이터 베이스</span><span class="icon icon_d"><img src="../assets/datalaptop.gif" alt="데이터 움직이는 아이콘">#데이터 분석</span><span>#JSON</span></div>
      </li>
    </ul>
  </div>
  <div class="section s_project" id="s_project">
    <div class="text-wrap">
      <h5>주문하신 메뉴 나왔습니다!</h5>
      <h3>PROJECT</h3>
    </div>
    <div class="btnsection">
      <button class="albumbtn" @click="viewMode = 'album'" 
      :class="{ active: viewMode === 'album' }"></button>
      <span>|</span>
      <button class="slidebtn" @click="viewMode = 'swiper'" 
      :class="{ active: viewMode === 'swiper' }"></button>
    </div>
    <div class="con_list">
      <div class="list_s" v-if="viewMode === 'swiper'">
        <Swiper ref="{swiperRef}" :slidesPerView="3" :pagination="{
          clickable: true, }" :navigation="true" :modules="modules" class="mySwiper"
          :breakpoints="{360: { slidesPerView: 1 },1027: { slidesPerView: 1 },1028: { slidesPerView: 3 }}"
          >
          <swiper-slide v-for="(project,i) in projects" :key="i"  >
            <ProjectList :project="project"  @parent="showPopup"/>
          </swiper-slide>
        </Swiper>
      </div>
      <div class="list_a"  v-if="viewMode === 'album'">
        <ProjectList v-for="(project,i) in projects" :key="i"  :project="project"  @parent="showPopup"/>
      </div>
    </div>
  
  </div><!-- s_project -->

  <div class="section s_about">
      <div class="text-wrap">
        <h5>자기 소개 및 관련 사항</h5>
        <h3>About Me</h3>
      </div>
      <div class="canvas" id="memberRenderBox">
        <!-- <img src="../assets/about.png" alt="나의 이모지"> -->
      </div>
      <p>안녕하세요! 생각의 경계를 넘어서는 <strong>유연한 사고</strong>와 <strong>혁신적인 발상</strong>으로 <strong>무한한 가능성</strong>을 만들어내고 싶은 <strong>디자인하는 퍼블리셔 박지연</strong> 입니다.<br>
         작은 단위의 <Strong>컴포넌트를 재사용</Strong>하고 <Strong>확장성을 고려</Strong>해 작업하는 것을 좋아하며 새롭게 배운 기술을 업무에 적용해 더 나은 서비스를<br>
         구축하는 것을 목표로 정진합니다.
      </p>
      <button @click="goToAbout">더보기</button>
  </div>

  <div class="section s_interview">
      <div class="text-wrap">
        <h5>질문과 답변</h5>
        <h3>Interview</h3>
      </div>
      <ul>
        <li>
          <h4>Q) 디자이너에서 퍼블리셔로 전향한 이유?</h4>
          <p>첫 시작은 퍼블리싱이였습니다.<br>
               퍼블리싱에 관심이 있어 혼자 독학으로 유튜브를 공부하다 화면을 내가 디자인한데로 구현해내는 것에 매료되었고 더 나아가 개발까지 공부하게 되었습니다.내가 기획한데로 디자인과 기능까지 모두 화면에 출력할 수 있겠다라는 생각에 전향을 결심하고 도전하게 되었습니다.
          </p>
        </li>
        <li>
          <h4>Q) 프로젝트를 하면서 가장 힘들었던 것은?</h4>
          <p>팀 작업을 할때는 모두의 의견을 조율하고 내가 맡은 부분을 시간 안에 끝내야 하는 책임감에 힘들었습니다. 하지만 서로의 지식을 나누고
               공유할 수 있어 더욱 성장하는 기회가 된 것 같습니다. 개인 작업시에는 설계를 혼자서 다 해내야 한다는 점이 어려웠던 것 같습니다.
               작업 전 미리 효율적인 로직과 구조를 짠다면 훨씬 빠르고 깔끔한 작업물이 나온다는 것을 몇번의 작업을 거치고 습득할 수 있었던 것 같습니다.
          </p>
        </li>
      </ul>
    
  </div>

  <div class="section s_career">
      <div class="text-wrap">
        <h5>경력 사항 및 교육</h5>
        <div class="c_row">
          <h3>CAREER</h3>
          <button class="morebtn" @click="goToCareer">더보기</button>
        </div>
      </div>
      <ul>
        <li class="unactive">
          <div class="c_front">
                <span>2024. 12. 01 ~</span>
                <h3>무궁무진한 발전을 기약, 미래의 회사</h3>
          </div>
        </li>
        <li class="spreadsection" :class="{ active: isOpen(1) }" @click="onClick(1)" >
          <div class="c_front">
                <span>2018-09-10 ~ 2023-12-01 </span>
                <h3>(주)베스트해피라인 / (주)금오H라인</h3>
          </div>
          <div class="c_back" v-if="isOpen(1)">
                <span>2018-09-10 ~ 2023-12-01 </span>
                <h3>(주)베스트해피라인 / (주)금오H라인</h3>
                <p>병ㆍ의원 운영 시스템을 갖춘 마케팅 컨설팅 회사로
                   오프라인 및 온라인 홍보 및 마케팅, 경영 관리를 지원하는 회사입니다.
                   온라인 마케팅 팀에 귀속되어 웹디자이너로 근무하였습니다.
                </p>
          </div>
        </li>
        <li class="spreadsection" :class="{ active: isOpen(2) }" @click="onClick(2)" >
          <div class="c_front" >
                <span>2015.3.23 ~ 2017.11.06</span>
                <h3>(주)토다이 평촌점</h3>
          </div>
          <div class="c_back" v-if="isOpen(2)">
                <span>2015.3.23 ~ 2017.11.06</span>
                <h3>(주)토다이평촌점</h3>
                <p>미국, 중국, 일본, 한국 등의 지점이 있는 씨푸드 레스토랑으로
                   일식, 중식, 한식, 양식, 패스츄리가 제공되는 패밀리 레스토랑입니다.
                                   
                   한식 & 패스츄리 파트에서 쿡으로 1년 8개월 근무,
                   양식파트에서 헤드쉐프로 1년 근무하였습니다. 
                </p>
          </div>
        </li>
        <li class="spreadsection" :class="{ active: isOpen(3) }" @click="onClick(3)" >
          <div class="c_front">
                <span>2013.2.15~2015.01.28</span>
                <h3>호주 워킹홀리데이</h3>
          </div>
          <div class="c_back" v-if="isOpen(3)">
                <span>2013.2.15~2015.01.28</span>
                <h3>호주 워킹홀리데이</h3>
                <p>학교에서 2011년 1월 경 5주 호주 연수 프로그램에 선발되어
                   어학 연수를 다녀왔던 경험을 토대로 워킹홀리데이에
                   도전하여 2년동안 스시 롤러, 딸기 농장, 청소 등 다양한 직업을 경험하고
                   글로벌 역량을 강화해 돌아왔습니다. 
                </p>
          </div>
        </li>
        <li class="spreadsection" :class="{ active: isOpen(4) }" @click="onClick(4)">
          <div class="c_front">
                <span>2011.5.13 ~ 2012.07.29</span>
                <h3>(주)호반호텔앤리조트</h3>
          </div>
          <div class="c_back" v-if="isOpen(4)">
                <span>2011.5.13 ~ 2012.07.29</span>
                <h3>(주)호반호텔앤리조트</h3>
                <p>(주)리솜리조트라는 이름으로 설립된 리조트 운영 기업으로
                   제천, 안면도, 덕산, 제주에 지점들이 있으며 학동에 위치한
                   본사의 판촉팀에서 연회장 예약 및 관리를 담당하였습니다.
                </p>
          </div>
        </li>
        <li class="unactive">
          <div class="c_front">
                <span>2008.03 ~ 2011.02</span>
                <h3>대림대 졸업</h3>
          </div>
        </li>
        <li class="unactive">
          <div class="c_front">
                <span>2005.03 ~ 2008.02</span>
                <h3>산본고 졸업</h3>
          </div>
        </li>
      </ul>
    
  </div>
  <SubSection/>
  </div> <!-- 홈 -->

   <!-- popup 부분-->
   <div class="black-bg" id="black-bg" v-if="popup" @click="handleClick($event)">
    <div class="white-bg" @scroll="handleScroll">
      <PopupItem v-if="selectedProject" :project="selectedProject" />
      <button @click="closePopup" class="detail_xbtn">
        <img src="../assets/detail_xbtn.svg" alt="닫기버튼"/>
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Pagination, Navigation } from 'swiper/modules';
import ProjectList from "@/components/ProjectList.vue";
import SubSection from "@/components/SubSection.vue";
import PopupItem from "@/components/PopupItem.vue";
import IntroSection from "@/components/IntroSection.vue";
import { useRouter } from 'vue-router'; // useRouter 훅 사용
import projectsData from '../data/project.json'; // JSON 파일 import

console.log(projectsData);
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


export default defineComponent({
  name: "HomeView",
  components: {
    Swiper,
    SwiperSlide,
    ProjectList,
    SubSection,
    IntroSection,
    PopupItem,
  },
  data(){
    return{
      projects: projectsData.project, // 프로젝트 데이터를 저장할 배열
      activeIndex: 1 as (number | null),
      popup: false, // 팝업 상태
      selectedProject: null, // 선택된 프로젝트 데이터
      
    }
  },
  methods:{
    showPopup(project: any) {
      this.selectedProject = project; // 선택된 프로젝트 데이터 저장
      this.popup = true; // 팝업 열기
      document.body.style.overflow = 'hidden'; // 팝업 열면 body 스크롤 막기
    },
     // 클릭 시 활성화된 항목을 관리
    onClick(index: number):void {
      // 클릭된 항목이 이미 활성화 상태라면 비활성화
      if (this.activeIndex === index) {
        this.activeIndex = null;
      } else {
        this.activeIndex = index;
      }
    },

     // 스크롤 이벤트 핸들러
     handleScroll(e: Event) {
        e.stopPropagation(); // 부모 요소로 스크롤 이벤트 전파를 막음
      },

      // 팝업 닫을 때 body 스크롤 되돌리기
    closePopup() {
      this.popup = false;
      document.body.style.overflow = ''; // 팝업 닫을 때 body 스크롤 복구
    },


    // 배경 클릭 시 팝업을 닫는 함수
    handleClick(event: MouseEvent) {
        // 클릭한 위치가 'black-bg'인 경우에만 팝업을 닫도록 처리
        if (event.target === event.currentTarget) {
          this.closePopup(); // 팝업 닫기
        }
      },

    // 호버에서 벗어났을 때 상태를 초기화
    // onLeave() {
    //   // activeIndex가 1 ~ 4 사이의 값일 경우에만 비활성화
    //   if (![1, 2, 3, 4].includes(this.activeIndex as number)) return;
    //   this.activeIndex = null;
    // },

    // activeIndex 상태에 따라서 각 항목의 열림/닫힘 상태를 반환
    isOpen(index: number) { return this.activeIndex === index;  }
  },
  setup() {
    const router = useRouter(); // useRouter 훅을 사용하여 router 객체를 가져옵니다.
    const goToAbout = () => {
      router.push({ name: 'about' }); // router.push로 이동
    };
    const goToCareer = () => {
      router.push({ name: 'about' }); // router.push로 이동
    };
    // 선택된 뷰 모드 (swiper 또는 album)
    const viewMode = ref<'swiper' | 'album'>('swiper');

    return {
      goToAbout,
      goToCareer,
      modules: [Pagination, Navigation],
      viewMode
    };
  }
});

</script>


<style lang="scss">
:root {
  --primary-color: #2546B4;  
  --width-size: 82%;
  --serve-color: #2D2D2D;
}
.home{
//섹션마다 공통으로 쓰는 것들
.section{
  width: 100%;
  // height: 100vh;
  margin: 0 auto;
  .text-wrap{
    h5{
      font-weight: 400;
      font-size: 1.8rem;
    }
    h3{
      font-size: 4rem;
    }
  }
}
.s_cart{
  height: 100vh;
  padding: 0 160px;
  background-color: var(--primary-color);
  display: flex;
  align-items: center;
  p{
    margin: 0;
    text-align: left;
    width: 55%;
    font-weight: 400;
    font-size: 4.1rem;
    color: white;
    letter-spacing: -1px;
    i{
      font-style: normal;
    }
    span{
      display: block;
    }
  }
  figure{
    padding-left: 60px;
    margin: 0;
    width: 45%;
    text-align: left;
    img{
      filter: drop-shadow(5px 5px 5px rgba(0,0,0,.1));
       
    }
  }
}
.s_service{
  display: flex;
  flex-direction: column;              
  justify-content: center;     /* 가로 방향으로 중앙 정렬 */
  height: 100vh;               /* 섹션 높이를 화면 높이로 설정 (뷰포트의 100%) */
  
  .text-wrap{
    margin: 0 0 50px 10%;
    text-align: left;
  }
  ul{
    li{
      padding: 60px 0;
      border-top: 1px solid #ddd;
      border-bottom: 1px solid #ddd;
      display: flex;
      align-items: center;
      overflow: hidden; /* 텍스트가 밖으로 나가지 않게 설정 */
      position: relative;
      // white-space: nowrap;
      // animation: flow-txt 10s infinite linear;
      &:nth-child(2){
        border: none;
        div{
          flex:0 0 2200px;
          align-items: center;
          white-space: nowrap;
          animation: flow-txt-reverse 50s infinite linear;
          }
        }
      &:nth-child(3){
        div{
        flex:0 0 2000px;
        align-items: center;
        white-space: nowrap;
        animation: flow-txt 40s infinite linear;
        }
      }
      
      div{
        flex:0 0 1400px;
        align-items: center;
        white-space: nowrap;
        animation: flow-txt 35s infinite linear;
          span{
            vertical-align: middle;
            white-space: nowrap;
            padding-right: 7%;
            font-size: 2rem;
            display: inline-block;
          }
          .icon {
            display: inline-flex;
            align-items: center; /* 아이콘과 텍스트가 세로로 정렬되게 */
            img{
              margin-right: 10px;
              width: 70px; 
              height: auto;
              object-fit: contain;
              // vertical-align: middle;
            }
          }
      }
      
    }
  }
}
@keyframes flow-txt{
    100%{transform: translateX(-100%);}
}
@keyframes flow-txt-reverse{
    100%{transform: translateX(0%);}
    0%{transform: translate(-100%);}
}
.s_project{
  background-color: var(--serve-color);
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;              
  align-items: center;
  height: auto;
  .text-wrap{
    color: white;
    margin: 80px 0 35px;
  }
 .btnsection{
  position: absolute;
  top:150px;
  right: 16%;
  z-index: 10; //위로 올려주니 커서 포인트가 됨
  display: flex;
  gap: 25px;
    button{
      display: block;
      border: none;
      width: 54px;
      height: 54px;
      border-radius: 10px;
      &.active {
          background-color: var(--primary-color);
          color: white;
          }
    }
  .albumbtn{
    background: url('../assets/albumbtn_white.svg') center no-repeat;
  }
  .slidebtn{
    background: url('../assets/slidebtn_white.svg') center no-repeat;
  }
  span{
    background-color: #3E3E3E;
    font-size: 3px;  
  }
 }
 .con_list{
  width:100%;
  margin-bottom: 80px;
    .list_s{
      .swiper{
           width: 83%;
           color: white;
          .swiper-button-prev{
            width: 50px;
            height: 50px;
            border-radius: 99px;
            background-color: rgba(0,0,0,0.6);
            &::after{
            content: url("../assets/maki_arrow_left.svg");
            display: inline-block;
            }
          }
          .swiper-button-next{
            width: 50px;
            height: 50px;
            padding: 0 10px;
            border-radius: 99px;
            background-color: rgba(0,0,0,0.6);
            &::after{
            content: url("../assets/maki_arrow_right.svg");
            display: inline-block;
            } 
           }
           .swiper-pagination{
            bottom: -7px;
           }


          }

       }
    .list_a{
      margin: 0 160px;
      display: flex;
      flex-wrap: wrap;
      .list_item{
        width:32%;
        z-index: 5;
        .taptit{
          i{
            color: white;
          }
        }
      }

    }
   }
 
}
.s_about{
  display: flex;
  flex-direction: column;              
  justify-content: center;    
  height: 100vh;
  position:relative;
  .text-wrap{
    margin: 0 0 50px 10%;
    text-align: left;
    position: absolute;
    top:10%;
    left:0;
    z-index: 1;
    h5{margin-bottom: -13px;}
   }
  .canvas{
    position:absolute;
    left:0; top:0;
    width:100%; height:100vh;
    img{
      width:700px;
      height: auto;
      object-fit: cover;
    }
   }
  p{
    position: absolute;
    bottom:14%;
    left:0;
    margin: 50px 10% 30px;
    font-size: 1.6rem;
    text-align: left;
    z-index: 1;
   }
  button{
    position: absolute;
    z-index: 1;
    bottom:10%;
    left:50%;
    transform: translateX(-50%);
    font-size: 1rem;
    margin: 0 auto;
    border-radius: 10px;
    display: block;
    color: white;
    width: 200px;
    height: 50px;
    background-color: var(--serve-color);
   }
  }
.s_interview{
  background-color: var(--primary-color);
  color: white;
  display: flex;
  flex-direction: column;              
  justify-content: center;    
  height: 100vh;
  .text-wrap{
    margin: 0 0 50px 10%;
    text-align: left;
    h5{margin-bottom: -13px;}
    }
  ul{ margin: 0 10%;
    li{
      background-color: white;
      width:100%;
      color: var(--serve-color);
      margin-bottom: 25px;
      border-radius: 10px;
      text-align: left;
      display: flex;
      flex-direction: column;
      justify-content: center;
      padding: 4% 3%;
      h4{
        font-weight: 700;
        font-size: 2rem;
        color: var(--primary-color);
        margin-bottom: 20px
      }
      p{
        word-break: break-all;
        margin: 0 40px;
        font-size: 1.2rem;
        color: #7A7A7A;
      }
    }
  }  
}
.s_career{
  background-color: #E2E2E2;
  display: flex;
  flex-direction: column;              
  justify-content: center;    
  height: 100vh;
  .text-wrap{
    margin: 0 0 50px 10%;
    text-align: left;
    h5{margin-bottom: -13px;}
    .c_row{
      display: flex;
      align-items: center;
      button{
        display: flex;
        justify-content: space-between;
        align-items: center;
        cursor: pointer;
        border-radius: 99px;
        color: white;
        font-size: 1.2rem;
        margin-left: 40px;
        width: 15%;
        padding: 1% 2%;
        background-color: var(--serve-color);
        &::after{
          margin: 3px 0 0 10px;
          cursor: pointer;
          content: url('../assets/arrowright.svg') ;
          display: block;
        }
      }
    }
  }
  ul{
    display: flex;
    justify-content: space-between;
    gap:20px;
    width:83%;
    margin:0 auto;
    li{
      flex-grow: 1;
      height: 550px;
      position: relative;
      transition: 0.3s ease;
      border-radius: 10px;
      background-color: white;
      overflow: hidden;
      .c_front{
      position: absolute;
      left:0; top:0;
      width: 100%;
      // height: 100%;
      // display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: start;
      // padding-top: 30px;
      border-radius: 10px;
      // writing-mode: vertical-rl;
      transform-origin: 0% 0%;
      transform: translate(76%,50px) rotate(90deg) ;
      text-align: start;
      background-color: white;
      z-index: 10;
      font-size: 1.3rem;
      letter-spacing: 3px;
      transition: opacity 0.3s ease; /* 부드럽게 사라지도록 설정 */
      h3{
        font-weight: 400;
        white-space: nowrap;
      }
      span{
        display: block;
        white-space: nowrap;
      }
      }
      .c_back{
        background-color: var(--serve-color);
        width:auto;
        height: 100%;
        position: absolute;
        display: flex;
        flex-direction: column;
        justify-content: center;
        z-index: 5;
        top:0;
        left:0;
        z-index: 5;
        transition: opacity 0.3s ease; /* 부드럽게 나타나도록 설정 */
        text-align: left;
        padding: 30px;
        opacity: 0%; 
        span{
          font-size: 1.4rem;
          font-weight: 100;
          color: rgb(116, 116, 116);
        }
        h3{
          font-size: 2rem;
          margin-bottom: 15%;
        }
        p{
          word-break: keep-all;  //단어를 유지하면서
          font-size: 1.3rem;
          font-weight: 200;
        }

      }
    /* li가 클릭되었을 때 */
      &.active{
        flex-grow: 6;
        height: 100%;
        color: white;
        transition: flex-grow 0.8s ease;;
        .c_front{
          opacity: 0;
          z-index: 1;
        }
        .c_back{
        background-color: var(--serve-color);
        opacity: 100%; 
        z-index: 20;
        }
      }
    }
    .unactive{
      background-color: #d6d6d6;
      div{
        background-color: #d6d6d6;
      }
    }
    .spreadsection{
      cursor: pointer;
    }
  }
}
}
//팝업 부분
.black-bg {
  width: 100vw;
  height:100vh;
  background: rgba(0,0,0,0.7);
  position: fixed;
  top:0;
  left:0;
  z-index: 99;
  padding: 5% 0;
      .white-bg {
      overflow-y: auto;
      overflow-x: hidden;
      position: relative;
      margin: 0 auto;
      width: 80vw;
      height: 80vh;
      background: white;
      border-radius: 8px;
      padding: 20px;
      z-index: 100;
      }
      .detail_xbtn {
      position: fixed;
      top:15%;
      right:13%;
      z-index: 105;
      margin-top: 10px;
      padding: 10px 20px;
      border: none;
      border-radius: 5px;
      cursor: pointer;
     
    }
  }



</style>