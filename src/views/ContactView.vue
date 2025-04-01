<template>
    <div class="contact">
      <h3>Contact with me
        <img src="../assets/contact_icon.svg" alt="컨택이모지"/>
      </h3>
      <div class="c_box">
       <div>.socias { 
        <ul>
          <li> email: parkwlfod@naver.com;</li>
          <li> github: pjiyeon90;</li>
          <li> notion: park jiyeon;</li>
          <li> phone: 01023677379;</li>
        </ul>
      }</div>
      </div>
    </div>
  </template>
  
<script setup lang="ts">


</script>


<style lang="scss">
.contact{
  height: 70vh;
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
  .c_box{
    display: flex;
    justify-content: center;
    text-align: left;
    margin-top: 30px;
    p{
      padding: 0 30px;
      font-size: 1.8rem;
      ul{padding-left: 50px;
        margin-top: 20px;
        li{
          font-size: 1rem;
          font-weight: 100;
          color: rgb(97, 97, 97);
        }
    }
    }
  }
}
@media screen and (min-width: 360px) and (max-width: 480px){
.contact{
  h3{
    flex-wrap: wrap;
    img{display: none;}

  }
}

    }


</style>