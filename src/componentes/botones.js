/*export class botones {

    static boton(texto, clase, evento){
        return `
            <style>
            .btn {
                padding: 10px;
                background-color: #676767;
                color: #ffffff;
                border: 0px;
                border-radius: 5px;
                font-family: Trebuchet, Helvetica;
                font-size:14px;
                box-shadows: 0px 0px 5px #454545;
                margin-rigth: 5px;
            }
            btn:hover{
                background-color: #999999;
            }
            </style>
            <button class="btn ${clase}" ${evento}>${texto}</button>
        `;
    }
    

}
app.appendChild(Componentes.boton('soy un boton', 'btn-info', 'onclick="alert(\'hola mundo\')"'));*/ 

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
