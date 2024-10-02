import React, { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Categories = () => {
  const categories = useSelector((state) => state.categories);
  const categorieNew = useRef();
  const dispatch = useDispatch();
  const HandleAdd = () => {
    const newCategorie = categorieNew.current.value;
    dispatch({
      type: "set_categorie",
      payload: {
        id: crypto.randomUUID(),
        category: newCategorie,
      },
    });
  };
  const clearSearch = () => {};
  const handleDelete = (id) => {
    console.log(id);
    dispatch({ type: "delete_categorie", payload: id });
  };
  return (
    <div className="container m-auto p-4">
      <div className="flex justify-end">
        <Link
          className="p-2 bg-primary ml-5 text-center text-white min-w-[100px] rounded-md"
          to={"/"}
        >
          retour
        </Link>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 mt-2">
        <div className="">
          <div className="flex">
            <input
              type="text"
              placeholder="Catégorie"
              className="border p-2"
            />
            <span>
              <button
                className="p-2 bg-green-900 ml-5 text-white min-w-[100px] rounded-md"
              >
                Rechercher
              </button>
              <button
                className="p-2 bg-green-900 ml-5 text-white min-w-[100px] rounded-md"
              >
                Annuler
              </button>
            </span>
          </div>
        </div>
        <div className="flex mt-2 sm:mt-0 ">
          <input
            ref={categorieNew}
            type="text"
            placeholder="Catégorie"
            className="border p-2"
          />
          <span>
            <button
              onClick={HandleAdd}
              className="p-2 bg-green-900 ml-5 text-white min-w-[100px] rounded-md"
            >
              Enregistrer
            </button>
            <button
              onClick={() => (categorieNew.current.value = "")}
              className="p-2 bg-green-900 ml-5 text-white min-w-[100px] rounded-md"
            >
              Annuler
            </button>
          </span>
        </div>
      </div>
      <div className="mt-10">
        <table className="w-full border ">
          <thead>
            <tr className="bg-slate-900 text-white p-2">
              <th className="text-start p-1">Categories produits</th>
              <th className="text-start">Actions</th>
            </tr>
          </thead>
          <tbody>
            {categories?.length !== 0 ? (
              categories.map((item, index) => {
                return (
                  <tr key={index}>
                    <td>{item.category}</td>
                    <td className="p-1">
                      <span className="flex">
                        <span className="bg-green-500 cursor-pointer p-2">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            fill="white"
                            className="bi bi-pencil-square"
                            viewBox="0 0 16 16"
                          >
                            {" "}
                            <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />{" "}
                            <path
                              fillRule="evenodd"
                              d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5z"
                            />{" "}
                          </svg>
                        </span>
                        <span
                          onClick={() => handleDelete(item.id)}
                          className="bg-red-500 cursor-pointer p-2 ml-1"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            fill="white"
                            className="bi bi-x"
                            viewBox="0 0 16 16"
                          >
                            {" "}
                            <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708" />{" "}
                          </svg>
                        </span>
                      </span>
                    </td>
                  </tr>
                );
              })
            ) : (
              <tr>
                <td colSpan={5} className="p-2 text-center text-sm">
                  Not Categorie Found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Categories;
