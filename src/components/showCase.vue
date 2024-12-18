<template>
    <div class="container">
        <img class="image" src="@/assets/deal-img/frame.png">
        <div class="deals">
            <p class="miss">Don't miss amazing grocery deals</p>
            <p class="sign">Sign up for daily newsletter</p>
            <div class="subscribe">
                <input class="input" placeholder="Your email address">
                <svg class="input-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4.96714 8.43255C4.74389 8.49635 4.54115 8.61732 4.37901 8.78352C4.21686 8.94972 4.10092 9.15537 4.04266 9.38014C3.9844 9.6049 3.98584 9.84098 4.04683 10.065C4.10782 10.2891 4.22625 10.4933 4.3904 10.6575L6.66535 12.9298V17.321H11.0612L13.3515 19.608C13.4744 19.7321 13.6206 19.8306 13.7817 19.8979C13.9428 19.9652 14.1157 19.9999 14.2903 20C14.4051 19.9998 14.5193 19.985 14.6304 19.956C14.855 19.8994 15.0608 19.7846 15.227 19.6232C15.3932 19.4618 15.514 19.2595 15.5771 19.0365L20.0004 4L4.96714 8.43255ZM5.33786 9.71471L16.6913 6.36763L8.00019 15.0447V12.3777L5.33786 9.71471ZM14.299 18.6652L11.614 15.9875H8.94697L17.6367 7.30508L14.299 18.6652Z" fill="#7E7E7E"/>
                </svg>
                <button class="button">Subscribe</button>
            </div>
        </div>
        <div class="veg">
            <img src="@/assets/deal-img/apple.png"/>
        </div> 
    </div>
</template>
<script>

export default {
    name: 'Deal',
    setup() {
        
    },
}
</script>
<style scoped>
p {
    margin: 0;
}
.container {
    margin-top: 150px;
    padding: 30px;
    display: flex;
    flex-direction: row;
}
.image {
    position:absolute;
    background-color: #FDC040;
    width: 95%;
    height: 550px;
    opacity: 20%;
    border-radius: 30px;
}
.deals {
    padding: 50px 0px 0px 80px;
    position: relative;
    gap: 50px;
    display: flex;
    flex-direction: column;
    justify-content: center;
}
.miss {
    color: #253D4E;
    font-weight: bold;
    font-size: 60px;
}
.sign {
    color: #7E7E7E;
    font-size: 20px;
    font-weight: bold;
}
.subscribe {
    position: relative;
    display: inline-block;
    height: fit-content;
}
.input {
    font-size: 16px;
    border: none;
    padding: 10px 10px 10px 40px;
    border-radius: 20px;
    width: 300px;
}
.input-icon {
  position: absolute;
  top: 50%;
  left: 8px; /* Position the SVG inside the input */
  transform: translateY(-50%);
  pointer-events: none; /* Allow clicks to pass through the SVG */
}
.button {
    border-radius: 20px;
    padding: 10px;
    margin-left: -60px;
    background-color: #3BB77E;
    color: white;
}
.veg {
    position: relative;
}
</style>