export class View {
  constructor(){
    this.app = this.Sel("#root");
    this.form = this.Element("form",{className : "form"})
    this.title = this.Element("input",{
      type : "text",
      placeholder : "Nhập Tiêu Đề ..."
    });
    this.content = this.Element("textarea",{
      placeholder : "Nhập Nội Dung ..."
    });
    this.button = this.Element("button",{
      innerHTML : "Thêm"
    })
    this.body = this.Element("div",{className:"body"})
    
    
    
    this.app.appendChild(this.form);
    this.app.appendChild(this.body)
    this.form.appendChild(this.title);
    this.form.appendChild(this.content);
    this.form.appendChild(this.button);
  }
  Element(name,ob){
    var el = document.createElement(name)
    if(ob){
      for(var i in ob){
        el[i] = ob[i]
      }
    }
    return el;
  }
  Sel(el){
    return document.querySelector(el)
  }
  List(data){
    while (this.body.firstChild) {
      this.body.removeChild(this.body.firstChild)
    }
    if(data.length == 0){
      var div = this.Element("div",{
        innerHTML : "Chưa Có Ghi Chú Nào !?"
      });
      
      div.style.padding = "10px"
      this.body.appendChild(div)
    } else {
      data.forEach(k => {
        var list = this.Element("div",{className:"list"})
        var li = this.Element("div",{
          className:"li",
          id : k.id+"|"+k.content
        })
        var bt = this.Element("div",{
          className : "bt"
        });
        var btEdit = this.Element("button",{
          className:"btEdit",
          innerHTML : "Edit",
          id : k.id
        })
        var btDel = this.Element("button",{
          className:"del",
          innerHTML : "X",
          id : k.id
        })
        
        
        li.innerHTML = k.title;
        list.appendChild(li)
        list.appendChild(bt)
        bt.appendChild(btDel);
        bt.appendChild(btEdit);
        this.body.appendChild(list)
      })
    }
  }
  _getNote(){
    return {
      title : this.title.value.trim(),
      content : this.content.value.trim(),
    }
  }
  _resetNote(){
    this.title.value = "";
    this.content.value = "";
  }
  addNote(handel){
    var that = this;
    this.button.onclick = (e) => {
      e.preventDefault()
      handel(that._getNote())
      that._resetNote();
    };
  }
  delNote(handel){
    var that = this;
    this.body.addEventListener("click",e => {
      if(e.target.className == "del"){
        handel(e.target.id)
      } else if(e.target.className == "btEdit"){
        var html = e.target.parentNode.previousElementSibling
        
        var bg = this.Element("div",{
          className : "bg"
        });
        var box = this.Element("div",{
          className : "box",
        })
        var etitle = this.Element("input",{
          type : "text",
          value : html.innerHTML
        })
        var econt = this.Element("textarea",{
          value : html.id.split("|")[1]
        })
        var btOk = this.Element("button",{
          innerHTML : "OK"
        })
        var btClose = this.Element("button",{
          innerHTML : "Close"
        })
        document.body.appendChild(bg)
        btClose.onclick = () => bg.remove()
        btOk.onclick = () => {
          html.innerHTML = etitle.value.trim()
          html.id = html.id.split("|")[0]+"|"+econt.value.trim()
          bg.remove();
          handel(html.id.split("|")[0],{
            title : etitle.value.trim(),
            content : econt.value.trim()
          })
        }
        bg.appendChild(box)
        box.appendChild(etitle)
        box.appendChild(econt)
        box.appendChild(btOk)
        box.appendChild(btClose)
        
      }
    })
  }
  
  
}
