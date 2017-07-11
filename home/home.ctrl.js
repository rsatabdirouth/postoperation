angular.module('mainApp')
.controller('homeCtrl',function($scope,appService,$location){
    var vm= this;
    vm.title="Holiday Date";
    vm.pageSize=5;
    vm.totalItem=25;
    vm.pageCount=0;
    vm.currentPage=1;
    vm.pages=[];
    vm.pagedpost=[];
    vm.posts=[];
    vm.currentPost=null;
    vm.pageChange=pageChange;
    function activate(){
        appService.getpost().then(function(res){vm.posts=res.data;console.log('data available',vm.posts);})
       // vm.totalItem=vm.posts.length;
        console.log('totalitems',vm.totalItem);
        vm.pagesCount=Math.ceil(vm.totalItem/vm.pageSize);
        for(var i=1; i<=vm.pagesCount; i++)
            {vm.pages.push(i);}
        pageChange(vm.pages[--vm.currentPage]);
    }
    activate();
      function pageChange(page){
        console.log('the page pased is',page);
        vm.pagedPost = [];
        vm.currentPage = page;
        index = (page - 1) * vm.pageSize;   
        console.log('the index is',index);
        var trackIndex = 0;
            for(var i = index; i <= vm.posts.length; i++){
                vm.pagedPost.push(vm.posts[i]);
                trackIndex++;
                if(trackIndex == vm.pageSize){
                    break;
                }
        
    }
      
    }
})




