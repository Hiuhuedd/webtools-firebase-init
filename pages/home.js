import React from 'react';
import { useState, useEffect, useRef } from "react";
import "materialize-css/dist/css/materialize.min.css";
import Navbar from '../component/Navbar'
import Head from "next/head";
import { withProtected } from "../src/hook/route"
import WriteToCloudFirestore from "../src/cloudFirestore/Write";
import ReadDataFromCloudFirestore from "../src/cloudFirestore/Read";
function Home({auth}) {
    useEffect(() => {
          if (typeof window !== "undefined") {
            const M = require("materialize-css");
          }
    var elems = document.querySelectorAll(".sidenav");
    var instances = M.Sidenav.init(elems);
    }, []);
    const { logout } = auth;
  return (
    <div className="containert" style={{ padding: "1rem 0" }}>
      <Head>
        <link
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
          rel="stylesheet"
        ></link>
        <link
          href="https://fonts.googleapis.com/css2?family=Kalam:wght@300;400&family=Klee+One&family=Lato:ital,wght@0,100;0,300;0,400;0,700;1,400&family=Poppins:wght@100;200;300;400;500&family=Quintessential&family=Satisfy&display=swap"
          rel="stylesheet"
        ></link>
      </Head>
 
      <a href="#" data-target="slide-out" class="sidenav-trigger">
        <i class="material-icons">menu</i>
      </a>
      <hr />
      <WriteToCloudFirestore />
      <ReadDataFromCloudFirestore />
      <hr />
      <button onClick={logout}>Logout</button>
      <ul id="slide-out" class="sidenav">
        <li>
          <div class="user-view">
            <div class="background">
              <img src="/webtools1.png" />
            </div>
            <a href="#user">
              <img class="circle" src="webtools1.png" />
            </a>
            <a href="#name">
              <span class="white-text name">John Doe</span>
            </a>
            <a href="#email">
              <span class="white-text email">jdandturk@gmail.com</span>
            </a>
          </div>
        </li>
        <li>
          <a href="#!">
            <i class="material-icons">cloud</i>First Link With Icon
          </a>
        </li>
        <li>
          <a href="#!">Second Link</a>
        </li>
        <li>
          <div class="divider"></div>
        </li>
        <li>
          <a class="subheader">Subheader</a>
        </li>
        <li>
          <a class="waves-effect" href="#!">
            Third Link With Waves
          </a>
        </li>
      </ul>
      <a href="#" data-target="slide-out" class="sidenav-trigger">
        <i class="material-icons">menu</i>
      </a>
    </div>
  );
}

export default withProtected(Home);

    