import axios from "axios";
import { useState, useEffect } from "react";
import { WagerIndex } from "./WagerIndex";
import { Signup } from "./Signup";
// import { Login } from "./Login";
import { Route, Routes } from "react-router-dom";
import { Modal } from "./Modal";
import { WagerShow } from "./WagerShow";
import { WagerDelete } from "./WagerDelete";
import { WagerNew } from "./WagerNew";
import { MoneylineIndex } from "./MoneylineIndex";
import { SpreadIndex } from "./SpreadIndex";
import { OverUnderIndex } from "./OverUnderIndex";
import { Dashboard } from "./Dashboard";

export function Content() {
  const [wagers, setWagers] = useState([]);
  const [isShowWagerVisible, setIsShowWagerVisible] = useState(false);
  const [isDeleteWagerVisible, setIsDeleteWagerVisible] = useState(false);
  const [currentWager, setCurrentWager] = useState([]);
  const [odds, setOdds] = useState([]);

  // const [isCreateWagerVisible, setIsCreateWagerVisible] = useState(false);

  const handleTotalProfitLoss = wagers => {
    var totalProfitLoss = 0;
    wagers.forEach(wager => {
      totalProfitLoss += parseFloat(wager.profit_loss);
    });

    // console.log(totalProfitLoss.toFixed(2));
    return totalProfitLoss.toFixed(2);
  };

  const handleAverageOdds = wagers => {
    let sumOdds = 0;
    wagers.forEach(wager => {
      sumOdds += parseInt(wager.odds);
    });
    // console.log((sumOdds / wagers.length).toFixed(0));
    return (sumOdds / wagers.length).toFixed(0);
  };

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

  const handleIndexOdds = () => {
    axios.get("http://localhost:3000/odds.json").then(response => {
      console.log(response);
      setOdds(response.data);
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

  // const handleRoot = () => {
  //   if (localStorage.jwt === undefined) {

  //   }
  // }

  useEffect(handleIndexWagers, []);
  useEffect(handleIndexOdds, []);
  return (
    <div className="m-5">
      <Routes>
        <Route path="/wagers-new" element={<WagerNew onCreateWager={handleCreateWager} />} />
        <Route path="/signup" element={<Signup />} />
        {/* <Route path="/" element={<WagerIndex />} /> */}
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
        <Route
          path="/dashboard"
          element={
            <Dashboard wagers={wagers} calcTotalProfitLoss={handleTotalProfitLoss} calcAvgOdds={handleAverageOdds} />
          }
        />
        <Route path="/odds/moneyline" element={<MoneylineIndex odds={odds} />} />
        <Route path="/odds/spread" element={<SpreadIndex odds={odds} />} />
        <Route path="/odds/overunder" element={<OverUnderIndex odds={odds} />} />
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
