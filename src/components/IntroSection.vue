<template>
   <div class="contents s_intro">
    <h2><span v-for="(char, index) in animatedText" :key="index" :style="{ animationDelay: `${index * 0.1}s` }">{{ char }}</span>TAKEOUT?</h2>
    <b>Who ordered a resume? 이력서 시키신 분?</b>
    <div class="introgif">
      <img src="../assets/mainwheel.gif" alt="움직이는 gif"> 
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref, onMounted } from "vue";


export default defineComponent ({
  setup() {
    const texts = ["RESUME-", "", "SKILL-"];
    const animatedText = ref<string[]>([]);
    const animationDelay = 100; // 각 글자의 애니메이션 딜레이 (ms)

    const animateText = async (text: string) => {
      animatedText.value = []; // 초기화
      for (const char of text) {
        animatedText.value.push(char); //한글자씩 추가
        await new Promise((resolve) => setTimeout(resolve, animationDelay));
      }
    };

    onMounted(() => {
      let currentIndex = 0;

     // 텍스트 순환
  setInterval(() => {
    const currentText = texts[currentIndex]; // 현재 텍스트를 가져옴
    animateText(currentText); // 애니메이션 적용
    currentIndex = (currentIndex + 1) % texts.length; // 순환
  }, texts[currentIndex].length * animationDelay + 2000); // 텍스트 길이를 사용한 딜레이
    });

    return {
      animatedText,
    };
  },

});
</script>
<style lang="scss">
.s_intro{margin-bottom: 70px;
  h2{
    line-height: 10rem;
    font-size: 9rem;
    color: var(--primary-color);
    margin: 60px 0 50px;
    span{
      display: inline-block;
      opacity: 0;
      transform: translateY(100%);
      animation: slideUp 0.9s forwards;
    }
  }
  b{
    display: inline-block;
    color: var(--primary-color);
    font-size: 1.5rem;
    font-weight: 200;
    padding: 20px 30px;
    border: 1px solid var(--primary-color);
    border-radius: 99px;
  }
  .introgif{
    margin-top: 60px;
  }
}
@keyframes slideUp {
  to {
    opacity: 1;
    transform: translateY(0);
  }
  from{
    opacity: 0;
    transform: translateY(100%);
  }
}


</style>