<template>
    <header>
    <h1>
      <router-link to ="/">
         <img src="./assets/portlogo.svg" alt="포트폴리오 로고">
      </router-link>
    </h1>
    <div class="trigger" >
      <div class="linebox" :class="{ active: menuOpen }" @click="toggleMenu">
        <span class="shortline"></span>
        <span class="longline"></span>
        <!-- <span class="longline" v-if="!menuOpen"></span> 조건문 클릭시 없애기 -->
        <span class="shortline"></span>
      </div>
      <nav class="portmenu" :class="{ active: menuOpen }">
        <ul @click="menuOpen = false">
          <li><router-link to="/">Home</router-link></li>
          <li><router-link to="/about">About</router-link></li>
          <li><router-link to="/project">Project</router-link></li>
          <li><router-link to="/contact">Contact</router-link></li>
        </ul>
      </nav>
    </div>
    
    </header>
  <router-view/>
  <FooterSection/>
</template>

<script>
import FooterSection from "@/components/FooterSection.vue";
import { defineComponent, ref } from "vue";
import { setMenuOpenHandler } from "@/router";


export default defineComponent({
  name: 'App',
  components: {
    FooterSection,
  },
  setup() {
    const menuOpen = ref(false);

    const toggleMenu = () => {
      menuOpen.value = !menuOpen.value; // 상태 토글
      console.log("Menu toggled:", menuOpen.value); // 상태 확인
    };

    const closeMenu = () => {
      menuOpen.value = false; // 메뉴 닫기

    };

    const onMounted = () => {
      setMenuOpenHandler({ closeMenu });
    };

    return {
      menuOpen,
      toggleMenu,
      closeMenu,
    };
  },
});

</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;700&display=swap');

#app {
  font-family: 'Montserrat' , Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: var(--serve-color);
}
body{
  margin: 0 auto;
}
:root {
  --primary-color: #2546B4;  // CSS 변수 선언
  --width-size: 82%;
  --serve-color: #2D2D2D;
}
header{
  width: var(--width-size);
  margin:  0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  h1{ 
    margin-top: 30px;
    width: 230px;
    a{ display: block;
      width:100%;
      img{
        cursor: pointer;
        width: 100%;}
    }
  }
  .trigger{
    user-select: none; //커서 깜빡임 없애기
    cursor: pointer;
    position: fixed;
    top: 4%;
    right: 12%;
    z-index: 30;
    &::after{
      content: '';
      display: block;
      position: absolute;
      top: 0;
      left: 0;
      width: 60px;
      height: 60px;
      border-radius: 6px;
      background-color: var(--primary-color);
      //z-index: -1;  .linebox 아래로 이동
     // pointer-events: none;  클릭 방지
    }
    .linebox{
      cursor: pointer;
      position: absolute;
      width: 60px;
      height: 60px;
      z-index: 3;
      left: 0;
      top:0;
      color: white;
      span{
        position: absolute;
        display: block;
        width: 100px;
        border-bottom: 1px solid white;
        left:11px;
        z-index: 3;
        width: 45%;
        &:nth-child(1){
          width: 45%;
          top: 20px;
        }
        &:nth-child(2){
          width: 60%;
          top: 30px;
        }
        &:nth-child(3){
          width: 45%;
          top: 40px;  
        }
       }
      .longline{
      width: 65%;
      top: 30px;
      }
    &.active {
        // .longline {
        //   width: 0; // longline 숨기기
        //  }
        span{
          top:30px;
          &:nth-child(1) {
            transform: rotate(45deg) translate(0px, 0px); // X 모양
            }
          &:nth-child(2){
            display: none;
          }  
          &:nth-child(3){
            transform: rotate(-45deg) translate(0px, 0px); // X 모양
          }
           }
         }
       }
      &.active{
        &::after{
        display: block;
        transform: scale(100);
        transition: .3s;
        }
      }
    }
}
.portmenu{
  position: fixed;
  top:0;
  left:0;
  width: 100%;
  height: 100%;
  background-color: var(--primary-color);
  display: flex;
  justify-content:center;
  align-items: center;
  z-index: 1;
  opacity: 0;
  visibility: hidden;
  transition: opacity 0.3s ease, visibility 0.3s ease;
    ul{
      li{list-style: none;
        margin-bottom: 30%;
        a{
          color: white;
          font-size: 1.5rem;
          font-weight: 300;
          text-decoration: none;
        }
        }
    }
  &.active { 
    visibility: visible;
    opacity: 1;
  }
}
</style>
