var pattern = "ABCAAB"
rc = {}



for (c of pattern){
    if(c in rc){
        console.log(`${c} is the first recursive charector`);
        break
    }else{
        rc[c]=1
    }
}