<template>
    <div class="menu">Menu
        <ul>
            <li class="section1">Section 1</li>
            <li class="section2">Section 2</li>
            <li class="section3">Section 3</li>
            <li class="section4">Section 4</li>
        </ul>
    </div>
</template>
<script>
export default {
    name: 'Menu',
}
</script>
<style scoped>
.menu {
    background-color: #a13f3f;
    display: flex;
    padding: 10px;
    width: fit-content;
    flex-direction: column;
    align-items: center;
}
ul {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0;
}
li {
    list-style: none;
}
.section1, .section2, .section3, .section4 {
    background-color: #793667;
    border: 1px solid black;
    padding: 10px;
}
</style>