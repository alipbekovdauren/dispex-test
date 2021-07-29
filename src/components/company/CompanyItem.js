import React from "react";

import { useDispatch, useSelector } from "react-redux";
import { getStreets } from "../../actions/street";
import { toggleCompany } from "../../actions/company";

import StreetList from "../street/StreetList";

const CompanyItem = ({ company }) => {
  const dispatch = useDispatch();
  const selectedCompany = useSelector((state) => state.company.selectedCompany);

  const onCompanyClickHandler = (company) => {
    let data = {
      companyId: company.id,
    };

    if (selectedCompany === company.id) {
      data = {
        companyId: null,
      };

      dispatch(toggleCompany(data));
    } else {
      dispatch(toggleCompany(data));
      dispatch(getStreets(data));
    }
  };

  return (
    <li>
      <p onClick={() => onCompanyClickHandler(company)}>{company.name}</p>

      {selectedCompany === company.id && <StreetList />}
    </li>
  );
};

export default CompanyItem;
