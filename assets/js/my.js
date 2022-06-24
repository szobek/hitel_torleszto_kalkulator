const call = (body,url,method)=>{
    $ajax()
}

const arrows = [...document.querySelectorAll(".arrow")]
arrows.map(arrow=>{
    arrow.addEventListener("click",()=>{
        const id = `#${arrow.getAttribute("data-cid")}`
        const element = document.querySelector(id)
        if(element.classList.contains("collapse")){
            element.classList.remove("collapse")
            arrow.setAttribute("src","./assets/img/arrow_up.svg")
        }else{
            element.classList.add("collapse")
            arrow.setAttribute("src","./assets/img/arrow_down.svg")
        }
    })
})

let mf,mc,mt

const setVars = ()=>{
    
mt = document.getElementById("modal-title")
mc = document.getElementById("modal-content")
mf = document.getElementById("modal-footer")
}


const setTextReg = ()=>{
    setVars()
    mt.innerText = "Regisztráció"
    mc.innerHTML = `<form>
    <div class="form-group">
      <label for="email">Email </label>
      <input type="email" class="form-control" id="email" placeholder="Enter email" style="background-image:none">
    </div>
  </form>`
    mf.innerHTML = `<button class="default-button ">Regisztráció</button>`
}

const setTextLogin = ()=>{
    setVars()
    mt.innerText = "Bejelentkezés"
    mc.innerHTML = `<form>
    <div class="form-group">
      <label for="email">Email cím* </label>
      <input type="email" class="form-control" id="email"  style="background-image:none">
    </div>
    <div class="form-group">
      <label for="pass">Jelszó* </label>
      <input type="password" class="form-control" id="pass" style="background-image:none">
    </div>
  </form>
  <p class="text-center text-green">Elfelejtett jelszó</p>
  `
    mf.innerHTML = `<button class="default-button ">Bejelentkezés</button>`
}

const setTextModifyPassword = ()=>{
    setVars()
    mt.innerText = "Jelszó módosítás"
    mc.innerHTML = `<form>
    <div class="form-group">
      <label for="email">Jelenlegi jelszó* </label>
      <input type="password" class="form-control" id="oldpass" >
    </div>
    <div class="form-group">
      <label for="pass">Új jelszó* </label>
      <input type="password" class="form-control" id="newpass" >
    </div>
    <div class="form-group">
      <label for="pass">Új jelszó megerősítése* </label>
      <input type="password" class="form-control" id="newpass2">
    </div>
  </form>
  `
    mf.innerHTML = `<button class="default-button " onclick="modifyOldPassword()">Mentés</button>`   

}
const modifyOldPassword=()=>{
if(document.getElementById("newpass").value === document.getElementById("newpass2").value){
    alert("ok")
}else{
    alert("Nem egyeznek az új jelszavak")
}
}

const logoutFn = ()=>{
    alert("logout")
    location.reload()
}