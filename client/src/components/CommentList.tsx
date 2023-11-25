export default function CommentList({ comments }: { comments: any }) {
  return (
    <ul>
      {Object.values(comments).map((comment: any) => {
        let content;

        switch (comment.status) {
          case 'pending':
            content = 'This comment is awaiting moderation';
            break;
          case 'rejected':
            content = 'this comment has been rejected';
            break;
          default:
            content = comment.content;
        }
        return <li key={comment.id}>{content}</li>;
      })}
    </ul>
  );
}
