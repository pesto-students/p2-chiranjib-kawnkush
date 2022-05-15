**Week-1 Assignment**

When a user enters the URL, below process is initiated by the browser.

![Screenshot_6](https://user-images.githubusercontent.com/91394678/168429759-2f887202-0013-44cb-873c-758f366f597f.png)

Main functionality of the browser?
 1. Browser collects the information from the webserver and display it to the requested user.
 2. Browser validates the response data and https code and renders the HTML, CSS and JS.
 3. Browser displays the contents to the user that can be a video, image or html elements etc.

High Level Components of a browser.
Let's see below How Broswer renders the response from the Web Server and what are it's components.
![image](https://user-images.githubusercontent.com/91394678/168430489-6e3b524b-ace6-4dbd-b2bb-ebcbb49b4a56.png)

User Interface

UI shows the user a response data that has been sent to the browser by the web server of the requested website in a visual user understandable format.
UI of the browser doesn't only show the webpage, it also shows the URL of the website, back/forward buttons, bookmark menu, etc.

Browser Engine

It acts as a bridge between the user and the Rendering engine, and also takes up the input request from the user and sent it to the rendering engine to process it.

Rendering Engine

It process and interprets the HTML, XML, CSS, and JS code along with the attached images, videos, gifs, etc files and put them into the UI screen by sending it through the Browser engine.

 Basic flow
 ![image](https://user-images.githubusercontent.com/91394678/168480675-6c252eff-d6eb-4c7b-a89f-fefc7042c872.png)

Networking

This handles all the HTTPS, HTTP, and FTP calls and also looks for security issues.

JavaScript Interpreter

It is responsible for parsing and executing the JavaScript code and sends the outcome to the rendering engine.

UI

This component uses the user interface methods of the underlying operating system. It is mainly used for drawing basic widgets.

Data Persistence

A Web Browser needs to store the data in real time like to store cookies, local storage, WebSQL, IndexedDB, FileSystem, etc. so it uses this data persistence module to process all the data storage-related things.


Parsers (HTML, CSS, etc), Script Processors ,Tree construction and Order of script processing

![image](https://user-images.githubusercontent.com/91394678/168481898-4424af88-d146-490a-aa79-4b5f805ed28d.png)

Let's suppose that In our Webpage at this moment the content is comprised of Html and CSS, so in that case what will happen.
HTML parser will start first from the line <html> as it is incremental, but if there are any <link>, <script> and <style> tag is there then the HTML parsing will stop and it will then parse the CSS or JS first, after css is download then HTML parsing 
will again fetch by the engine, until any other <link>, <script> and <style> tag in between the files.
After successful parsing we will have a complete render tree with HTML DOM and CSSOM, then the layout will happen, and then painting on screen starts.


![image](https://user-images.githubusercontent.com/91394678/168482317-b62d86b6-de1e-483d-8ff5-197eeb147529.png)


Layout and Painting
When the renderer is created and added to the tree, it does not have a position and size. Calculating these values is called layout.
The layout is a recursive process — it begins at the root renderer, which corresponds to the <html> element of the HTML document. The layout continues recursively through a part of the entire renderer hierarchy, computing geometric info for each renderer that requires it.
The position of the root renderer is 0,0 and its dimensions have the size of the visible part of the browser window (a.k.a. the viewport).
In the paint stage, the renderer tree is traversed and the renderer’s paint() method is called to display the content on the screen.




