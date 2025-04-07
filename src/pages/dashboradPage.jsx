import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { apiGet } from "../services/testapi";
import LoadingPage from "../components/Loading";
import TablePage from "../components/Table";
import FilterPage from "../components/filter";

const Dashboard = () => {
  const [dashboradData, setDashboardData] = useState([]);
  const [filterUser, setFilterUser] = useState([]);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowPerPage] = useState(5);
  const [roleFilter, setRoleFilter] = useState("All");
  const { data, isFetching, isLoading, refetch } = useQuery(
    "testData",
    () => apiGet("users"),
    {
      onSuccess: (res) => {
        // setDashboardData(res.data);

        const DividingUserRole = res.data.map((user, index) => ({
          ...user,
          role: index % 2 === 0 ? "admin" : "user",
        }));
        // console.log("user",typeof index)

        setDashboardData(DividingUserRole);

        setFilterUser(DividingUserRole);
      },
      onError: (err) => {
        console.log("Error:", err);
      },
    }
  );

  useEffect(() => {
    refetch();
  }, []);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };
  const handleChangeRowsPerPage = (event) => {
    setRowPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleFilterChange = (event) => {
    const e = event.target.value;

    setRoleFilter(e);
    setPage(0);

    if (e === "All") {
      setFilterUser(dashboradData);
    } else {
      const filteredUsers = filterUser.filter((user) => user.role === e);
      setFilterUser(filteredUsers);
    }
  };

  return (
    <>
      {isFetching && isLoading ? (
        <div>
          <LoadingPage />
        </div>
      ) : (
        <>
          <FilterPage
            handleFilterChange={handleFilterChange}
            roleFilter={roleFilter}
          />
          <TablePage
            data={filterUser}
            rowsPerPage={rowsPerPage}
            count={filterUser}
            page={page}
            handleChangePage={handleChangePage}
            handleChangeRowsPerPage={handleChangeRowsPerPage}
          />
        </>
      )}
    </>
  );
};

export default Dashboard;
