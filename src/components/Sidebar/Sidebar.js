import { Button } from "@material-ui/core";
import React from "react";
import "./Sidebar.css";
import AddIcon from "@material-ui/icons/Add";
import StarIcon from "@material-ui/icons/Star";
import SendIcon from "@material-ui/icons/Send";
import NoteIcon from "@material-ui/icons/Note";
import LabelImportantIcon from "@material-ui/icons/LabelImportant";

import InboxIcon from "@material-ui/icons/Inbox";
import QueryBuilderIcon from "@material-ui/icons/QueryBuilder";
import { SidebarOption } from "./SidebarOption";

export const Sidebar = () => {
  return (
    <div className="sidebar">
      <Button
        className="sidebar__compose"
        startIcon={<AddIcon fontSize="large" />}
      >
        Oluştur
      </Button>
      <SidebarOption
        Icon={InboxIcon}
        title="Gelen Kutusu"
        number={54}
        seleceted={true}
      />
      <SidebarOption Icon={StarIcon} title="Yıldızlı" number={54} />
      <SidebarOption Icon={QueryBuilderIcon} title="Ertelenenler" number={54} />
      <SidebarOption Icon={SendIcon} title="Gönderilmiş Postalar" number={54} />
      <SidebarOption
        Icon={LabelImportantIcon}
        title="Önemli"
        number={54}
      />

      <SidebarOption Icon={NoteIcon} title="Taslaklar" number={54} />
    </div>
  );
};
