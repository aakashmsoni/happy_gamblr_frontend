import axios from "axios";
import { useState, useEffect } from "react";
import { WagerIndex } from "./WagerIndex";
import { Signup } from "./Signup";
import { Login } from "./Login";
import { Route, Routes } from "react-router-dom";
import { Modal } from "./Modal";
import { WagerShow } from "./WagerShow";
import { WagerDelete } from "./WagerDelete";
import { WagerNew } from "./WagerNew";

export function Content() {
  const [wagers, setWagers] = useState([]);
  const [isShowWagerVisible, setIsShowWagerVisible] = useState(false);
  const [isDeleteWagerVisible, setIsDeleteWagerVisible] = useState(false);
  const [currentWager, setCurrentWager] = useState([]);
  // const [isCreateWagerVisible, setIsCreateWagerVisible] = useState(false);

  const handleShowWager = wager => {
    setIsShowWagerVisible(true);
    setCurrentWager(wager);
  };

  const handleShowDeleteConfirmation = wager => {
    // console.log(wager);
    setIsDeleteWagerVisible(true);
    setCurrentWager(wager);
  };

  const handleIndexWagers = () => {
    axios.get("http://localhost:3000/wagers.json").then(response => {
      console.log(response);
      setWagers(response.data);
    });
  };

  const handleWinColumnColor = wager => {
    if (wager.win == true) {
      return "table-success";
    } else {
      return "table-danger";
    }
  };

  const handleWin = wager => {
    if (wager.win == true) {
      return "Won";
    } else {
      return "Lost";
    }
  };

  const handleCreateWager = params => {
    axios.post("http://localhost:3000/wagers.json", params).then(response => {
      console.log(response);
      setWagers([...wagers, response.data]);
    });
  };

  const handleUpdateWager = (params, id) => {
    axios.patch(`http://localhost:3000/wagers/${id}.json`, params).then(response => {
      console.log(response);
      setCurrentWager(response.data);
      setWagers(
        wagers.map(wager => {
          if (wager.id === response.data.id) {
            return response.data;
          } else {
            return wager;
          }
        })
      );
    });
  };

  const handleDestroyWager = wager => {
    axios.delete(`http://localhost:3000/wagers/${wager.id}.json`).then(response => {
      console.log(response.data);
      setWagers(wagers.filter(w => w.id !== wager.id));
      handleClose();
    });
  };

  const handleClose = () => {
    setIsShowWagerVisible(false);
    setIsDeleteWagerVisible(false);
    // setIsCreateWagerVisible(false);
  };

  useEffect(handleIndexWagers, []);
  return (
    <div className="m-5">
      <Routes>
        <Route path="/wagers-new" element={<WagerNew onCreateWager={handleCreateWager} />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/" element={<Login />} />
        <Route
          path="/wagerindex"
          element={
            <WagerIndex
              wagers={wagers}
              onShowWager={handleShowWager}
              onDeleteWager={handleShowDeleteConfirmation}
              onWinColor={handleWinColumnColor}
              onWin={handleWin}
            />
          }
        />
      </Routes>
      <Modal show={isShowWagerVisible} onClose={handleClose}>
        <WagerShow wager={currentWager} onUpdateWager={handleUpdateWager} />
      </Modal>
      <Modal show={isDeleteWagerVisible} onClose={handleClose}>
        <WagerDelete wager={currentWager} onDeleteConfirmation={handleDestroyWager} onClose={handleClose} />
      </Modal>
      {/* <Modal show={isCreateWagerVisible} onClose={handleClose}>
        <WagerNew onCreateWager={handleCreateWager} />
      </Modal> */}
    </div>
  );
}
