


let prev_btn=document.querySelector("#prev_btn")
let next_btn=document.querySelector("#next_btn")
let feedbackinnercard1=document.querySelector("#feedbackinnercard1")
let feedbackinnercard2=document.querySelector("#feedbackinnercard2")
let feedbackinnercard3=document.querySelector("#feedbackinnercard3")



let count=1


const nextcard=()=>{
    if(count<3){
        prev_btn.style.backgroundColor="black"
        
        if (count==1){
            
            feedbackinnercard1.style.position="absolute"
            feedbackinnercard1.style.visibility="hidden"
            feedbackinnercard3.style.position="absolute"
            feedbackinnercard3.style.visibility="hidden"
            feedbackinnercard2.style.position="relative"
            feedbackinnercard2.style.visibility="visible"
            
        }
        if (count==2){
            feedbackinnercard1.style.position="absolute"
            feedbackinnercard1.style.visibility="hidden"
            feedbackinnercard2.style.position="absolute"
            feedbackinnercard2.style.visibility="hidden"
            feedbackinnercard3.style.position="relative"
            feedbackinnercard3.style.visibility="visible"
            next_btn.style.backgroundColor="gray"

            
        }
        count++
        console.log(count)
        
    }
}

const previouscard=()=>{
    if (count>1){
        next_btn.style.backgroundColor="black"
        if (count==3){
            feedbackinnercard1.style.position="absolute"
            feedbackinnercard1.style.visibility="hidden"
            feedbackinnercard3.style.position="absolute"
            feedbackinnercard3.style.visibility="hidden"
            feedbackinnercard2.style.position="relative"
            feedbackinnercard2.style.visibility="visible"


            

        }
        if (count==2){
            feedbackinnercard2.style.position="absolute"
            feedbackinnercard2.style.visibility="hidden"
            feedbackinnercard3.style.position="absolute"
            feedbackinnercard3.style.visibility="hidden"
            feedbackinnercard1.style.position="relative"
            feedbackinnercard1.style.visibility="visible"
            prev_btn.style.backgroundColor="gray"

        }
        count--
        console.log(count)

    }
}

prev_btn.addEventListener("click",previouscard)
next_btn.addEventListener("click",nextcard)