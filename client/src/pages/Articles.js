import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Errorwall from "./Errorwall";
import ReactMarkdown from "react-markdown";
import Navbar from "../components/Navbar";
import "../res/articles.css"

const initialState = {
  article: null,
  error: null,
  status: "pending",
};

function Article() {

  const [{ article, error, status }, setState] = useState(initialState);
  const { id } = useParams();

  useEffect(() => {
        setState(initialState);
        fetch(`/articles/${id}`).then((r) => {
          if (r.ok) {
            r.json().then((article) =>
              setState({ article, error: null, status: "resolved" })
            );
         } else {
            r.json().then((message) =>
              setState({ article: null, error: message.error, status: "rejected" })
            );
          }
       });
      }, [id]);

    if (status === "pending") return <h1>Loading...</h1>;

    if (status === "rejected") {
    if (error === "Maximum pageview limit reached") {
      return <Errorwall />;
    } else {
      return <h1>{error}</h1>;
    }
  }

  const { title, created_at, content } = article;
  // , author
  return (
    <>
    <Navbar/>
    <article>
       <h1>{title}</h1>
       <small>
         <p>
          {created_at} 
         </p>
         <p>
           {/* <em>Written by {author}</em> */}
         </p>
       </small>
       <ReactMarkdown>{content}</ReactMarkdown>
       {/* {content} */}
     </article>
     </>
  );
}


export default Article;
