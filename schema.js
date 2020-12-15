const schema ={
    "tagName":"form",
    "attributes":{ "name":"json" , "method":"POST","onSUbmit":"return Submit();"},
    "childNodes":[  
        {
          "tagName":"label","innerText":"Email",
          "attributes":{"for":"Email"}
        }, 
        {
            "tagName":"input",
            "attributes":{ "type":"email","name":"Email","pattern":"[a-z0-9._%+-]+@[a-z0-9.-]+[a-z]{2,4}$","required":""}
        },
        {
          "tagName":"label","innerText":"Gender",
          "attributes":{ "for":"Gender"}
        },
        {
         "tagName":"select",
          "attributes":{"name":"Gender","required":"",},
          "childNodes":[
            {
              "tagName":"option","innerText":"Male",
              "attributes":{"value":"Male"}
            },
            {
              "tagName":"option","innerText":"Female",
              "attributes":{ "value":"Female"}
            },
            {
              "tagName":"option", "innerText":"Others",
              "attributes":{ "value":"Others"}
            }
          ]
        },
        {
          "tagName":"label", "innerText":"Magic Number",
          "attributes":{  "for":"MagicNo"}
        },
        {
          "tagName":"input",
          "attributes":{"type":"number", "name":"MagicNo", "value":"1","required":"","min":1}
        },
        {
          "tagName":"label", "innerText":"Password",
          "attributes":{ "for":"Password"}
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

