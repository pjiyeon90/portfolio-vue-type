<template>
  <div class="design">
    <div class="d_title">
    <h3>Design products</h3>
      <img src="../assets/meltingface.svg" alt="디자인이모지"/>
    </div>
  <!-- 탭 버튼 -->
  <div class="d_tabs">
      <button v-for="tab in tabs" :key="tab.key"
        :class="{ active: selectedTab=== tab.key }"
        @click="selectedTab = tab.key">
        {{ tab.label }}
      </button>
    </div>
     <!-- 선택된 탭에 따른 콘텐츠 -->
     <div class="content-list">
      <div
        class="content-item"
        v-for="item in contentTyped[selectedTab]"
        :key="item.title"
      >
        <p>{{ item.title }}</p>
        <div class="image-group">
          <img
            v-for="(img, index) in item.images"
            :key="index"
            :src="`/img/${img}`"
            :alt="item.title"
          />
        </div>
      </div>
    </div>
    
  </div> <!-- design -->
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import content from '../data/designproduct.json';

// 타입 정의
interface ContentItem {
  title: string;
  images: string[];
}
interface ContentData {
  [key: string]: ContentItem[];
}

// 탭 목록: 실제 JSON 키와 라벨 분리
const tabs = [
  { key: 'blog', label: '블로그' },
  { key: 'popup', label: '팝업' },
  { key: 'cardnews', label: '카드뉴스' },
  { key: 'homepage', label: '홈페이지' },
  { key: 'xbanner', label: 'X배너ㆍ현수막' },
  { key: 'namecard', label: '명함ㆍ사원증' },
  { key: 'booklet', label: '시술책자' },
  { key: 'event', label: '이벤트(a4)' }
];

const selectedTab = ref('blog');

const contentTyped = ref(content as ContentData);
</script>


<style lang="scss">
.design{
  height: auto;
  padding: 50px 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 50px auto 0;
  border: 1px solid var(--primary-color);
  .d_title{

    display: flex;
    justify-content: center;
    align-items: center;
    h3{
    color: var(--primary-color);
    font-size: 2.5rem;
    }
    img{
      display: block;
      margin-left: 15px;
    }
  }
  
    .d_tabs {
    margin: 20px 0;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;

    button {
    
      margin: 5px;
      padding: 10px 15px;
      border: 1px solid #d8d8d8;
      // background-color: white;
      border-radius: 20px;
      transition: all 0.2s ease;
      cursor: pointer;

      &.active {
        background-color: var(--primary-color);
        color: white;
      }
    }
  }

  .content-list {
    width: 100%;
    max-width: 1200px;
    min-width: 360px;
    .content-item {
      margin:30px 0;
      text-align: center;
      p{
        font-size: 1.1rem;
        font-weight: 400;
        margin-bottom: 10px;
      }
      .image-group {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        gap: 10px;

        img {
          width: 200px;
          height: auto;
          object-fit: cover;
          border: 1px solid #eee;
          border-radius: 8px;
        }
      }
    }
  }
}
    
  
    
  

@media screen and (min-width: 360px) and (max-width: 1280px){
 


}


</style>