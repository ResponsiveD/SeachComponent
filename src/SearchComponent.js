import React from "react";
// import SearchInput from "SearchInput";
let users = [
  {
    _id: "5c80fc8dd0d0c5b25ae1b37d",
    name: "Bartlett Oneil",
    gender: "male"
  },
  {
    _id: "5c80fc8d8a5c8d7feeee472f",
    name: "Hollie Joyner",
    gender: "female"
  },
  {
    _id: "5c80fc8dcfbc0d9869950b85",
    name: "Linda Flores",
    gender: "female"
  },
  {
    _id: "5c80fc8dbbc07d165c09400e",
    name: "Case Pena",
    gender: "male"
  },
  {
    _id: "5c80fc8d16d29dc4acb28bbc",
    name: "Burris Booker",
    gender: "male"
  },
  {
    _id: "5c80fc8d71a836408e9bf187",
    name: "Black Landry",
    gender: "male"
  },
  {
    _id: "5c80fc8dca4eae7d39b26c3d",
    name: "Howe Gonzales",
    gender: "male"
  },
  {
    _id: "5c80fc8db34a560aebe8ca46",
    name: "Yates Duke",
    gender: "male"
  }
];

export default class SearchComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchString: "",
      users: []
    };
    this.handleChange = this.handleChange.bind(this);
  }
  componentDidMount() {
    this.setState({
      users: users
    });
    this.refs.search.focus();
  }
  handleChange() {
    this.setState({
      searchString: this.refs.search.value
    });
  }
  render() {
    let { searchString, users } = this.state;
    let user1 = users;
    let search = searchString.trim().toLowerCase();

    if (search.length > 0) {
      user1 = users.filter(user => user.name.toLowerCase().match(search));
    }

    return (
      <div className="container">
        <div class="row justify-content-center">
          <br />
          <div class="col-12 col-md-10 col-lg-8">
            <h3>Search Component</h3>
            <input
              type="text"
              ref="search"
              value={this.props.searchString}
              placeholder=""
              onChange={this.props.handleChange}
            />
            <ul>
              {user1.map(l => {
                return (
                  <li className="list" key={l._id}>
                    Name: {l.name} Gender: {l.gender}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
