import React, { Component } from 'react'

export default class Fave extends Component {
//       constructor(props) {
//     super(props);
//     this.state = {
//       currentFilter: 'ALL',
//     };
//   }

//   handleFilterClick = (filterType) => {
//     this.setState({ currentFilter: filterType });
//   };

//   render() {
//     const { currentFilter } = this.state;

//     return (
//       <div className="filter">
//         <h2>Filter</h2>
//         <div className="filter-options">
//           <span
//             className={currentFilter === 'ALL' ? 'active' : ''}
//             onClick={() => this.handleFilterClick('ALL')}
//           >
//             ALL
//           </span>
//           <span
//             className={currentFilter === 'FAVES' ? 'active' : ''}
//             onClick={() => this.handleFilterClick('FAVES')}
//           >
//             FAVES
//           </span>
//         </div>
//       </div>
//     );
//   }
// }
constructor(props) {
    super(props);
    this.state = {
      isFave: false,
    };
  }

    handleClick = (e) => {
        e.stopPropagation()
        this.setState((prevState) => ({
            isFave: !prevState.isFave,
          }));
        console.log("Handling Fave click!");

        };
      


  handleFilterClick = (filterType) => {
    this.setState({ currentFilter: filterType });
  };
  render() {
        const { currentFilter } = this.state;

    // handleClick = (e) => {
    //     this.setState({
    //     filmArray: []
    //     })
    //   }
    //   console.log("handling Fave click!")
    return (
              <div className="filter">
        <h2>Filter</h2>
        <div className="filter-options">
          <span
            className={currentFilter === 'ALL' ? 'active' : ''}
            onClick={() => this.handleFilterClick('ALL')}
          >
            
          </span>
          <span
            className={currentFilter === 'FAVES' ? 'active' : ''}
            onClick={() => this.handleFilterClick('FAVES')}
          >
            
          </span>
          </div>
<div className="film-row-fave add_to_queue">
  <p className="material-icons">add_to_queue</p>
      <button onClick={this.handleClick}>
        Click me
      </button></div>
      </div>
      

        )
  }
}