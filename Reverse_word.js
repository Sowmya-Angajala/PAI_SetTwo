function reverse(str){
    
    let ans=str.split(' ');
    let bag="";
    for(let i=ans.length-1;i>=0;i--){
        bag+=ans[i]+" ";
    }
    console.log(bag);
}
reverse("  the   sky  is blue  ")
