var form = {
  "tagName":"form",
  "name":"json" ,
  "method":"POST",
  "onSubmit":"return Submit();",
  "childNodes":[
         {
           "tagName":"label",
           "innerText":"Username",
           "for":"Username"
         },
         {
           "tagName":"input",
           "type":"text",
           "maxLength":40,
           "required":"",
           "name":"Username",
         },
         {
          "tagName":"label",
          "innerText":"Email",
          "for":"Email"
        },
         {
           "tagName":"input",
           "type":"email",
           "pattern":"[a-z0-9._%+-]+@[a-z0-9.-]+[a-z]{2,4}$",
          "required":"",
           "name":"Email"
         },
         {
          "tagName":"label",
          "innerText":"Password",
          "for":"Password"
        },
         {
           "tagName":"input",
           "type":"password",
           "minLength":6,
           "required":"",
           "name":"Password"
         },
         {
             "tagName":"input",
              "type":"submit",
              "value":"submit",
        }
   ]
 }
