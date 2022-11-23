import React, { useEffect } from "react";
import styles from "./Home.module.scss";
import Sidebar from "../../components/sideBar/sidebar";
import Topbar from "../../components/TopBar/topbar";
import Editor from "../../components/common/Editor";
import Table from "../../components/Table/Table";
import BaseButton from "../../components/common/baseBtn/BaseBtn";
import Note from "../../utils/note";
import agendaList from "../../utils/agendaList";
import ModalWrapper from "../../components/modal/ModalWrapper/modalWrapper";
import ConfirmModal from "../../components/modal/confirmModal/confirmModal";

export default function Home() {
  const [description, setDescription] = React.useState("");
  const [title, setTitle] = React.useState("");
  const handleChange = (content: any) => {
    const newContent = `${content}`;
    const titleContent = newContent.slice(
      newContent.indexOf("<p>") + 3,
      newContent.indexOf("</p>")
    );
    setDescription(content);
    setTitle(titleContent);
  };

  const [agenda, setAgenda] = React.useState<any>([]);

  const [isModalOpen, setIsModalOPen] = React.useState(false);
  const [selectedNoteId, setSelectedNoteId] = React.useState<any>(null);

  const handleCloseModal = () => {
    setIsModalOPen(false);
  };

  useEffect(() => {
    setAgenda(agendaList);
  }, []);

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    console.log("submit");
    const permission = "public";
    const newAgenda = new Note(title, permission, description);
    setAgenda([...agenda, newAgenda]);
  };
  const handleDelete = (id: string) => {
    console.log(id);
    setSelectedNoteId(id);
    setIsModalOPen(true);
  };

  const handleConfirm = () => {
    console.log("confirm", selectedNoteId);
    const newAgenda = agenda.filter((note: Note) => note.id !== selectedNoteId);
    setAgenda(newAgenda);
    setIsModalOPen(false);
  };
  return (
    <div className={styles.homeMainContainer}>
      <div className={styles.homeLeftMainContainer}>
        <Sidebar />
      </div>
      <div className={styles.homeRightMainContainer}>
        <div className={styles.homeRightContent}>
          <Topbar />
        </div>
        <div className={styles.editor}>
          <form action="" className={styles.editForm}>
            <Editor onChange={handleChange} value={description} />
            <div className={styles.btnWrapper}>
              <BaseButton
                name={"Submit"}
                disabled={description === ""}
                onClick={handleSubmit}
              />
            </div>
          </form>
        </div>
        <div className={styles.table}>
          <Table
            agenda={agenda}
            onOpen={handleDelete}
            onDelete={handleDelete}
          />
        </div>
        {isModalOpen && (
          <div className={styles.modalContainer}>
            <div className={styles.modalBg}></div>
            <div className={styles.modalContentWrapper}>
              <ModalWrapper open={isModalOpen} onClose={handleCloseModal}>
                <ConfirmModal
                  onClose={handleCloseModal}
                  onConfirm={handleConfirm}
                />
              </ModalWrapper>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
