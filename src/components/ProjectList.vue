<template>
    <div class="list_item" @click="$emit('parent',project)">
      <div class="list_body">
        <figure v-if="project.project_thumnail">
          <img :src="require(`../assets/${project.project_thumnail}`)" :alt="project.project_name">
        </figure>
          <div class="list_txt">
            <div class="btn_section">
             <h2>{{ project.project_name }}</h2>
            <div class="btn_wrap">
               <a @click="$event.stopPropagation();" :href="project.github_url" target="_blank">
                <img src="../assets/git_icon.svg" alt="깃허브 바로가기">
              </a> 
               <a @click="$event.stopPropagation();" :href="project.site_url" target="_blank">
                <img src="../assets/site_icon.svg" alt="사이트 바로가기">
              </a> 
            </div>   
            </div>
            <p>{{ project.project_summary }}</p>
            <ul>
                <li>
                    <em>개발 환경</em>
                    <div>
                      <span v-for="(item,idx) in project.development_environment" :key="idx">
                      {{item}}
                    </span>
                    </div>
                    
                </li>
                <li>
                    <em>개발 기간</em>
                    <span>{{project.development_period.date}}({{project.development_period.duration_weeks}}주)</span>
                </li>
            </ul>
        </div>
      </div>
      <div class="taptit">
      <i>반응형 웹</i>
      </div>   
    </div>
 
</template>
<script lang="ts">
import { defineComponent } from 'vue';


export default defineComponent({
  props: {
    project: {
      type: Object as () => {  // 프로퍼티 타입 정의 (객체)
        project_thumnail: string;
        project_name: string;
        project_summary: string;
        development_environment: string;
        development_period:  {date: string | number; duration_weeks: number;};
        project_description: { overview: string };
        github_url: string;
        site_url: string;
      },
      required: true,  // 필수 prop으로 설정
    },
  }
})
</script>
<style lang="scss">
    .list_item{
        margin-top: 70px;
        margin-left: 20px;
        position: relative;
        .list_body{
            padding: 25px ;
            border-radius: 10px;
            display: flex;
            flex-direction: column;
            justify-content: space-around;
            background-color: white;
            width: 100%;
            height: 64vh;
            color: var(--serve-color);
            .list_txt{
              text-align: left;
              margin-left: 4px;
              .btn_section{
                margin: 15px 0 20px;
                display: flex;
                justify-content: space-between;
                // position: relative;
                h2{
                    font-size: 1.5rem;
                  }
                .btn_wrap{
                  // position: absolute;
                  // top:0;
                  // right:0;
                  // z-index: 99;
                    a{
                        display: inline-block;
                        &:last-child{
                            margin-left: 15px;
                        }
                        img{
                            scale: 90%;
                        }  
                      } 
                    }
                 }
                 p{
                 font-size: 1.1rem;
                 margin-bottom: 20px;
                 word-break: keep-all;
                 }
                 ul{   display: flex;
                       flex-direction: column;
                    li{ display: flex;
                        align-items:self-start;
                        word-break: keep-all;
                        margin-bottom: 10px;
          
                        em{ display: block;
                            width:25%;
                            border:1px solid var(--serve-color);
                            border-radius: 99px;
                            font-style: normal;
                            text-align: center;
                            margin-right: 10px;
                            
                        }
                        div{
                          width: 75%;
                          display: flex;
                          flex-wrap: wrap;
                          span{
                            display: inline-block;
                            &::after{
                              content: '/';
                              display: inline-block;
                              margin: 0 5px;
                            }
                          }
                        }
                    }
                 }

           }
        }
        .taptit{
            position: absolute;
            z-index: -1;
            top:-50px;
            left:0;
            width: 40%;
            padding: 17px 0;
            border-radius: 10px;
            background-color: #5B5B5B;
            i{
                font-style: normal;
            }
        }
    }
 
 
</style>