<template>
  <div id="app">
    
    <router-view />
  </div>
</template>


<style lang="less">
  #app,body,html{
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100%;
  }

  .el-table--scrollable-x .el-table__body-wrapper::-webkit-scrollbar {
      width: 6px; 
      height: 0px; 
    }
    .el-table--scrollable-x .el-table__body-wrapper::-webkit-scrollbar-thumb {
        background-color: #ddd;
        border-radius: 3px;
      }


</style>
