import * as elements from "typed-html";
import { Footer } from "./footer";
import { Navbar } from "./navbar";


export function Basehtml({children}:any){
    return (
        <html lang="en">
        <head>
            <meta charset="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <title>Project-Manager</title>
            <link rel="stylesheet" href="/public/main.css" />
            
        </head>
        <body>
            <Navbar />
            <main>{children}</main>
            <Footer />
        </body>
        
        </html>
    )
};
