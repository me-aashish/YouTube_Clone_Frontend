import React, { useState, useContext, createContext, useEffect } from "react";
import UserIconLink from "../constants/userIconLink";
import sendMessageIconLink from "../constants/sendMessageIconLink";
const commentContext = createContext();

const commentsData = [
  {
    name: "Aashish",
    text: "Hello Comment 1",
    replies: [
      {
        name: "Aashish",
        text: "Hello Comment 12",
        replies: [
          {
            name: "Aashish",
            text: "Hello Comment 112",
            replies: [
              {
                name: "Aashish",
                text: "Hello Comment 1112",
                replies: [
                  {
                    name: "Aashish",
                    text: "Hello Comment 11112",
                    replies: [
                      {
                        name: "Aashish",
                        text: "Hello Comment 111112",
                        replies: [],
                      },
                    ],
                  },
                ],
              },
            ],
          },
          {
            name: "Aashish",
            text: "Hello Comment 13",
            replies: [],
          },
        ],
      },
    ],
  },
  {
    name: "Aashish",
    text: "Hello Comment 2",
    replies: [
      {
        name: "Aashish",
        text: "Hello Comment 21",
        replies: [],
      },
    ],
  },
  {
    name: "Aashish",
    text: "Hello Comment 3",
    replies: [],
  },
];

const CommentsList = ({ comments }) => {
  return comments.map((comment, index) => (
    <div key={index} className="">
        <Comment data={comment} />

      <div className="pl-5 ml-12 border-l-2">
        {console.log(comment.text, " -> ", comment.replies)}
        <CommentsList comments={comment.replies} />
      </div>
    </div>
  ));
};

const Comment = ({ data }) => {

  const { name, text, replies } = data;
  const [isReplyVisible, setIsReplyVisible] = useState(false);
  const [replyName, setReplyName] = useState("");
  const [replyComment, setReplyComment] = useState("");
  const [newReply, setNewReply] = useState(false);
  

  const handleAddReply = (name, comment) => {
    const reply = {
      name: name,
      text: comment,
      replies: [],
    };
    replies.unshift(reply);
    setNewReply(true);
    setIsReplyVisible(false);
  };

  return (
    <>
      <div className="py-2 inline-block w-[800px] h-[134px] shadow-sm my-7 rounded-lg px-2">
        <img src={UserIconLink} alt="icon" className="w-8 h-8" />
        <div className="px-2">
          <p className="font-bold">{name} </p>
          <p className="text-sm">{text}</p>
          <button
            className="w-16 h-10 hover:border-2 hover:bg-gray-50 rounded-2xl  p-2 mt-2 mb-2 font-semibold text-sm"
            onClick={() => setIsReplyVisible(!isReplyVisible)}
          >
            Reply
          </button>
          {isReplyVisible && (
            <div className="flex h-[50px]">
              <span>
                <input
                  type="text"
                  placeholder="name"
                  className="mt-2 ml-3 border p-2 border-black bg-white-50 shadow-xl w-[56px]  rounded-l-lg h-[41px]"
                  value={replyName}
                  onChange={(e) => setReplyName(e.target.value)}
                />
              </span>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  handleAddReply(replyName, replyComment);
                  setReplyName("");
                  setReplyComment("");
                }}
              >
                <input
                  type="text"
                  placeholder="comment"
                  className="mt-2 border p-2 border-black bg-white-50 shadow-xl w-[200px] h-[41px]"
                  value={replyComment}
                  onChange={(e) => setReplyComment(e.target.value)}
                />
              </form>
              <span>
                <img
                  src={sendMessageIconLink}
                  alt="send"
                  className="w-[60px] mt-2 border border-black   rounded-r-lg h-[41px] cursor-pointer"
                  onClick={(e) => {
                    handleAddReply(replyName, replyComment);
                    setReplyName("");
                    setReplyComment("");
                  }}
                />
              </span>
            </div>
          )}
        </div>
        {newReply &&  <div className="pl-5 ml-12 border-l-2">
          <CommentsList comments={data.replies} />
        </div>}
      </div>
    </>
  );
};

const CommentsContainer = () => {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const handleAddComment = (name, message) => {
    console.log("first", commentsData);
    const newComment = {
      name: name,
      text: message,
      replies: [],
    };

    commentsData.unshift(newComment);

    console.log("second", commentsData);
  };

  return (
    <div className="p-3 m-7 w-[800px]">
      <h1 className="text-2xl font-bold">Comments:</h1>
      <div className="flex h-[50px]">
        <span>
          <input
            type="text"
            placeholder="name"
            className="mt-2 ml-3 border p-2 border-black bg-white-50 shadow-xl w-[100px]  rounded-l-lg h-[41px]"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </span>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleAddComment(name, message);
            setName("");
            setMessage("");
          }}
        >
          <input
            type="text"
            placeholder="comment"
            className="mt-2 border p-2 border-black bg-white-50 shadow-xl w-[600px] h-[41px]"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
        </form>
        <span>
          <img
            src={sendMessageIconLink}
            alt="send"
            className="w-[60px] mt-2 border border-black   rounded-r-lg h-[41px] cursor-pointer"
            onClick={() => {
              handleAddComment(name, message);
              setName("");
              setMessage("");
            }}
          />
        </span>
      </div>
      
        <CommentsList comments={commentsData} />
      
    </div>
  );
};

export default CommentsContainer;
