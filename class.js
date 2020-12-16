class process{
    static json2HTML(schema){
          if(schema.nodeType === 3){
            var  output = document.createTextNode(schema.textContent);
            if(schema.childNodes){ process.assignChildNodes(schema.childNodes,output);}
          }else{
            var output = document.createElement(schema.tagName);
            if(schema.attributes){ process.assignAttributes(schema.attributes ,output);}
            if(schema.childNodes){ process.assignChildNodes(schema.childNodes,output);}
          }
        return output;
    }
    static assignAttributes(obj,objResponse){
        if (!obj) return;
        if (!objResponse) { var objResponse = {}; };
        for(var key in obj){
            objResponse = process.setData(obj ,objResponse ,key);
        }
        return objResponse;
    }
    static assignChildNodes( child,childResponse){
        if (!child) return;
        if (!childResponse) { var childResponse = []; };
        for(var i = 0;i < child.length;i++){
            childResponse = process.setData(child,childResponse,i);
        }
        return childResponse;
    }
    static setData(input,output,key){
      if(output instanceof Array){
          if(input[key].nodeType === Node.TEXT_NODE)
              output.push(input[key].textContent);
          else
              output.push(process.HTML2json(input[key]));
      }
      if(typeof output === 'object'&& input[key].value!== undefined)
          output[input[key].name] = input[key].value;
      if(output instanceof HTMLElement)
          if(typeof key === 'number')
             output.appendChild(process.json2HTML(input[key]));
          else
            output.setAttribute(key,input[key]);
      return output;
    }
    static HTML2json(nodeE){
        const value = {
          tagName:nodeE.tagName,
          attributes:process.assignAttributes(nodeE.attributes,{}),
          childNodes:process.assignChildNodes(nodeE.childNodes,[]),
          nodeType:nodeE.nodeType
        }
        return value;   
    }
}
 
