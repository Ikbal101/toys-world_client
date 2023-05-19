const Blog = () => {
  return (
    <div>
      <h2 className="text-center text-2xl text-orange-500 mb-9">
        Answering the Questions
      </h2>

      <div className="mb-5">
        <h2 className="text-red-600 text-xl">
          1.Ques:What is an access token and refresh token? How do they work and
          where should we store them on the client-side?
        </h2>
        <p>
          {" "}
          Ans:SQL databases are structured, have fixed schemas, and use SQL
          language for querying, while NoSQL databases are unstructured, have
          flexible schemas, and support various data models.
        </p>
      </div>
      <div className="mb-5">
        <h2 className="text-red-600 text-xl">
          2.Ques:What is express js? And What is Nest JS
        </h2>
        <p>
          {" "}
          Ans: Express.js is a lightweight web application framework for
          Node.js, offering a minimalist approach to building web applications
          and APIs. With its simplicity and extensive middleware ecosystem, it
          provides developers with the flexibility to handle routes, manage
          middleware, and interact with databases efficiently. <br />
          Nest.js, on the other hand, is a progressive framework built on top of
          Express.js. It brings structure and opinionation to Node.js
          development by leveraging concepts from Angular. Nest.js introduces
          features like dependency injection, decorators, modules, and
          middleware, promoting a modular and organized codebase for building
          scalable and maintainable server-side applications. <br />
          In summary, Express.js is a flexible and lightweight framework, while
          Nest.js builds on top of it, providing additional structure and
          Angular-inspired patterns for developing Node.js applications. The
          choice between the two depends on the specific needs of the project,
          with Express.js offering simplicity and flexibility, and Nest.js
          providing a more structured and opinionated approach.
        </p>
      </div>
      <div className="mb-5">
        <h2 className="text-red-600 text-xl">
          3.Ques:What is MongoDB aggregate and how does it work
        </h2>
        <p>
          {" "}
          Ans: MongoDB's aggregate is a versatile framework for performing
          complex data analysis and transformations in the database. It works by
          chaining stages together in a pipeline-like structure, where each
          stage performs a specific operation on the data. These operations can
          include filtering, grouping, projecting, sorting, and more. The data
          flows through the stages, with the output of one stage becoming the
          input for the next. With the aggregate framework, you can perform
          advanced calculations, aggregations, and transformations on large
          datasets efficiently. It supports a wide range of operators and
          functions for complex operations and provides features like sorting
          and limiting results. By leveraging the aggregate framework, you can
          perform these operations within the database itself, reducing the need
          to transfer large amounts of data to the client for processing.
          Overall, MongoDB's aggregate is a powerful tool for conducting complex
          data analysis and transformations directly in the database, offering
          efficient processing and powerful capabilities for working with large
          datasets.
        </p>
      </div>
      <div className="mb-5">
        <h2 className="text-red-600 text-xl">
          4.Ques:Compare SQL and NoSQL databases
        </h2>
        <p>
          {" "}
          Ans:SQL databases are structured, have fixed schemas, and use SQL
          language for querying, while NoSQL databases are unstructured, have
          flexible schemas, and support various data models.
        </p>
      </div>
    </div>
  );
};

export default Blog;
