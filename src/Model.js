export class Model {
  constructor(){
    this.data = [{
      id : 0,
      title : "Hello",
      content : "This Is Content"
    },{
      id : 1,
      title : "aa",
      content : "bb"
    }]
  }
  add(value){
    this.data.push({
      id : this.data.length
      ,...value
    })
  }
  del(id){
    var find = this.data.find(k => k.id == id)
    var vt = this.data.indexOf(find)
    this.data.splice(vt,1)
  }
  edit(id,newValue){
    var find = this.data.find(k => k.id == id)
    var vt = this.data.indexOf(find)
    this.data[vt] = newValue
  }
  get(id){
    var find = this.data.find(k => k.id == value)
    var vt = this.data.indexOf(find)
    return this.data[vt]
  }
  
}
