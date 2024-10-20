const notFound = (req, res) => {
   res.status(404).send(
      `
         <html>
            <head>
               <title>404 Not Found</title>
                  <style>
                     body {
                           margin: 0;
                           padding-top : 50px;
                           text-align: center;
                           font-family: Arial, sans-serif;
                           background-color: #f0f0f0;
                           color: #333;
                     }
                     .sad-cat {
                           white-space: pre;
                           font-family: monospace;
                           font-wight: bold;
                           line-height: 1.2;
                     }
                  </style>
            </head>
            <body>
               <h1>404 - Not Found</h1>
               <p>Here's a sad cat for you:</p>
               <div class="sad-cat">
                   /\_/\  
                  ( o.o )
                  > ^ <
               </div>
            </body>
         </html>
      `
   );
};

module.exports = notFound;