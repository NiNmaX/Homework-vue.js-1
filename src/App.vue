<template>
      <header class="header">
      <div class="container">
        <div class="header__inner">
          <a class="header__logo" href="#">Online Shop</a>
          <a class="header__burger" href="#">
            <span class="header__burger-span">

            </span>
          </a>
          <nav class="header__menu">
               <ul class="header__menu-list">
      <li class="header__menu-listitem"><a href="#" class="header__menu-listlink"> <img src="./assets/cart-outline.svg" class="cart_icon" title="Buy"> </a></li>
    </ul>
          </nav>
        </div>
        
      </div>
    </header>

  <div id="card" class="cards">
  <div class="cardInCards">
      <div class="card-img">
    <img src="./assets/1.jpg" alt="1">
    <div class="card-title">Cake</div>
  <div class="section">
      <div id="growUp">Buy: <span class="price">{{ obj.count }}</span></div>
    <div>Cost: <strike style="color: red;">5$</strike>  <i style="color: green;">4$</i> <span class="price2">{{ obj.count * 4 }}$</span> </div>
  </div>
    <div id="btn">
      <a @click="increment" class="card-button" title="Add">Add</a>
      <a @click="reset" class="card-button" title="Reset">Reset</a>
    </div>
    </div>
    <div class="card-img">
    <img src="./assets/2.jpg" alt="1">
        <div class="card-title">Toy</div>
          <div class="section">
    <div id="growUp">Buy: <span class="price">{{ object.count2 }}</span></div>
        <div>Cost: <strike style="color: red;">3$</strike>  <i style="color: green;">2$</i> <span class="price2">{{ object.count2 * 2 }}$</span> </div>
  </div>
    <div id="btn">
      <a @click="increment2" class="card-button" title="Add">Add</a>
      <a @click="reset2" class="card-button" title="Reset">Reset</a>
    </div>
    </div>
    <div class="card-img">
    <img src="./assets/3.jpg" alt="1">
    <div class="card-title">Notepad</div>
      <div class="section">
        <div id="growUp">Buy: <span class="price">{{ object3.count3 }}</span></div>
            <div>Cost: <strike style="color: red;">2$</strike>  <i style="color: green;">1$</i>  <span class="price2">{{ object3.count3 * 1 }}$</span> </div>
  </div>
    <div id="btn">
      <a @click="increment3" class="card-button" title="Add">Add</a>
      <a @click="reset3" class="card-button" title="Reset">Reset</a>
    </div>
    </div>
  </div>
  <div class="cardInCards CardInCards">
      <div class="card-img">
    <img src="./assets/4.jpg" alt="1">
        <div class="card-title">Braslet</div>
              <div class="section">
        <div id="growUp">Buy: <span class="price">{{ object4.count4 }}</span></div>
            <div>Cost: <strike style="color: red;">2$</strike>  <i style="color: green;">1$</i>  <span class="price2">{{ object4.count4 * 1 }}$</span> </div>
  </div>
    <div id="btn">
      <a @click="increment4" class="card-button" title="Add">Add</a>
      <a @click="reset4" class="card-button" title="Reset">Reset</a>
    </div>
    </div>
    <div class="card-img">
    <img src="./assets/5.jpg" alt="1">
        <div class="card-title">Product</div>
              <div class="section">
        <div id="growUp">Buy: <span class="price">{{ object5.count5 }}</span></div>
                    <div>Cost: <strike style="color: red;">12$</strike>  <i style="color: green;">7$</i>  <span class="price2">{{ object5.count5 * 7 }}$</span> </div>
  </div>
    <div id="btn">
      <a @click="increment5" class="card-button" title="Add">Add</a>
      <a @click="reset5" class="card-button" title="Reset">Reset</a>
    </div>
    </div>
    <div class="card-img">
    <img src="./assets/6.jpg" alt="1">
        <div class="card-title">Toy</div>
              <div class="section">
        <div id="growUp">Buy: <span class="price">{{ object6.count6 }}</span></div>
        <div>Cost: <strike style="color: red;">9$</strike>  <i style="color: green;">8$</i>  <span class="price2">{{ object6.count6 * 8 }}$</span> </div>
  </div>
    <div id="btn">
      <a @click="increment6" class="card-button" title="Add">Add</a>
      <a @click="reset6" class="card-button" title="Reset">Reset</a>
    </div>
    </div>
  </div>
  </div>
  <footer>
    <a href="https://www.youtube.com/channel/UCnp_Hb3XSE6NJqWvuba916w">
      YouTube
    </a>
    <a href="https://www.instagram.com/park.lia_o7/">
      Instagram
    </a>
    <a href="https://t.me/ParkLia_o7">
      Telegram
    </a>
  </footer>
</template>
<script setup lang="ts">
import { reactive } from "vue";

const obj = reactive({ count: 0 });

const increment = ()=> {
  obj.count++;
}
const reset = ()=> {
  obj.count--;
}

const object = reactive({ count2: 0 });

const increment2 = ()=> {
  object.count2++;
}
const reset2 = ()=> {
  object.count2--;
}
const object3 = reactive({ count3: 0 });

const increment3 = ()=> {
  object3.count3++;
}
const reset3 = ()=> {
  object3.count3--;
}
const object4 = reactive({ count4: 0 });

const increment4 = ()=> {
  object4.count4++;
}
const reset4 = ()=> {
  object4.count4--;
}
const object5 = reactive({ count5: 0 });

const increment5 = ()=> {
  object5.count5++;
}
const reset5 = ()=> {
  object5.count5--;
}
const object6 = reactive({ count6: 0 });

const increment6 = ()=> {
  object6.count6++;
}
const reset6 = ()=> {
  object6.count6--;
}

</script>
<style>
*{
  padding: 0;
  margin: 0;
  border: 0;
}
*,
*::before,
*::after{
  box-sizing: border-box;
}
:focus,
:active,
a:focus,
a:active{
  outline: none;
}
nav,
footer,
header,
aside,
section,
main,
article{
  display: block;
}
html,
body{
  height: 100%;
  width: 100%;
}
input,
button,
textarea{
  font-family:inherit;
}
input::-ms-clear{
  display: none;
}
button{
  cursor: pointer;
}
button::-moz-focus-inner {
  padding:0;
  border:0;
}
a,
a:visited,
a:hover{
  text-decoration: none;
}
ul,
li{
  list-style: none;
}
img{
  vertical-align: top;
}
h1,
h2,
h3,
h4,
h5,
h6{
  font-size:inherit;
  font-weight: 400;
}

/* * Core styles */

body{
  font-family: Arial, Helvetica, sans-serif;
}

.wrapper {
  display: flex;
  flex-direction: column;
  min-height: 100%;
}
.main {
  flex: 1 1 auto;
}
.container {
  max-width: 1200px; /* 1170 */
  margin: 0 auto;
  padding: 0 15px;
}
a {
  display: inline-block;
}

/* * Core styles */

/* * HEADER */

.header {
  position: fixed;
  width: 100%;
  left: 0;
  top: 0;
  z-index: 100;
}
.header::before{
  content: "";
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: deeppink;
  z-index: 2;
}
.header__inner {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  padding: 15px 0;
  /* height: 80px; */
}
.header__logo {
  position: relative;
  z-index: 3;
}
.header__logo-img {
  max-width: 100%;
  border-radius: 50%;
  overflow: hidden;
  display: block;
}
.header__menu-list {
  display: flex;
  flex-wrap: wrap;
  position: relative;
  z-index: 2;
}
.header__menu-listitem {
  margin-left: 20px;
}
.header__menu-listitem:first-child {
  margin-left: 0;
}
.header__menu-listlink {
  font-size: 18px;
  text-transform: uppercase;
  color: #fff;
}

/* * HEADER */

/* * MAIN */

/* * content */

.main {
  padding-top: 100px;
}
.content__text {
  font-size: 16px;
  line-height: 180%;
}
.content__text p{
  margin-bottom: 20px;
}

/* * content */

/* * MAIN */

/* * Media Query */

@media (max-width: 768px) {
  body.lock{
    overflow: hidden;
  }
  .header__inner{
    padding: 10px 0;
  }
  .header__burger {
    display: block;
    position: relative;
    width: 30px;
    height: 20px;
    transition: 0.3s;
    position: relative;
    z-index: 3;
  }
  .header__burger-span {
    display: block;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
    /* height: 2px; */
    height: 3px;
    background: #fff;
    transition: background 0s 0.3s;
  }
  .header__burger-span::before,
  .header__burger-span::after{
    content: "";
    position: absolute;
    display: block;
    left: 0;
    right: 0;
    margin: auto;
    width: 100%;
    height: 2px;
    background-color: #fff;
  }
  .header__burger-span::before {
    top: 10px;
    transition-property: top, transform;
  }
  .header__burger-span::after {
    bottom: 10px;
    transition-property: bottom, transform;
  }
  .header__burger-span::before,
  .header__burger-span::after {
    transition-duration: 0.3s, 0.3s;
    transition-delay: 0.3s, 0s;
  }

  /* * burger--active */

  .header__burger--active .header__burger-span{
    background: transparent;
  }
  .header__burger--active .header__burger-span::before,
  .header__burger--active .header__burger-span::after {
    transition-delay: 0s, 0.3s;
  }
  .header__burger--active .header__burger-span::before {
    top: 0;
    transform: rotate(45deg);
  }
  .header__burger--active .header__burger-span::after {
    bottom: 0;
    transform: rotate(-45deg);
  }

  /* * burger--active */

  /* * menu--active */

  .header__menu {
    position: fixed;
    /* top: -100%; */
    /* left: 0; */
    top: 0;
    left: -100%;
    height: 100%;
    width: 100%;
    background-color: rgba(0, 0, 0, 0.8);
    overflow: auto;
    padding: 80px 15px 20px;
    transition: .6s;
  }
  .header__menu--active {
    /* top: 0; */
    left: 0;
  }

  /* * menu--active */


  .header__menu-list{
    display: block;
  }
  .header__menu-listitem{
    margin-left: 0;
    margin-bottom: 20px;
  }
  .header__menu-listitem:last-child{
    margin-bottom: 0;
  }
  .header__menu-listlink{
    font-size: 24px;
  }
  .main{
    padding-top: 80px;
  }
}

/* * Media Query */
</style>