import React from 'react'
import UserIconLink from '../constants/userIconLink';

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
    <div className="py-2 flex shadow-sm my-2 rounded-lg px-2">
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
    <div>
      <Comment data={comment} key={index} />
      <div className="pl-5 ml-12 border border-l-black">
        <Comment data={comment} key={index} />
        <Comment data={comment} key={index} />
        <Comment data={comment} key={index} />
      </div>
    </div>
  ));
}

const CommentsContainer = () => {
  return (
    <div className="p-3 m-7">
        <h1 className="text-2xl font-bold">Comments:</h1>
        <CommentsList comments={commentsData} />
    </div>
  )
}

export default CommentsContainer