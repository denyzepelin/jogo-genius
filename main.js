//TODO:Esse código foi um dos mais importantes quando eu decidi aprender profundamente javascript, vários conceitos e teorias práticas de funcionalidade real que envolve um site de verdade
//tive muita dificuldade em relação a:Array,callback(),prioridade e entre outro, ainda pretendo refazer esse código de maneira mais limpa
const state={
    status:{
        isOn:false,
        sequencePlayer:[],
        sequencemachine:[],
        game:document.querySelectorAll(".gamer"),
        tentativas:5,
    },
    colors:[
        colorblue=document.getElementById("blue"),
        colorgreen=document.getElementById("green"),
        colorred=document.getElementById("red"),
        coloryellow=document.getElementById("yellow"),
        colorpink=document.getElementById("pink")
    ]
}
state.status.game.forEach((el)=>{//essa parte do codigo é responsável pela animação das cores no DOM quando o usuário clica
    el.addEventListener("click",(x)=>{//aqui é necessario criar o Elemento el no forEach para não passar para toda página
    if(state.status.isOn){
    x.target.style.opacity="1"
    setTimeout(()=>{
    x.target.style.opacity="0.3"
    },400)}
    })
})
//teste animation
function sequence(){
    let sequenceN=[]
    for(let i=0;i<5;i++){sequenceN.push(Math.floor(Math.random()*5))}
    return sequenceN
}
function animation(randomColors){
    for(let i=0;i<randomColors.length;i++){
        setTimeout(()=>{
            state.colors[randomColors[i]].style.opacity="1"
                setTimeout(()=>{
                state.colors[randomColors[i]].style.opacity="0.3"
                if(i===randomColors.length-1){
                    state.status.isOn=true
                }
                },(1000))
        },((1000+300)*i))
    }
}
function inputs(x){
    if(state.status.isOn){
        console.log("tennis")
        state.status.tentativas--
        state.status.sequencePlayer.push(x)
    }
    console.log(state.status.tentativas)
    if(state.status.tentativas<=0){
        state.status.isOn=false
    console.log(state.status.sequencePlayer)
    console.log(state.status.sequencemachine)
    }
    if(JSON.stringify(state.status.sequencePlayer)===JSON.stringify(state.status.sequencemachine)){
        window.alert("you Win")
    }//o javascript não funciona comparando dois arrays iguais [1,2,3] == [1,2,3] // false
    //para isso tem 
}
function Start(){
    if(!state.status.isOn){
        state.status.isOn=true
        state.status.sequencePlayer=[]
        state.status.tentativas=5
        state.status.sequencemachine=sequence()
        console.log(state.status.sequencemachine)
        animation(state.status.sequencemachine)
    }
}