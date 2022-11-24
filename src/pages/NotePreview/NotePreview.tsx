import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import agendaList from "../../utils/agendaList";
import styles from "./NotePreview.module.scss";
import parse from "html-react-parser";
import { Note } from "../../modal/note";

const NotePreview = () => {
  const { noteId } = useParams<{ noteId: string }>();
  const [note, setNote] = React.useState<Note | null>(null);

  const getNote = () => {
    console.log(noteId, agendaList);

    const selectedNote = agendaList.find((note: Note) => note.id === noteId);
    setNote(selectedNote || null);
    console.log(selectedNote);
  };

  useEffect(() => {
    getNote();
  }, []);
  const { title, description, createdAt } = note || {};
  const parsedDescription = parse(description || "");

  return (
    <>
      <section className={styles.notePreviewMainContainer}>
        <h3 className={styles.title}>{title}</h3>
        <div className={styles.description}>
          {parsedDescription}
          One morning, when Gregor Samsa woke from troubled dreams, he found
          himself transformed in his bed into a horrible vermin. He lay on his
          armour-like back, and if he lifted his head a little he could see his
          brown belly, slightly domed and divided by arches into stiff sections.
        </div>
        <p className={styles.date}>{createdAt}</p>
      </section>
    </>
  );
};

export default NotePreview;
