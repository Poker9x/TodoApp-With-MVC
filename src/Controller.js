export class Controller {
  constructor(model,view){
    this.view = new view();
    this.model = new model();
    
    this.view.addNote(this.handelAddNote.bind(this));
    this.view.delNote(this.handelDelNote.bind(this));
    this.onList()
  }
  onList(){
    this.view.List(this.model.data);
  }
  handelAddNote(value){
    this.model.add(value)
    this.onList()
  }
  handelDelNote(id,value){
    if(value){
      this.model.edit(id,value)
    } else {
      this.model.del(id)
    }
    this.onList()
  }
  
}