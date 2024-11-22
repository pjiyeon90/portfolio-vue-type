<template>
    <div class="popup_wrap">
        <h2>{{ project.project_name }}</h2>
        <ul>
            <li>
                <em>개발 기간</em>
                <span>{{ project.development_period.date }} (약 {{ project.development_period.duration_weeks }}주)</span>
            </li>
            <li>
                <em>팀원 구성</em>
                <div>
                    <span v-for="(item,idx) in project.team_composition" :key="idx">
                        {{item.name}} : {{item.role}} 
                    </span>
                </div>
            </li>
            <li>
                <em>개발 환경</em>
                <span v-for="(item,idx) in project.development_environment" :key="idx">
                  / {{item}}     
                </span>
            </li>
        </ul>
        <p>{{ project.project_description.overview }}
        </p>
        <div class="btn_wrap">
               <a :href="project.github_url" class="git_icon" target="_blank" >깃허브 바로가기</a> 
               <a :href="project.site_url" class="site_icon" target="_blank" >서비스 바로가기</a> 
        </div>

        <div class="team_explain">
           <h3>팀 프로젝트</h3>
           <section class="fir-sec">
            <h4>주요 기능 및 특징</h4>
            <ul>
                <li v-for="(item,idx) in project.project_description.features" :key="idx">
                    <span>-</span> {{item}}
                </li>
            </ul>
           </section>
           <section class="second-sec">
            <h4>팀내 기여도
                <span>(메인 페이지 / 서브 : 구조치료ㆍ실적)</span>
            </h4>
            <ul>
               <li v-for="(item,idx) in project.project_description.individual" :key="idx">
                    <div>{{item.title}}</div>
                    <p v-for="(item2,idx2) in item.todo" :key="idx2" class="second-p"><span>-</span>{{item2}}</p>
                </li> 
            
            </ul>
           </section>
           <section class="third-sec">
            <h4>트러블 슈팅</h4>
            <ul>
                <li v-for="(item,idx) in project.troubleshooting" :key="idx">
                    <div>[{{ item.title }}]</div>
                    <p>{{ item.problem }}</p>
                    <span> <i>ㄴ</i>{{ item.solution }}</span>
                </li>
            </ul>
           </section>
           <section class="fourth-sec">
            <h4>로고 작업</h4>
            <div>
                <img v-for="(item,k) in project.logo.photo" :key="k" :src="require(`../assets/${item}`)" alt="프로젝트 로고">
            </div>
           </section>
           <section class="fifth-sec">
            <h4>작업 화면</h4>
            <ul>
                <li ><img scr="" alt=""/></li>
            </ul>
           </section>
           
        </div>
       <button class="morebtn">더보기</button>
    </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';


export default defineComponent({
  props: {
    project: {
      type: Object as () => {  // 프로퍼티 타입 정의 (객체)
        project_name: string;
        development_period:  {date: string | number; duration_weeks: number;};
        development_environment: string;
        features: string[];
        project_description:
        { overview: string;
          features: string;
          individual:{title:string; todo:string[]}[];
        };
        team_composition: [{name:string; role: string;}];
        team_contribution:{title:string; done_page:string;};
        troubleshooting:[{title:string; problem: string; solution: string;}]
        // team_contribution:{title:string, done_page:string;}[];
        logo:{ photo: string[] };
        github_url: string;
        site_url: string;
      },
      required: true,  // 필수 prop으로 설정
    },
  }
})
</script>
<style lang="scss">
    .popup_wrap{
        height: auto;
        padding: 3% 7%;
       h2{font-size: 2.3rem;
          margin-bottom: 30px;
         }
       > ul{
        margin: 90px 0;
        li{
            display: flex;
            align-items: center;
            margin-bottom: 5px;
            em{
                width: 12%;
                font-style: normal;
                padding: 3px 15px;
                border: 1px solid var(--serve-color);
                border-radius: 99px;
                margin-right: 20px;
            }
            div{
                width:88%;
                display: flex;
                flex-wrap: wrap;
                text-align: left;
               span{
                width: 50%;
                } 
            }
            
          }
       }
       > p{
        text-align: left;
        font-size: 1.2rem;
        }
        .btn_wrap{
           margin-top: 60px;
           display: flex;
           align-items: center;
           justify-content: center;
            a{  
                border: 1px solid var(--serve-color);
                border-radius: 10px;
                padding: 0 20px;
                display: inline-block;
                display: flex;
                align-items: center;
                color: #5C5C5C;
                &:first-child{
                    margin-right: 20px;
                }
            }
            .git_icon::before{
                content: url("../assets/git_icon.svg");
                margin: 5px 5px 0 0;
             } 
            .site_icon::before{
                content:url("../assets/site_icon.svg");
                margin: 5px 5px 0 0;
            }
        }
        .team_explain{
            margin-top: 90px;
            h3{
                text-align: left;
                font-size: 1.9rem;
            }
            section{
                margin-top: 50px;
                text-align: left;
                h4{
                    font-size: 1.5rem;
                    text-align: left;
                }
                > ul{
                    margin-top: 20px;
                     > li{
                        font-size: 1.1rem;       
                    }
                }
            }
            .fir-sec{
                h4{
                   &::before{
                    margin-right: 20px;
                    display: inline-block;
                    content:url("../assets/mainskill.svg");
                    vertical-align: middle;
                  } 
                }
                ul{
                    li{ 
                        display: flex;
                        span{
                            margin-right: 5px;
                            display: block;
                        }
                    }
                }
            }
            .second-sec{
                h4{
                    display: flex;
                    align-items: center;
                    span{
                        display: block;
                        margin-left: 10px;
                        font-size: 1.2rem;
                        font-weight: 400;
                        letter-spacing: -1%;
                    }
                   &::before{
                    margin-right: 20px;
                    display: inline-block;
                    content:url("../assets/teamindivi.svg");
                    vertical-align: middle;
                  } 
                }
                ul{
                    display: flex;
                    flex-direction: column;
                    li{ 
                        div{
                            padding: 10px 0 10px 30px;
                            width:100%;
                            background-color: #D9D9D9;
                            margin: 20px 0;
                        }
                        p{  width: 95%;
                            line-height: 1.7rem;
                            margin-left: 20px;
                            display: flex;
                        span{
                            display: block;
                            padding-right: 10px;
                        }
                        }
                           
                    }
                }
            }
            .third-sec{
                h4{
                   &::before{
                    margin-right: 20px;
                    display: inline-block;
                    content:url("../assets/troubleshoot.svg");
                    vertical-align: middle;
                  }
                }
                ul{    
                    display: flex;
                    flex-direction: column;
                    li{
                      margin-bottom: 15px;
                      line-height: 1.6rem;
                        div{
                            margin-bottom: 4px;
                          }
                        p{
                        padding:3px 0 3px 10px;
                        margin: 10px 0;
                        background-color: #ddd;
                        }
                        span{
                            display: flex;
                        
                            margin: 10px 0;
                            i{  font-style: normal;
                                display: block;
                                margin-right: 5px;
                            }
                        }
                    }
                }
            }
            .fourth-sec{
                h4{
                   &::before{
                    margin-right: 20px;
                    display: inline-block;
                    content:url("../assets/logomade.svg");
                    vertical-align: middle;
                  } 
                }
            }
            .fifth-sec{
                h4{
                   &::before{
                    margin-right: 20px;
                    display: inline-block;
                    content:url("../assets/monitor.svg");
                    vertical-align: middle;
                  } 
                }
                ul{
                    display: flex;
                    justify-content:space-between;
                    flex-wrap: wrap;
                    li{
                        display: flex;
                        width:32%;
                        background-color: #D9D9D9;
                        height: auto;
                    }
                }
            }
            
            
       }
       .morebtn{
        border-radius: 99px;
        padding: 12px 60px;
        color: white;
        background-color: var(--primary-color);
       }
}
 
</style>