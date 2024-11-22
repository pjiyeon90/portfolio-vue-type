<template>
    <div class="contact">
      <h3>Contact with me
        <img src="../assets/contact_icon.svg" alt="컨택이모지"/>
      </h3>
      <div class="c_box">
       <p>.socias { 
        <ul>
          <li> email: parkwlfod@naver.com;</li>
          <li> github: pjiyeon90;</li>
          <li> notion: park jiyeon;</li>
          <li> phone: 01023677379;</li>
        </ul>
      }</p>
      </div>
    </div>
  </template>
  
<script lang="ts">


</script>


<style lang="scss">
.contact{
  height: 70vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  border: 1px solid var(--primary-color);
  // background-color: var(--primary-color);
  // color: white;
  h3{
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
          font-size: 1.2rem;
        }
    }
    }
    
  }
}


</style>