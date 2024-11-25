<template>
    <div class="s_subscribe">
      <div class="sub-middle">
        <div class="text-wrap">
        <h3>Subscribe to<br>my newsletter</h3>
        <span>이메일을 입력해주시면 이력서와 포트폴리오를 보내드립니다.</span>
      </div>
      <form @submit.prevent="handleSubmit">
        <input v-model="email" type="text" placeholder="Your email address"/>
        <button type="submit">
            <img src="../assets/submit_arrow.svg" alt="검색"/>
        </button>
      </form>
      <p v-if="error" style="color: yellow; font-size: 0.9rem;">{{ error }}</p>
      </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue';
import { saveEmailToFirestore } from '../lib/firebase'; // firebase.js에서 import


export default defineComponent({
    data() {
    return {
      email: '',         // 이메일 상태
      isSubmitting: false, // 제출 중 상태
      error: '',          // 에러 메시지 상태
    };
  },
  methods: {
     // 이메일 형식 검사 함수
     isValidEmail(email: string): boolean {
      const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
      return emailPattern.test(email);  // 정규식으로 이메일 형식 검사
    },
    // 이메일 제출 함수
    async handleSubmit() {
     console.log('submit clicked');  // 디버깅용
      if (!this.email) {
        this.error = '이메일을 입력해 주세요.';
        return;
      }

        // 이메일 형식이 올바른지 확인
        if (!this.isValidEmail(this.email)) {
        this.error = '올바른 이메일 형식을 입력해 주세요.';
        alert(this.error);
        return;
      }

      this.isSubmitting = true;
      this.error = ''; // 이전 에러 초기화
      try {
        console.log('saving email to firestore: ', this.email);  // 디버깅용
        // Firebase에 이메일 저장
        await saveEmailToFirestore(this.email);
        this.email = '';  // 이메일 입력 필드 초기화
        alert('구독이 완료되었습니다!');
      } catch (err) {
        this.error = '저장 중 오류가 발생했습니다. 다시 시도해 주세요.';
        alert(this.error);
      } finally {
        this.isSubmitting = false;
      }
    },
  },  
})
</script>
<style lang="scss">
  .s_subscribe{
    background-color: var(--serve-color);
    .sub-middle{
      display: flex;
      align-items: center;
      justify-content: space-around;
      width: 92vw;
      height: 40vh;
      margin: 0 auto;
      .text-wrap{
        width: 36%;
        color: white;
        text-align: left;
        h3{
        font-size: 4.5rem;
        line-height: 5rem;
        }
        span{
        margin-top: 20px;
        display: block;
        font-size: 1.1rem;
        font-weight: 300;
        color: #828282;
        }
    }
    form{
        width: 42%;
        position: relative;
        input{
        width: 100%;
        padding:50px 30px;
        border-radius: 10px;
        background-color: white;
        border: none;
        display: block;
        &::placeholder{
        color: #D9D9D9;
        font-size: 2rem;
        font-weight: 500;
        }
        }
        button{
        background-color: var(--serve-color);
        position: absolute;
        top: 50%;
        right: 5%;
        padding: 15px;
        transform: translateY(-50%);
        border-radius: 99px;
        }
    }
    }
    
}
</style>