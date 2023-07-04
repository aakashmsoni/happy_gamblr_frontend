import axios from "axios";
import { useState, useEffect } from "react";
import { WagerIndex } from "./WagerIndex";
import { Signup } from "./Signup";
import { Route, Routes } from "react-router-dom";
import { Modal } from "./Modal";
import { WagerShow } from "./WagerShow";
import { WagerDelete } from "./WagerDelete";
import { WagerNew } from "./WagerNew";
import { WagerNewConfirmation } from "./WagerNewConfirmation";
import { MoneylineIndex } from "./MoneylineIndex";
import { SpreadIndex } from "./SpreadIndex";
import { OverUnderIndex } from "./OverUnderIndex";
import { Dashboard } from "./Dashboard";

export function Content() {
  const [wagers, setWagers] = useState([]);
  const [isShowWagerVisible, setIsShowWagerVisible] = useState(false);
  const [isDeleteWagerVisible, setIsDeleteWagerVisible] = useState(false);
  const [isShowNewWagerVisible, setIsShowNewWagerVisible] = useState(false);
  const [currentWager, setCurrentWager] = useState([]);
  const [odds, setOdds] = useState([]);

  //
  //
  //
  //

  // FORMULAS

  // TOTAL PROFIT/LOSS CALC FOR DASHBOARD
  const handleTotalProfitLoss = wagers => {
    var totalProfitLoss = 0;
    wagers.forEach(wager => {
      totalProfitLoss += parseFloat(wager.profit_loss);
    });
    return totalProfitLoss.toFixed(2);
  };

  // AVERAGE ODDS CALC FOR DASHBOARD
  const handleAverageOdds = wagers => {
    let sumOdds = 0;
    wagers.forEach(wager => {
      sumOdds += parseInt(wager.odds);
    });
    return (sumOdds / wagers.length).toFixed(0);
  };

  // WIN/LOSS CALC FOR DASHBOARD
  const handleWinLossCounter = wagers => {
    let winLoss = [0, 0];
    wagers.forEach(wager => {
      if (wager.win == true) {
        winLoss[0] += 1;
      } else {
        winLoss[1] += 1;
      }
    });
    return winLoss;
  };
  //
  //
  //
  //

  // INDEX

  // SETS CURRENT WAGER
  const handleShowWager = wager => {
    setIsShowWagerVisible(true);
    setCurrentWager(wager);
  };

  // WAGERS INDEX (USE EFFECT)
  const handleIndexWagers = () => {
    axios.get("http://localhost:3000/wagers.json").then(response => {
      console.log(response);
      setWagers(response.data);
    });
  };

  // 'WHAT ARE THE ODDS?' INDEX (USE EFFECT)
  const handleIndexOdds = () => {
    axios.get("http://localhost:3000/odds.json").then(response => {
      console.log(response);
      setOdds(response.data);
    });
  };

  // WIN COLUMN COLORING
  const handleWinColumnColor = wager => {
    if (wager.win == true) {
      return "table-success";
    } else {
      return "table-danger";
    }
  };

  // WIN COLUMN OUPUT
  const handleWin = wager => {
    if (wager.win == true) {
      return "Won";
    } else {
      return "Lost";
    }
  };

  //
  //
  //
  //
  // WAGER NEW

  // CREATE NEW BET
  const handleCreateWager = params => {
    axios.post("http://localhost:3000/wagers.json", params).then(response => {
      console.log(response);
      setWagers([...wagers, response.data]);
    });
  };

  //
  //
  //
  //
  // WAGER DELETE

  // DESTROY WAGER
  const handleDestroyWager = wager => {
    axios.delete(`http://localhost:3000/wagers/${wager.id}.json`).then(response => {
      console.log(response.data);
      setWagers(wagers.filter(w => w.id !== wager.id));
      handleClose();
    });
  };

  //
  //
  //
  //

  // MODALS

  // DELETE WAGER CONFIRMATION MODAL
  const handleShowDeleteConfirmation = wager => {
    setIsDeleteWagerVisible(true);
    setCurrentWager(wager);
  };

  // WAGER UPDATE MODAL
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

  // NEW WAGER CONFIRMATION MODAL
  const handleShowNewConfirmation = params => {
    setIsShowNewWagerVisible(true);
  };

  // MODAL CLOSE
  const handleClose = () => {
    setIsShowWagerVisible(false);
    setIsDeleteWagerVisible(false);
    setIsShowNewWagerVisible(false);
  };

  useEffect(handleIndexWagers, []);
  useEffect(handleIndexOdds, []);

  return (
    <div className="m-5">
      <Routes>
        <Route path="/wagers-new" element={<WagerNew onSubmitWager={handleShowNewConfirmation} />} />
        <Route path="/signup" element={<Signup />} />
        <Route
          path="/wager-index"
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
            <Dashboard
              wagers={wagers}
              calcTotalProfitLoss={handleTotalProfitLoss}
              calcAvgOdds={handleAverageOdds}
              calcWinLoss={handleWinLossCounter}
            />
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
      <Modal show={isShowNewWagerVisible} onClose={handleClose}>
        <WagerNewConfirmation onCreateWager={handleCreateWager} onClose={handleClose} />
      </Modal>
    </div>
  );
}
