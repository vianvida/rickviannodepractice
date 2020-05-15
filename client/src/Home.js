import React, { useState, useEffect } from "react";
import "./App.css";


const Home = () => (
        <div>
          <div className="container mx-auto py-4">
            <div className="grid grid-cols-12">
              <div className="col-start-3 col-span-8 text-center">
              Welcome to QliQ.in

                <br />

              QliQlin vision is to become online hub for your business, 
              
              <br />Start your online presence with QliQin
              
              </div>
               
              <br />
            </div>
    
            <div className="qliqin-logo-container">
              <div className="flex justify-center">
                <a href="/">
                  <img className="qliqin-logo" src="/images/qliqinlogo-w.png" />
                </a>
              </div>
            </div>
          </div>
        </div>
  );


export default Home;
