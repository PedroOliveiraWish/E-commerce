import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { userContext } from "../context/useContext";
import { useContext } from "react";

import CreateProductForm from "../component/Admin/CreateProductForm";
import Header from "../component/Header/Header";
import Footer from "../component/Footer/Footer";

function Admin() {
  const { user, loading } = useContext(userContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (!loading && user === null) {
      navigate("/");
      return;
    }
  }, [loading, navigate, user]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Header />
      <CreateProductForm />
      <Footer />
    </div>
  );
}

export default Admin;
