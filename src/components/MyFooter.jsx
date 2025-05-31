import React from "react";
import { Icon } from '@iconify/react';
import { Link } from "react-router-dom";
const MyFooter = () => {
  return (
    <div className="" id="footer">
      <div className=" copy-right">
        
        <div className=" text-center small py-3">
          © Copyright
          <Link to="/home" className="fs-6 fw-bold text-info ms-1">
            DHDM
          </Link>
          . All Rights Reserved
        </div>

      </div>
    </div>
  );
};
export default MyFooter;
