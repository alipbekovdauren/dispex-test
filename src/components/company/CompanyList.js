import React, { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { getCompanies } from "../../actions/company";

import CompanyItem from "./CompanyItem";
import Info from "../Info";

const CompanyList = () => {
  const companies = useSelector((state) => state.company.companies);
  const companiesLoading = useSelector((state) => state.company.loading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCompanies());
  }, [dispatch]);

  return companiesLoading ? (
    <Info />
  ) : (
    <ul>
      {companies?.map((company) => (
        <CompanyItem key={company.id} company={company} />
      ))}
    </ul>
  );
};

export default CompanyList;
