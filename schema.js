const schema ={
    "tagName":"form",
    "attributes":{ "name":"json" , "method":"POST","onSUbmit":"return Submit();"},
    "childNodes":[  
        {
          "tagName":"label",
          "attributes":{"for":"Email"},
          "childNodes":[{ "nodeType":3, "textContent":"Email" }]
        }, 
        {
            "tagName":"input",
            "attributes":{ "type":"email","name":"Email","pattern":"[a-z0-9._%+-]+@[a-z0-9.-]+[a-z]{2,4}$","required":""}
        },
        {
          "tagName":"label",
          "attributes":{ "for":"Gender"},
          "childNodes":[{ "nodeType":3,"textContent":"Gender" }]
        },
        {
         "tagName":"select",
          "attributes":{"name":"Gender","required":"",},
          "childNodes":[
            {
              "tagName":"option",
              "attributes":{"value":"Male"},
              "childNodes":[{ "nodeType":3,"textContent":"Male" }]
            },
            {
              "tagName":"option",
              "attributes":{ "value":"Female"},
              "childNodes":[{ "nodeType":3,"textContent":"Female" }]
            },
            {
              "tagName":"option",
              "attributes":{ "value":"Others"},
              "childNodes":[{ "nodeType":3,"textContent":"Others" }]
            }
          ]
        },
        {
          "tagName":"label",
          "attributes":{  "for":"MagicNo"},
          "childNodes":[{  "nodeType":3,  "textContent":"Magic Number" }]
        },
        {
          "tagName":"input",
          "attributes":{"type":"number", "name":"MagicNo", "value":"1","required":"","min":1}
        },
        {
          "tagName":"label",
          "attributes":{ "for":"Password"},
          "childNodes":[{ "nodeType":3,"textContent":"Password" }]
        },
        {
          "tagName":"input",
          "attributes":{ "type":"password", "name":"Password","minLength":6,"required":""} 
        },
        {
          "tagName":"input",
          "attributes":{ "type":"submit","value":"Submit","name":"Submit"}
        }
      ]
}



