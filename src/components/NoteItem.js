import { Link } from "react-router-dom";

const NoteItem = ({ note }) => {
  if (!note || typeof note.title !== "string") {
    return null; // or handle the case when note is missing or does not have the expected structure
  }
  return (
    <Link to={`/edit-note/${note.id}`} className="note">
      <h4>
        {note.title.length > 40 ? note.title.substr(0, 40) + "..." : note.title}
      </h4>
      <p>{note.date}</p>
    </Link>
  );
};
export default NoteItem;
