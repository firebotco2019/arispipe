
export const contenedor=(idbtn) => {
    const content=document.createElement('div');
    content.id=idbtn;
    content.className="fixed-left  redes-sociales";
    return content;
}

export const botones=(btnid, idbtn, redes)=> {
    const btn = document.createElement('button');
    btn.id=btnid;
    btn.className="btn btn-dark mb-1 shadow-sm ";
    btn.innerHTML=`
     
    <i class="${redes}"></i>
  
  `;
   document.getElementById(idbtn).appendChild(btn);
}
