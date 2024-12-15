async function getData(){
const data= await fetch("https://fakestoreapi.com/products").then(res=>res.json())
console.log(data)

// for(i=0;i<data.length;i++){
//     const img=document.createElement("img")
//     img.src=`${data[i].image}`
//     console.log(img)
//     document.body.appendChild(img)
// }
// }
// getData()

let colors=["red","blue","green","pink","purple","yellow","red","blue","green","pink","purple","yellow","red","blue","green","pink","purple","yellow","red","blue","green","pink","purple","yellow"]

let k=0
for(i=0;i<data.length;i++){
    // let Box=document.getElementById("container")
    // console.log(Box)
    const box=document.createElement("div")
   box.innerHTML =`<img src= "${data[i].image}" width="200" height="200"/> <p>${data[i].title}</p> <span>${data[i].price}</span>  `
   console.log(box)
   box.style.backgroundColor=colors[k]
   box.style.border="2px solid black"
   box.style.width="200px"
   box.style.display="flex"
   box.style.flexDirection="column"
   // box.style.flexWrap="wrap"
   box.style.justifyContent="center"
   box.style.alignItems="center"
   box.style.textAlign="center"
   box.style.padding="10px"
   box.style.margin="30px"
   box.style.borderRadius="15px"
   // document.body.display="flex"
//    document.body.gap="30px"
//    document.body.display="flex"
   
//    box.style.flexDirection="column"
document.body.appendChild(box)
// body.style.display="flex"
// body.style.flexWrap="wrap"

//    document.Box.appendChild(box)
   k++
}
}
getData()