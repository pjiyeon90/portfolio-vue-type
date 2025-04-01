<template>
  <div class="about">
    <h3>About me
        <img src="../assets/about.svg" alt="어바웃이모지"/>
      </h3>
      <div class="about_box">
        <ul>
          <li>안녕하세요. 디자인하는 퍼블리셔 박지연입니다.</li>
          <li class="li-mt">생각의 경계를 넘어서는 유연한 사고와 혁신적인 발상으로 무한한
              가능성을 만들어내고 싶습니다.
          </li>
          <li class="li-mt">작은 단위의 컴포넌트를 재사용하고 확장성을 고려해 작업하는 것을 좋아하며
              새롭게 배운 기술을 업무에 적용해 더 나은 서비스를 구축하는 것을 목표로 정진합니다.
          </li>
          <li> 저는 제 일을 좋아하고 부족한 부분을 채워나가는 것이 즐겁습니다.</li>
          <li class="li-mt"> 공부한 것을 팀원들과 나누고 공유하며 더 나은 서비스를 위해 고민한다면 추후 좋은 개발, 좋은 서비스, 완벽한 서비스를 만들어나가는 열쇠라고 생각합니다.
          </li>
          <li>완벽하지 않은 앞으로의 앞날에 더 많은 것을 채워가고 싶습니다.</li>
        </ul>
         <div class="about_btn">
          <a href="https://www.notion.so/1490afe8baed800ebdf7f9737aa1428e?pvs=4" target="_blank">노션 보러가기</a>
          <a href="./resume-jiyeonpark.pdf" download="jiyeon_resume">이력서 다운로드</a>
          </div>
       </div>
       
    
  </div> <!-- about -->
</template>

<script lang="ts">


</script>


<style lang="scss">
.about{
  height: auto;
  padding: 50px 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 50px auto 0;
  border: 1px solid var(--primary-color);
  h3{
    color: var(--primary-color);
    font-size: 2.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    img{
      display: block;
      margin-left: 15px;
    }
  }
  .about_box{
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: left;
    margin-top: 30px;
    ul{
      text-align: center;
      li{
        font-size: 1.1rem;
        line-height: 1.5rem;
       }
       .li-mt{
        margin-top: 20px;
      }
    }
  .about_btn{
    margin: 50px auto 0;
    a{
      border: 1px solid #ddd;
      padding: 10px ;
      display: inline-block;
      margin-right: 10px;
    }
  }
    }
  
    
  
}
@media screen and (min-width: 360px) and (max-width: 1280px){
 
.about_box{
  ul{
    margin: 0 30px;
  }
}

}


</style>