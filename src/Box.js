import React from 'react'
import './drop.css'

function Box(props) {
  const { item } = props
  function myFunction() {
    
    document.getElementById("myDropdown").classList.toggle("show");
  }

  // // Close the dropdown if the user clicks outside of it
  // window.onClick = function (event) {
  //   if (!event.target.matches('.dropbtn')) {
  //     var dropdowns = document.getElementsByClassName("dropdown-content");
  //     var i;
  //     for (i = 0; i < dropdowns.length; i++) {
  //       var openDropdown = dropdowns[i];
  //       if (openDropdown.classList.contains('show')) {
  //         openDropdown.classList.remove('show');
  //       }
  //     }
  //   }
  // }

  return (
    <div>
      <div className="container shadow-lg p-3 mb-5 bg-body-tertiary rounded" key={props.id} style={{ borderRadius: 4 + "px" }}>
        <div className="row">
          <div className="col" id='col1'>{item.name}</div>
          <div className="col" id='col1'>
            <h6>contact</h6>
            <p>
              {item.username}
            </p>
          </div>
          <div className="col" id='col1'>
            <h6>city</h6>
            <p>
              {item.address.city}
            </p>
          </div>
          <div className="col" id='col1' >{item.name}</div>
          <div className="col" id='col1'>  <button onClick={myFunction} class="dropbtn">view details</button></div>
          <div className="col"><div class="dropdown">

            <div id="myDropdown" class="dropdown-content">
             <h5> {item.email}</h5>
             <h5>

              {item.phone}
             </h5>
             <h5>
              {item.company.catchPhrase}
             </h5>
              
            </div>
          </div></div>

        </div>
      </div>
    </div>
  )
}

export default Box