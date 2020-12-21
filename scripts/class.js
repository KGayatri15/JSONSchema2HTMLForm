class process{
    static json2HTML(form){
            var output = document.createElement(form.tagName);
            process.assignAttributes(form ,output);
            if(form.innerText){output.innerText = form.innerText;}
            if(form.childNodes){ process.assignChildNodes(form.childNodes,output,process.json2HTML);}          
        return output;
    }
    static assignAttributes(obj,objResponse){
        if (!obj) return;
        if (!objResponse) {var objResponse = {};}
        for(var key in obj){
            if(key !== "tagName"&& key !== "childNodes")
                objResponse = process.setData(obj ,objResponse ,key);
        }
        return objResponse;
    }
    static assignChildNodes( child,childResponse,callback){
        if (!child) return;
        if (!childResponse) { var childResponse = []; };
        for(var i = 0;i < child.length;i++){
            childResponse = process.setData(child,childResponse,i,callback);
        }
        return childResponse;
    }
    static setData(input,output,key,callback={}){
      if(output instanceof Array){
          if(input[key].nodeType === Node.TEXT_NODE)
              output.push(input[key].textContent);
          else if(typeof callback === "function")    
              output.push(callback(input[key]));
      }
      if(typeof output === 'object'&& input[key].value!== undefined)
          output[input[key].name] = input[key].value;
      if(output instanceof HTMLElement)
          if(typeof key === 'number' && typeof callback === "function")
             output.appendChild(callback(input[key]));
          else 
            output.setAttribute(key,input[key]);
      return output;
    }
    static HTML2json(nodeE){
        const value = {
            tagName:nodeE.tagName,
            attributes:process.assignAttributes(nodeE.attributes,{}),
            childNodes:process.assignChildNodes(nodeE.childNodes,[],process.HTML2json),
          }
          return value;   
    }
}