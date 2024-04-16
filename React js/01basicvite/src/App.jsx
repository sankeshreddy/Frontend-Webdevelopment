import Youtube from "./youtube";
function App() {
  return (
    // <div>
    //   <h1>Vite react app</h1>
    //   <h1>Vite react app</h1>
    // </div>
    /* *in jsx you can return only one element at a time
    *inorder to return multiple elements in jsx we have to wrap them inside div tag
    *another way is we can also do it with empty parenthasis <> </>
    *in the mid version of the react version fragments are using to return multiple elements*/
   // ctrl+shift+p is the shortcut to reload the Developer:Reload Window
   <>
   <h1>Vite react app</h1>
   <h1>Vite react app</h1>
   <Youtube/>
   </>
  );
}

export default App;
