import React from 'react'
import ReactDOM from 'react-dom'
import CommentDetail from './CommentDetail'
import faker from "faker";
import ApprovalCard from './ApprovalCard'

const App = () => {
  return (
    <div className="ui container comments">
      <ApprovalCard>
        <CommentDetail
          author="Sam"
          timeAgo="Today at 4:45PM"
          content="Blue"
          avatar={faker.image.avatar()}
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          author="Fiona"
          timeAgo="Today at 3:45PM"
          content="Green"
          avatar={faker.image.avatar()}
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          author="Linda"
          timeAgo="Today at 1:45PM"
          content="Yellow"
          avatar={faker.image.avatar()}
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          author="Pablo"
          timeAgo="Today at 4:00PM"
          content="Blue"
          avatar={faker.image.avatar()}
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          author="Peter"
          timeAgo="Today at 4:45PM"
          content="Purple"
          avatar={faker.image.avatar()}
        />
      </ApprovalCard>
    </div>
  );
}

ReactDOM.render(
  <App />,
  document.querySelector('#root')
)