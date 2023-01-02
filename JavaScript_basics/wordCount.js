var text = "hello hello hai hai"

wc = {}
var words = text.split(" ").map(w=> w in wc ? wc[w]+=1 : wc[w]=1)

console.log(wc);


// for (w in words){
//     if (w in wc){
//         wc[w]+=1
//     }else{
//         wc[w]=1
//     }
// }
