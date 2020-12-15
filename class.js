class process{
    static json2HTML(schema){
          var output = document.createElement(schema.tagName);
          if(schema.attributes){ process.assignAttributes(schema.attributes ,output,"set");}
          if(schema.innerText){output.appendChild(document.createTextNode(schema.innerText));}
          if(schema.childNodes){ process.assignChildNodes(schema.childNodes,output,"set");}
        return output;
    }
    static assignAttributes(obj,objResponse,operation){
        if (!obj || obj === undefined) return;
        if (!objResponse) { var objResponse = {}; };
        for(var key in obj){
          if(operation === "set")
            objResponse.setAttribute(key , obj[key]);
          if(operation === "get" && obj[key].value!== undefined){
            objResponse[obj[key].name] = obj[key].value;
          }
        }
        return objResponse;
    }
    static assignChildNodes( child,childResponse,operation){
        if (!child) return;
        if (!childResponse) { var childResponse = []; };
        for(var i = 0;i < child.length;i++){
          if(operation === "set")
            childResponse.appendChild(process.json2HTML(child[i]));
          if(operation === "get")
            childResponse.push(process.HTML2json(child[i]));
        }
        return childResponse;
    }
    static HTML2json(nodeE){
      
        return {
          tagName:nodeE.tagName,
          attributes:process.assignAttributes(nodeE.attributes,{},"get"),
          childNodes:process.assignChildNodes(nodeE.childNodes,[],"get"),
        };
        
       
    }
}
