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
import { truncateStr } from "../../utils/truncateStr";
import EditorNoteModal from "../../components/modal/EditNoteModal/editorNoteModal";

export default function Home() {
  const [description, setDescription] = React.useState("");
  const [editDescription, setEditDescription] = React.useState("");

  const handleChange = (content: any) => {
    const newContent = `${content}`;
    console.log(newContent);

    if (isEditModalOpen) {
      setDescription("");
    } else {
      setDescription(newContent);
    }
    setEditDescription(newContent);
  };

  const [agenda, setAgenda] = React.useState<any>([]);

  const [isModalOpen, setIsModalOPen] = React.useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = React.useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = React.useState(false);
  const [selectedNoteId, setSelectedNoteId] = React.useState<any>(null);

  const handleCloseModal = () => {
    setIsModalOPen(false);
    setIsDeleteModalOpen(false);
    setIsEditModalOpen(false);
  };

  useEffect(() => {
    setAgenda(agendaList);
  }, []);

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const title = description.slice(
      description.indexOf("<p>") + 3,
      description.indexOf("</p>")
    );
    const htmlRegexG = /<(?:"[^"]*"['"]*|'[^']*'['"]*|[^'">])+>/g;
    const truncatedDescriptionContent = truncateStr(
      description.replace(htmlRegexG, ""),
      20
    );
    const permission = "public";
    const newAgenda = new Note(title, permission, description);
    newAgenda.shortDescription = truncatedDescriptionContent;
    setAgenda([...agenda, newAgenda]);
    setDescription("");
  };
  const handleDelete = (id: string) => {
    console.log(id);
    setSelectedNoteId(id);
    setIsModalOPen(true);
    setIsDeleteModalOpen(true);
  };

  const handleEditModal = (id: string) => {
    console.log(id);
    setSelectedNoteId(id);
    setIsModalOPen(true);
    setIsEditModalOpen(true);
    const note = agenda.find((note: any) => note.id === id);
    setEditDescription(note.description);
  };
  const handleEdit = () => {
    const newAgenda = agenda.map((note: any) => {
      if (note.id === selectedNoteId) {
        const htmlRegexG = /<(?:"[^"]*"['"]*|'[^']*'['"]*|[^'">])+>/g;
        const truncatedDescriptionContent = truncateStr(
          editDescription.replace(htmlRegexG, ""),
          20
        );

        const title = editDescription.slice(
          editDescription.indexOf("<p>") + 3,
          editDescription.indexOf("</p>")
        );
        note.title = title;
        note.shortDescription = truncatedDescriptionContent;
        note.description = editDescription;
        return note;
      }
      return note;
    });
    console.log("new agenda", newAgenda);

    setAgenda(newAgenda);
    setIsModalOPen(false);
    setIsEditModalOpen(false);
  };
  const handleConfirm = () => {
    console.log("confirm", selectedNoteId);
    const newAgenda = agenda.filter((note: Note) => note.id !== selectedNoteId);
    setAgenda(newAgenda);
    setIsModalOPen(false);
    setSelectedNoteId(null);
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
                name={"Add Note"}
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
            onEdit={handleEditModal}
          />
        </div>
        {isModalOpen && (
          <div className={styles.modalContainer}>
            <div className={styles.modalBg}></div>
            <div className={styles.modalContentWrapper}>
              <ModalWrapper open={isModalOpen} onClose={handleCloseModal}>
                {isDeleteModalOpen && (
                  <ConfirmModal
                    onClose={handleCloseModal}
                    onConfirm={handleConfirm}
                  />
                )}
                {isEditModalOpen && (
                  <EditorNoteModal
                    onClose={handleCloseModal}
                    onEdit={handleEdit}
                    onChange={handleChange}
                    value={editDescription}
                  />
                )}
              </ModalWrapper>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
