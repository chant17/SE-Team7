import React, { Component, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { render } from "react-dom";

const Exercise = (
  props //functional react component
) => (
  <tr>
    <td>{props.exercise.username}</td>
    <td>{props.exercise.admin_role}</td>
    <td>{props.exercise.date.substring(0, 10)}</td>
    <td>
      <Link to={"/edit/" + props.exercise._id}>edit</Link> |{" "}
      <a
        href="#"
        onClick={() => {
          props.deleteExercise(props.exercise._id);
        }}
      >
        delete
      </a>
    </td>
  </tr>
);

const Example = () => {
  const [value, setValue] = useState([]);
  useEffect(() => {
    console.log("TESt");
    const fetchData = async () => {
      try {
        const { data } = await axios.get("http://localhost:5000/roles/");
        setValue(data);
      } catch (e) {
        console.log(e);
      }
    };

    fetchData();
  }, []);

  const exerciseList = () => {
    return value.map((currentexercise) => {
      return (
        <Exercise
          exercise={currentexercise}
          deleteExercise={deleteExercise}
          key={currentexercise._id}
        />
      );
    });
  };
  const deleteExercise = (id) => {
    axios.delete("http://localhost:5000/roles/" + id).then((response) => {
      console.log(response.data);
    });

    // this.setState({
    //   exercises: this.state.exercises.filter(el => el._id !== id)
    // })

    setValue(value.filter((el) => el._id !== id));
  };
  return (
    <div>
      <h3>Logged Users</h3>
      <table className="table">
        <thead className="thead-light">
          <tr>
            <th>Username</th>
            <th>Role</th>
            <th>Date</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>{exerciseList()}</tbody>
      </table>
    </div>
  );
};

export default Example;
