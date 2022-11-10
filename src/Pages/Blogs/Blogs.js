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
                Difference between SQL and NoSQL
              </Link>
            </div>
            <p className="text-base text-gray-700 md:text-lg text-justify">
              <span className="text-2xl font-bold italic">
                The Main Differences SQL and NoSQL: <br />
              </span>{" "}
              <span className="font-bold">1. Type-</span> <br /> SQL databases
              are primarily called as Relational Databases (RDBMS); whereas
              NoSQL database are primarily called as non-relational or
              distributed database. <br />
              <span className="font-bold">2. Language –</span> <br />
              SQL databases defines and manipulates data based structured query
              language (SQL). Seeing from a side this language is extremely
              powerful. SQL is one of the most versatile and widely-used options
              available which makes it a safe choice especially for great
              complex queries. But from other side it can be restrictive. SQL
              requires you to use predefined schemas to determine the structure
              of your data before you work with it. Also all of your data must
              follow the same structure. This can require significant up-front
              preparation which means that a change in the structure would be
              both difficult and disruptive to your whole system. A NoSQL
              database has dynamic schema for unstructured data. Data is stored
              in many ways which means it can be document-oriented,
              column-oriented, graph-based or organized as a KeyValue store.
              This flexibility means that documents can be created without
              having defined structure first. Also each document can have its
              own unique structure. The syntax varies from database to database,
              and you can add fields as you go.
              <br />
              <span className="font-bold">3. Scalability –</span> <br />
              In almost all situations SQL databases are vertically scalable.
              This means that you can increase the load on a single server by
              increasing things like RAM, CPU or SSD. But on the other hand
              NoSQL databases are horizontally scalable. This means that you
              handle more traffic by sharding, or adding more servers in your
              NoSQL database. It is similar to adding more floors to the same
              building versus adding more buildings to the neighborhood. Thus
              NoSQL can ultimately become larger and more powerful, making these
              databases the preferred choice for large or ever-changing data
              sets.
              <br />
              <span className="font-bold">4. Structure –</span> <br />
              SQL databases are table-based on the other hand NoSQL databases
              are either key-value pairs, document-based, graph databases or
              wide-column stores. This makes relational SQL databases a better
              option for applications that require multi-row transactions such
              as an accounting system or for legacy systems that were built for
              a relational structure.
              <br />
              <span className="font-bold">5. Property followed –</span> <br />
              SQL databases follow ACID properties (Atomicity, Consistency,
              Isolation and Durability) whereas the NoSQL database follows the
              Brewers CAP theorem (Consistency, Availability and Partition
              tolerance).
              <br />
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
                What is JWT? How does it work?
              </Link>
            </div>
            <p className="text-base text-gray-700 md:text-lg text-justify">
              <span className="text-2xl font-bold italic">
                JSON Web Token (JWT)
              </span>{" "}
              is an open standard (RFC 7519) that defines a compact and
              self-contained way for securely transmitting information between
              parties as a JSON object. This information can be verified and
              trusted because it is digitally signed. JWTs can be signed using a
              secret (with the HMAC algorithm) or a public/private key pair
              using RSA or ECDSA. <br />
              <br />
              <span className="font-bold underline">Working of JWT: </span>
              <br />
              JWT is signed and encoded, not encrypted. JWT is a token based
              stateless authentication mechanism. Since it is a client-side
              based stateless session, server doesn't have to completely rely on
              a datastore(database) to save session information. <br />
              A JSON Web Token consists of 3 parts separated by a period. <br />
              <span className="font-bold">1. Header:</span>JWT header consists
              of token type and algorithm used for signing and encoding.
              Algorithms can be HMAC, SHA256, RSA, HS256 or RS256. <br />
              <span className="font-bold">2. Payload:</span>Payload consists of
              the session data called as claims. Below are some of the the
              standard claims that we can use, Issuer(iss), Subject (sub),
              Audience (aud), Expiration time (exp), Issued at (iat). <br />
              <span className="font-bold">3. Signature:</span>Signature is most
              important part of a JSON Web Token(JWT). Signature is calculated
              by encoding the header and payload using Base64url Encoding and
              concatenating them with a period separator. Which is then given to
              the cryptographic algorithm. So when the header or payload
              changes, signature has to calculated again. <br />
              Basically the identity provider(IdP) generates a JWT certifying
              user identity and Resource server decodes and verifies the
              authenticity of the token using secret salt / public key.
              <br />
              1. User sign-in using username and password or google/facebook.
              <br />
              2. Authentication server verifies the credentials and issues a jwt
              signed using either a secret salt or a private key.
              <br />
              3. User's Client uses the JWT to access protected resources by
              passing the JWT in HTTP Authorization header
              <br />
              4. Resource server then verifies the authenticity of the token
              using the secret salt/ public key.
              <br />
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
                What is the difference between javascript and NodeJS?
              </Link>
            </div>
            <p className="text-base text-gray-700 md:text-lg text-justify">
              <span className="text-2xl font-bold italic">JavaScript </span> is
              a Scripting language. It is mostly abbreviated as JS. It can be
              said that Javascript is the updated version of the ECMA script.
              Javascript is a high-level programming language that uses the
              concept of Oops but it is based on prototype inheritance. <br />
              1. Javascript is a programming language that is used for writing
              scripts on the website.
              <br />
              2. Javascript can only be run in the browsers.
              <br />
              3. It is basically used on the client-side.
              <br />
              4. Javascript can run in any browser engine as like JS core in
              safari and Spidermonkey in Firefox.
              <br />
              5. It is the upgraded version of ECMA script that uses Chrome’s V8
              engine written in C++.
              <br />
              <br />
            </p>
            <p className="text-base text-gray-700 md:text-lg text-justify">
              <span className="text-2xl font-bold italic">NodeJS </span>
              is a cross-platform and open source Javascript runtime environment
              that allows the javascript to be run on the server-side. Nodejs
              allows Javascript code to run outside the browser. Nodejs comes
              with a lot of modules and mostly used in web development. <br />
              1. NodeJS is a Javascript runtime environment
              <br />
              2. We can run Javascript outside the browser with the help of
              NodeJS.
              <br />
              3. It is mostly used on the server-side.
              <br />
              4. V8 is the Javascript engine inside of node.js that parses and
              runs Javascript.
              <br />
              5. Nodejs is written in C, C++ and Javascript.
              <br />
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
                How does NodeJS handle multiple requests at the same time?
              </Link>
            </div>
            <p className="text-base text-gray-700 md:text-lg text-justify">
              {/* <span className="text-2xl font-bold italic"></span> */}
              Multiple clients make multiple requests to the NodeJS server.
              NodeJS receives these requests and places them into the EventQueue
              . NodeJS server has an internal component referred to as the
              EventLoop which is an infinite loop that receives requests and
              processes them. This EventLoop is single threaded. we can have
              multiple connections from the same client to the same server. Each
              client process will be assigned a different ephemeral port number,
              so even if they all try to access the same server process (such as
              the Web server process at 41.199. It’s partly due to the fact a
              multi-threaded program can run on multiple cores but the main
              reason, by far, is that when a thread is waiting for some IO
              operation (which is very often, especially in a server), the other
              threads can still progress. As Node. js follows Single-Threaded
              with Event Loop Model inspired by JavaScript Event-based model
              with JavaScript callback mechanism. js is single-threaded similar
              to JavaScript but not purely JavaScript code which implies things
              that are done asynchronously like network calls, file system
              tasks, DNS lookup, etc. A single instance of a Node. js
              application runs on only one thread and, therefore, doesn’t take
              full advantage of multi-core systems. There will be times when you
              may want to launch a cluster of Node. js processes to utilize each
              CPU core on a local machine or production server. Node Js use
              threads but in a smart way. It uses single thread to serve all the
              HTTP requests & multiple threads in thread pool (in libuv) for
              handling any blocking operation
            </p>
            <br />
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
