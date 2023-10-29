import React, { useState } from 'react'
import UserIconLink from '../constants/userIconLink';
import sendMessageIconLink from '../constants/sendMessageIconLink';

const commentsData = [
  {
    name: "Aashish",
    text: "Hello Comment",
    replies: [
      {
        name: "Aashish",
        text: "Hello Comment",
        replies: [
          {
            name: "Aashish",
            text: "Hello Comment",
            replies: [
              {
                name: "Aashish",
                text: "Hello Comment",
                replies: [
                  {
                    name: "Aashish",
                    text: "Hello Comment",
                    replies: [
                      {
                        name: "Aashish",
                        text: "Hello Comment",
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
            text: "Hello Comment",
            replies: [],
          },
        ],
      },
    ],
  },
  {
    name: "Aashish",
    text: "Hello Comment",
    replies: [
      {
        name: "Aashish",
        text: "Hello Comment",
        replies: [],
      },
    ],
  },
  {
    name: "Aashish",
    text: "Hello Comment",
    replies: [],
  },
];

const Comment = ({ data }) => {
  const { name, text, replies } = data;

  return(
    <div className="py-2 flex shadow-sm my-7 rounded-lg px-2">
      <img src={UserIconLink} alt="icon" className="w-8 h-8" />
      <div className="px-2">
        <p className="font-bold">{name} </p>
        <p className="text-sm">{text}</p>
      </div>
    </div>
  )
}

const CommentsList = ({ comments }) => {
  return comments.map((comment, index) => (
    <div key={index} className="">
      <Comment data={comment} />
      <div className="pl-5 ml-12 border-l-2">
        <CommentsList comments={comment.replies} />
      </div>
    </div>
  ));
}

const CommentsContainer = () => {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const handleAddComment = (name, message) => {
    const newComment = 
      {
        name: name,
        text: message,
        replies: []
      }
    
    console.log(newComment);
    commentsData.unshift(newComment);

  }

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
}

export default CommentsContainer