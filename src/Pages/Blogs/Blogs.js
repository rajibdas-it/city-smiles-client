import React from "react";
import { Link } from "react-router-dom";
import author_img from "../../assets/rajib.jpeg";

const Blogs = () => {
  return (
    <div className="w-[80%] mx-auto mt-10 mb-10">
      <p className="mt-3 text-gray-500 text-center italic">
        As a student, you will find it helpful for better concentration and
        memory
      </p>
      <hr className="bg-black w-[85%] mx-auto mb-4" />

      <div className="mt-10">
        {/* Question-1 Start*/}
        <div
          className="px-4 py-8 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20 shadow-lg"
          data-aos="zoom-in"
        >
          <div className="max-w-xl mb-5 md:mx-auto sm:text-center lg:max-w-2xl">
            <div className="mb-4">
              <Link
                to="/blogs"
                aria-label="Article"
                className="inline-block max-w-lg font-sans text-2xl font-bold leading-none tracking-tight text-blue-400 transition-colors duration-200 hover:text-deep-purple-accent-700 sm:text-3xl"
              >
                what is cors?
              </Link>
            </div>
            <p className="text-base text-gray-700 md:text-lg text-justify">
              <span className="text-2xl font-bold italic">
                Cross-Origin Resource Sharing (CORS)
              </span>{" "}
              is an HTTP-header based mechanism that allows a server to indicate
              any origins (domain, scheme, or port) other than its own from
              which a browser should permit loading resources. CORS also relies
              on a mechanism by which browsers make a preflight request to the
              server hosting the cross-origin resource, in order to check that
              the server will permit the actual request. In that preflight, the
              browser sends headers that indicate the HTTP method and headers
              that will be used in the actual request. An example of a
              cross-origin request: the front-end JavaScript code served from
              "https://domain-a.com" uses fetch to make a request for
              "https://domain-b.com/data.json". For security reasons, browsers
              restrict cross-origin HTTP requests initiated from scripts. For
              example, the Fetch API follow the same-origin policy. This means
              that a web application using those APIs can only request resources
              from the same origin the application was loaded from unless the
              response from other origins includes the right CORS headers.
            </p>
          </div>
          <div className="mb-1 sm:text-center">
            <Link to="/blogs" aria-label="Author" className="inline-block mb-1">
              <img
                alt=""
                src={author_img}
                className="object-cover w-10 h-10 rounded-full shadow-sm"
              />
            </Link>
            <div>
              <Link
                to="/blogs"
                aria-label="Author"
                className="font-semibold text-gray-800 transition-colors duration-200 hover:text-deep-purple-accent-700"
              >
                Rajib Das
              </Link>
              <p className="text-sm font-medium leading-4 text-gray-600">
                Author
              </p>
            </div>
          </div>
        </div>

        {/* Question- End */}

        {/* Question-2 Start*/}
        <div
          className="px-4 py-8 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20 shadow-lg"
          data-aos="zoom-in"
        >
          <div className="max-w-xl mb-5 md:mx-auto sm:text-center lg:max-w-2xl">
            <div className="mb-4">
              <Link
                to="/blogs"
                aria-label="Article"
                className="inline-block max-w-lg font-sans text-2xl font-bold leading-none tracking-tight text-blue-400 transition-colors duration-200 hover:text-deep-purple-accent-700 sm:text-3xl"
              >
                Why are you using firebase? What other options do you have to
                implement authentication?
              </Link>
            </div>
            <p className="text-base text-gray-700 md:text-lg text-justify">
              <span className="text-2xl font-bold italic">Google Firebase</span>{" "}
              is an application development platform that allows developers to
              create iOS, Android, and Web apps. I am using firebase cause
              Google Firebase offers many features that pitch it as the go-to
              backend development tool for web and mobile apps. It reduces
              development workload and time. And it's a perfect prototyping
              tool. Firebase is simple, lightweight, friendly, and industrially
              recognized. When i build a client-side app with React JS Google
              Firebase can turn this into a serverless app in no time. With
              Firebase, it's pretty simple to connect and use built-in
              third-party authentication providers, including Google, Facebook,
              Twitter and its more secure than other.
            </p>
            <p className="text-start text-lg font-bold">
              I have so many options to implement authentication like
            </p>
            <div className="text-start">
              <li>Okta</li>
              <li>Amazon</li>
              <li>Passport</li>
              <li>Auth0</li>
              <li>MongoDB</li>
              <li>Keycloak</li>
            </div>
          </div>
          <div className="mb-1 sm:text-center">
            <Link to="/blogs" aria-label="Author" className="inline-block mb-1">
              <img
                alt=""
                src={author_img}
                className="object-cover w-10 h-10 rounded-full shadow-sm"
              />
            </Link>
            <div>
              <Link
                to="/blogs"
                aria-label="Author"
                className="font-semibold text-gray-800 transition-colors duration-200 hover:text-deep-purple-accent-700"
              >
                Rajib Das
              </Link>
              <p className="text-sm font-medium leading-4 text-gray-600">
                Author
              </p>
            </div>
          </div>
        </div>
        {/* Question-2 End*/}

        {/* Question-3 Start*/}
        <div
          className="px-4 py-8 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20 shadow-lg"
          data-aos="zoom-in"
        >
          <div className="max-w-xl mb-5 md:mx-auto sm:text-center lg:max-w-2xl">
            <div className="mb-4">
              <Link
                to="/blogs"
                aria-label="Article"
                className="inline-block max-w-lg font-sans text-2xl font-bold leading-none tracking-tight text-blue-400 transition-colors duration-200 hover:text-deep-purple-accent-700 sm:text-3xl"
              >
                How does the private route work?
              </Link>
            </div>
            <p className="text-base text-gray-700 md:text-lg text-justify">
              <span className="text-2xl font-bold italic">Private Routes</span>{" "}
              vary based on the Apps, For example, Dashboard, User Profile, App
              Settings, Home etc. In simple words, These routes can be accessed
              only after login. Private routes should not be accessible before
              login. The private route component is similar to the public route,
              the only change is that redirect URL and authenticate condition.
              If the user is not authenticated he will be redirected to the
              login page and the user can only access the authenticated routes
              If he is authenticated (Logged in). we have wrapped authenticated
              routes with "PrivateRoute" component.
            </p>
          </div>
          <div className="mb-1 sm:text-center">
            <Link to="/blogs" aria-label="Author" className="inline-block mb-1">
              <img
                alt=""
                src={author_img}
                className="object-cover w-10 h-10 rounded-full shadow-sm"
              />
            </Link>
            <div>
              <Link
                to="/blogs"
                aria-label="Author"
                className="font-semibold text-gray-800 transition-colors duration-200 hover:text-deep-purple-accent-700"
              >
                Rajib Das
              </Link>
              <p className="text-sm font-medium leading-4 text-gray-600">
                Author
              </p>
            </div>
          </div>
        </div>
        {/* Question-3 End*/}
        {/* Question-4 Start*/}
        <div
          className="px-4 py-8 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20 shadow-lg"
          data-aos="zoom-in"
        >
          <div className="max-w-xl mb-5 md:mx-auto sm:text-center lg:max-w-2xl">
            <div className="mb-4">
              <Link
                to="/blogs"
                aria-label="Article"
                className="inline-block max-w-lg font-sans text-2xl font-bold leading-none tracking-tight text-blue-400 transition-colors duration-200 hover:text-deep-purple-accent-700 sm:text-3xl"
              >
                What is Node? How does Node work?
              </Link>
            </div>
            <p className="text-base text-gray-700 md:text-lg text-justify">
              <span className="text-2xl font-bold italic">Node.js</span> is an
              open-source, cross-platform, backend javascript runtime
              environment. It is a used as backend service where javascript
              works on the server-side of the application. This way javascript
              is used on both frontend and backend. Node.js runs on chrome v8
              engine which converts javascript code into machine code, it is
              highly scalable, lightweight, fast, and data-intensive.
            </p>
            <br />
            <p className="text-base text-gray-700 md:text-lg text-justify">
              <span className="text-2xl font-bold italic underline">
                Working of Node.js:
              </span>{" "}
              Node.js is the JavaScript runtime environment which is based on
              Google V8 Engine i.e. with the help of Node.js we can run the
              JavaScript outside of the browser. Node.js is single-threaded,
              based on event-driven architecture, and non-blocking based on the
              I/O model. Node.js accepts the request from the clients and sends
              the response, while working with the request node.js handles them
              with a single thread. To operate I/O operations or requests
              node.js use the concept of threads. Thread is a sequence of
              instructions that the server needs to perform. It runs parallel on
              the server to provide the information to multiple clients. Node.js
              is an event loop single-threaded language. It can handle
              concurrent requests with a single thread without blocking it for
              one request.
            </p>
            <p className="text-start text-lg font-bold">
              Node.js basically works on two concept like
            </p>
            <div className="text-start">
              <li>Non-blocking I/O</li>
              <li>Asynchronous</li>
            </div>
          </div>
          <div className="mb-1 sm:text-center">
            <Link to="/blogs" aria-label="Author" className="inline-block mb-1">
              <img
                alt=""
                src={author_img}
                className="object-cover w-10 h-10 rounded-full shadow-sm"
              />
            </Link>
            <div>
              <Link
                to="/blogs"
                aria-label="Author"
                className="font-semibold text-gray-800 transition-colors duration-200 hover:text-deep-purple-accent-700"
              >
                Rajib Das
              </Link>
              <p className="text-sm font-medium leading-4 text-gray-600">
                Author
              </p>
            </div>
          </div>
        </div>
        {/* Question-4 End*/}
      </div>
    </div>
  );
};

export default Blogs;
