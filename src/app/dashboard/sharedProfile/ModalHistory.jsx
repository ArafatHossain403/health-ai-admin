import moment from "moment";
import React, { useEffect, useState } from "react";

const ModalHistory = ({ history }) => {
  return (
    <div>
      <dialog id="my_modal_1" className="modal">
        <div className="modal-box">
          <p className="py-4">
            <span className="text-amber-500">{history?.user?.name}</span>{" "}
            Diagnosis History In Details
          </p>
          {history?.user?.gender == "female" && (
            <div>
              {" "}
              <p> Pregnancies: {history?.pregnancies}</p>
            </div>
          )}
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>Features</th>
                <th>Values</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Name:</td>
                <td>{history?.user?.name}</td>
              </tr>
              <tr>
                <td>Gender:</td>
                <td>{history?.user?.gender}</td>
              </tr>
              <tr>
                <td>Age: </td>
                <td>{history?.age} Years</td>
              </tr>
              <tr>
                <td>Pregnancies: </td>
                {history?.user?.gender == "female" ? (
                  <td>{history?.pregnancies}</td>
                ) : (
                  <td>N/A</td>
                )}
              </tr>

              <tr></tr>
              <tr>
                <td>Glucose (mg/dL): </td>
                <td>{history?.glucose}</td>
              </tr>
              <tr>
                <td>Systolic Blood Pressure: </td>
                <td>{history?.s_bp}</td>
              </tr>
              <tr>
                <td>Diastolic Blood Pressure: </td>
                <td>{history?.d_bp}</td>
              </tr>
              <tr>
                <td>Mean Blood Pressure: </td>
                <td>{history?.mbp}</td>
              </tr>
              <tr>
                <td>Skin Thickness (mm): </td>
                <td>{history?.skin_thickness}</td>
              </tr>
              <tr>
                <td>Insulin (µU/mL): </td>
                <td>{history?.insulin}</td>
              </tr>
              <tr>
                <td>Height (cm): </td>
                <td>{history?.height}</td>
              </tr>
              <tr>
                <td>Weight (kg): </td>
                <td>{history?.weight}</td>
              </tr>
              <tr>
                <td>Body Mass Index (kg): </td>
                <td>{history?.bmi}</td>
              </tr>
              <tr>
                <td>Result: </td>
                <td>
                  {" "}
                  Diabetes{" "}
                  {history?.outcome == 1 ? (
                    <span className="text-red-600 font-bold">Positive</span>
                  ) : (
                    <span className="text-green-600 font-bold">Negative</span>
                  )}
                </td>
              </tr>
              <tr>
                <td>Created At: </td>
                <td>
                  <span className="stat-value text-info text-sm">
                    {moment(history?.created_at).format("ll")}{" "}
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
          <div className="modal-action">
            <form method="dialog">
              <button
                className="btn"
                onClick={() => document.getElementById("my_modal_1").close()}
              >
                Close
              </button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default ModalHistory;
