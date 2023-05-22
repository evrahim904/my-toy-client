
const Blog = () => {
    return (
        <div>
            <div className="bg-blue-600 mb-6">
                <h2 className="text-2xl">What is an access token and refresh token? How do they work and where should we store them on the client-side?</h2>
                <p>answer: Access token and refresh token shouldn't be stored in the local/session storage, because they are not a place for any sensitive data. Hence I would store the access token in a httpOnly cookie (even though there is CSRF) and I need it for most of my requests to the Resource Server anyway.

                    But what about the refresh token? I cannot store it in a cookie, because (1) it would be send with every request to my Resource Server as well which makes it vulnerable to CSRF too and (2) it would send expose both access/refresh token with an identical attack vector.</p>
            </div>

            <div  className="bg-blue-600 mb-6">
            <h2 className="text-2xl">Compare SQL and NoSQL databases?
            </h2>
            <p>answer: SQL databases are vertically scalable, while NoSQL databases are horizontally scalable. SQL databases are table-based, while NoSQL databases are document, key-value, graph, or wide-column stores. SQL databases are better for multi-row transactions, while NoSQL is better for unstructured data like documents or JSON.J</p>
            </div>
           <div  className="bg-blue-600 mb-6">
           <h2 className="text-2xl">What is express js? What is Nest JS ?
            </h2>
            <p>answer: NestJS provides a more structured and opinionated approach, which can make it easier to build complex APIs with proper separation of concerns. Express, on the other hand, is more lightweight and flexible, which makes it a popular choice for simple or small-scale APIs.</p>
           </div>
            <div  className="bg-blue-600 mb-36">
            <h2>What is MongoDB aggregate and how does it work?</h2>
            <p className="text-2xl">answer: What is Aggregation in MongoDB? Aggregation is a way of processing a large number of documents in a collection by means of passing them through different stages. The stages make up what is known as a pipeline. The stages in a pipeline can filter, sort, group, reshape and modify documents that pass through the pipeline.</p>
            </div>
        </div>
    );
};

export default Blog;