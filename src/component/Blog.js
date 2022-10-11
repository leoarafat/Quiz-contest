import React from "react";

const Blog = () => {
  return (
    <div>
      <div
        tabIndex={0}
        className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box"
      >
        <div className="collapse-title text-xl font-medium">
          What is the purpose of react router?
        </div>
        <div className="collapse-content">
          <p>
            Routing is a process in which a user is directed to different pages
            based on their action or request. ReactJS Router is mainly used for
            developing Single Page Web Applications. React Router is used to
            define multiple routes in the application. When a user types a
            specific URL into the browser, and if this URL path matches any
            'route' inside the router file, the user will be redirected to that
            particular route. React Router is a standard library system built on
            top of the React and used to create routing in the React application
            using React Router Package. It provides the synchronous URL on the
            browser with data that will be displayed on the web page. It
            maintains the standard structure and behavior of the application and
            mainly used for developing single page web applications.
          </p>
        </div>
      </div>
      <div
        tabIndex={0}
        className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box"
      >
        <div className="collapse-title text-xl font-medium">
          How does context api works?
        </div>
        <div className="collapse-content">
          <p>
            The React Context API is a way for a React app to effectively
            produce global variables that can be passed around. This is the
            alternative to "prop drilling" or moving props from grandparent to
            child to parent, and so on. Context is also touted as an easier,
            lighter approach to state management using Redux.
            React.createContext is all you need. It returns a consumer and a
            provider. Provider is a component that as it's names suggests
            provides the state to its children. It will hold the "store" and be
            the parent of all the components that might need that store.
            Consumer as it so happens is a component that consumes and uses the
            state. More information can be found on React's documentation page
          </p>
        </div>
      </div>
      <div
        tabIndex={0}
        className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box"
      >
        <div className="collapse-title text-xl font-medium">
          What is useRef in react?
        </div>
        <div className="collapse-content">
          <p>
            Essentially, useRef is like a “box” that can hold a mutable value in
            its .current property. You might be familiar with refs primarily as
            a way to access the DOM. If you pass a ref object to React with
            React will set its .current property to the corresponding DOM node
            whenever that node changes. However, useRef is useful for more than
            the ref attribute. Its handy for keeping any mutable value around
            similar to how youd use instance fields in classes. This works
            because useRef creates a plain JavaScript object. The only
            difference between useRef and creating a object yourself is that
            useRef will give you the same ref object on every render. Keep in
            mind that useRef doesnt notify you when its content changes.
            Mutating the .current property doesnt cause a re-render. If you want
            to run some code when React attaches or detaches a ref to a DOM
            node, you may want to use a callback ref instead.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blog;
