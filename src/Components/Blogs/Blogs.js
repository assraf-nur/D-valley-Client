import React from "react";
import { Card } from "react-bootstrap";

const Blogs = () => {
  return (
    <div>
      <Card className="mx-auto mt-3" border="dark" style={{ width: "70rem" }}>
        <Card.Header> <Card.Title>Difference between "JavaScript" and "node.js"</Card.Title></Card.Header>
        <Card.Body>
          <Card.Text className="text-justify">
          <Card.Title>JavaScript</Card.Title>
          Javascript is a interpreted programming language, which is high level, weakly typed, dynamic, prototype-based, and multi-paradigm. Javascript is also among the three core technologies of the world wide web, which enables interactive web pages. All major web browsers and websites have a dedicated JS engine to execute them. It supports an event-driven, imperative and functional programming style construct.
            <br /> <br />
        <Card.Title>Node.js</Card.Title>
          On the other hand Node.js is a cross-platform, open-source runtime environment that is helpful in executing javascript code on the server-side. In the earlier versions of Javascript, it was primarily a client-side scripting language where the code was embedded inside the web page's HTML, and the engine was inside the browser. Now it is used as a server-side scripting language to produce dynamic web-based content before the web page is rendered onto the user's web browser. It aims to unify the web application development experience, which revolves around a single programming language.
          </Card.Text>
        </Card.Body>
      </Card>

      <Card className="mx-auto mt-3" border="dark" style={{ width: "70rem" }}>
        <Card.Header> <Card.Title>When should you use "node.js" and when should you use "mongodb"</Card.Title></Card.Header>
        <Card.Body>
          <Card.Text className="text-justify">
          <Card.Title>When should we use "nodejs"</Card.Title>
          Node.js can be used in server site. Node.js with Express.js can also be used to create classic web applications on the server-side. Application like Data Streaming, Collaborative Tools, Hardware Programming, Live Chatting we should use "node.js". It expanded its use to micro controllers, REST APIs, static file servers, and even Internet of Things. Business giants as eBay, PayPal, and Netflix now use it for building their platforms.
            <br /> <br />
            <Card.Title>When should you use "mongodb"</Card.Title>
          MongoDB is a NoSQl database. We should use this when data is document-centric and doesn't fit well into the schema of a relational database, when we need to accommodate massive scale, when we are rapidly prototyping, and a few other use cases.
          </Card.Text>
        </Card.Body>
      </Card>

      <Card className="mx-auto mt-3" border="dark" style={{ width: "70rem" }}>
        <Card.Header> <Card.Title>Differences between "SQL" and "NoSQL" databases.</Card.Title></Card.Header>
        <Card.Body>
          <Card.Text className="text-justify">
            SQL databases are relational, NoSQL databases are non-relational.
            <br />
            SQL databases use structured query language and have a predefined schema, NoSQL databases have dynamic schemas for unstructured data.<br />
            SQL databases are vertically scalable, while NoSQL databases are horizontally scalable.
            <br />
            SQL databases are table-based, while NoSQL databases are document, key-value, graph, or wide-column stores.
            <br />
            SQL databases are better for multi-row transactions, while NoSQL is better for unstructured data like documents or JSON.
          </Card.Text>
        </Card.Body>
      </Card>

      <Card className="mx-auto mt-3" border="dark" style={{ width: "70rem" }}>
        <Card.Header> <Card.Title>What is the purpose of JWT and how does it work</Card.Title></Card.Header>
        <Card.Body>
          <Card.Text className="text-justify">
          <Card.Title>Purpose of JWT</Card.Title>
          JWT means JSON Web Token,It is an open standard used to share security information between two parties, client and a server. Each JWT contains encoded JSON objects, including a set of claims. JWTs are signed using a cryptographic algorithm to ensure that the claims cannot be altered after the token is issued.
          <br /> <br />
          <Card.Title>How does it work</Card.Title>
          JWT is different from other web tokens in that they contain a set of claims. Claims are used to transmit information between two parties. What these claims are depends on the use case at hand. For example, a claim may assert who issued the token, how long it is valid for, or what permissions the client has been granted.
          <br />
          A JWT is a string made up of three parts, separated by dots (.), and serialized using base64. In the most common serialization format, compact serialization, the JWT looks something like this: xxxxx.yyyyy.zzzzz.
          <br />
          Once decoded, you will get two JSON strings:

          1.  The header and the payload.
          2.  The signature. 
            The JOSE means JSON Object Signing and Encryption, header contains the type of token.
            <br />
            The payload contains the claims. This is displayed as a JSON string, usually containing no more than a dozen fields to keep the JWT compact. This information is typically used by the server to verify that the user has permission to perform the action they are requesting.
            <br />
            The signature ensures that the token hasn’t been altered. The party that creates the JWT signs the header and payload with a secret that is known to both the issuer and receiver, or with a private key known only to the sender. When the token is used, the receiving party verifies that the header and payload match the signature. 
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Blogs;
