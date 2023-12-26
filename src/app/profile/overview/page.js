'use client'
import withAuth from '@/app/helper/withAuth';
import React from 'react';

const overviewPage = () => {
  return (
    <div>
       <div className="overflow-x-auto">
            <table className="table">
              {/* head */}
              <thead>
                <tr>
                  <th></th>
                  <th>Name</th>
                  <th>Pregnancies</th>
                  <th>Glucose</th>
                  <th>SkinThickness</th>
                  <th>BloodPressure</th>
                  <th>Insulin</th>
                  <th> BMI</th>
                  <th>Age</th>
                </tr>
              </thead>
              <tbody>
                {/* row 1 */}
                <tr>
                  <th>1</th>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                {/* row 2 */}
                <tr>
                  <th>2</th>
                  <td></td>
                  <td></td>

                  <td></td>
                </tr>
                {/* row 3 */}
                <tr>
                  <th>3</th>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
              </tbody>
            </table>
          </div>
      
      
    </div>
  );
};

export default withAuth(overviewPage);