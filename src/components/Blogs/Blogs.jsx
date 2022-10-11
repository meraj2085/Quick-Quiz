import React from "react";

const Blogs = () => {
  return (
    <section className="bg-gray-100 text-gray-800">
      <div className="container flex flex-col justify-center px-4 py-8 mx-auto md:p-8">
        <h2 className="mb-12 text-4xl font-bold leading-none text-center sm:text-5xl">
          Frequently Asked Questions
        </h2>
        <div className="divide-y divide-gray-300">
          <div className="py-6 space-y-2 md:grid md:grid-cols-12 md:gap-8 md:space-y-0">
            <h3 className="font-semibold md:col-span-5">
              What is the purpose of react router?
            </h3>
            <p className="md:pl-0 md:col-span-7">
              React Router and dynamic client-side routing, allows us to build a
              single-page web application with navigation without the page
              refreshing as the user navigates. React Router uses component
              structure to call components, which display the appropriate
              information.
            </p>
          </div>
          <div className="py-6 space-y-2 md:grid md:grid-cols-12 md:gap-8 md:space-y-0">
            <h3 className="font-semibold md:col-span-5">
              How does context api works?
            </h3>
            <p className="md:pl-0 md:col-span-7">
              The React Context API is a way for a React app to effectively
              produce global variables that can be passed around. This is the
              alternative to "prop drilling" or moving props from grandparent to
              child to parent, and so on. Context is also touted as an easier,
              lighter approach to state management. React.createContext() is all
              you need. It returns a consumer and a provider. Provider is a
              component that as it's names suggests provides the state to its
              children. It will hold the "store" and be the parent of all the
              components that might need that store. Consumer as it so happens
              is a component that consumes and uses the state.
            </p>
          </div>
          <div className="py-6 space-y-2 md:grid md:grid-cols-12 md:gap-8 md:space-y-0">
            <h3 className="font-semibold md:col-span-5">
              Tell something about useref hook.
            </h3>
            <p className="md:pl-0 md:col-span-7">
              useRef returns a mutable ref object whose .current property is
              initialized to the passed argument (initialValue). The returned
              object will persist for the full lifetime of the component.
              Essentially, useRef is like a “box” that can hold a mutable value
              in its .current property. However, useRef() is useful for more
              than the ref attribute. It's handy for keeping any mutable value
              around.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blogs;
